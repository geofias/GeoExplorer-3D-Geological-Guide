import React, { useEffect, useRef, useState } from 'react';
import { Viewer, createWorldTerrainAsync, GeoJsonDataSource, Cartesian3 } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import Sidebar from './Sidebar';
import './Sidebar.css';

function App() {
  const cesiumContainer = useRef(null);
  const [siteList, setSiteList] = useState([]);

  useEffect(() => {
    window.CESIUM_BASE_URL = process.env.PUBLIC_URL + '/Cesium';

    const initViewer = async () => {
      const terrain = await createWorldTerrainAsync();

      // Guardamos viewer para futura referencia (como variable global temporal)
      const viewer = new Viewer(cesiumContainer.current, {
        terrainProvider: terrain,
      });

      const dataSource = await GeoJsonDataSource.load(process.env.PUBLIC_URL + '/data/geological_sites.geojson', {
       clampToGround: true
      });

      viewer.dataSources.add(dataSource);
      viewer.flyTo(dataSource);

      // Podrías guardarlo en un useRef si luego necesitas usarlo
      window.cesiumViewer = viewer;
      window.geoDataSource = dataSource;
    };

    initViewer();

  }, []);

  // Cargar datos del GeoJSON
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/geological_sites.geojson')
      .then(res => res.json())
      .then(data => {
        const parsedSites = data.features.map(f => ({
          name: f.properties.name,
          country: f.properties.country,
          coordinates: f.geometry.coordinates
        }));
        setSiteList(parsedSites);
      });
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        sites={siteList}
         onSelectSite={(site) => {
            const viewer = window.cesiumViewer;
            const dataSource = window.geoDataSource;
            if (!viewer || !dataSource || !site.coordinates) return;

            const [lon, lat] = site.coordinates;

            viewer.camera.flyTo({
              destination: Cartesian3.fromDegrees(lon, lat, 550000),
              duration: 2,
              complete: () => {
                const entity = dataSource.entities.values.find(
                  e => e.name === site.name
                );
                if (entity) {
                  viewer.selectedEntity = entity;
                }
              }
            });
          }}
      />
      <div
        ref={cesiumContainer}
        style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}
      ></div>
    </div>
  );
}

export default App;