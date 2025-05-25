# GeoExplorer: A 3D Interactive Guide to the World's Most Remarkable Geological Sites

## 🌐 Project Overview
GeoExplorer is a GIS-based digital exploration tool designed to showcase the most iconic geological and natural sites around the world. The project integrates geospatial data with 3D visualization to help users explore and learn about these destinations interactively. Ideal for geoscience enthusiasts, educators, students, and travelers.

## 🎯 Objective
To create a spatial database and interactive map platform that:
- Highlights significant geologic/natural sites globally.
- Provides 3D views of terrains and features (volcanoes, canyons, faults, etc.).
- Displays curated geological, historical, and travel-related information.
- Serves as an educational and exploratory guide.

## 🧭 Features
- 🌍 **Interactive Map**: Users can click on locations to access rich multimedia and geological facts.
- 🏔️ **3D Views**: Elevation and topography rendered using terrain data or embedded Earth viewers.
- 🧪 **Geological Information**: Rock types, formation history, tectonic relevance, and hazards.
- ✈️ **Visitor Info**: Best visiting times, accessibility, local tips.

## 🔍 Sample Sites
| Name              | Country      | Feature Type | Elevation | Notable For                  |
|-------------------|--------------|--------------|-----------|------------------------------|
| Mount Everest     | Nepal/China  | Mountain     | 8848 m    | Highest point on Earth       |
| Grand Canyon      | USA          | Canyon       | 1600 m    | Erosional landform & strata  |
| El Valle Volcano  | Panama       | Stratovolcano| 600 m     | Nested caldera, tourism      |

## 🛠️ Tools & Technologies
- **GIS Software**: QGIS, ArcGIS Pro (optional)
- **Web GIS**: Leaflet.js / Mapbox GL JS / CesiumJS (for 3D)
- **Data Sources**:
  - USGS, OneGeology, GEBCO, Natural Earth
  - GeoNames (location names)
- **Frontend**: HTML, CSS, JavaScript
- **3D Terrain**: Cesium Ion or Google Earth Studio (for static shots)

## 🗂️ Data Structure
- Format: `GeoJSON` or `Shapefile`
- Fields: `name`, `type`, `coordinates`, `elevation`, `summary`, `geology_info`, `travel_tips`, `image`, `3D_view_link`

## 🔍 Sample Sites
| Name              | Country      | Feature Type | Elevation | Notable For                  |
|-------------------|--------------|--------------|-----------|------------------------------|
| Mount Everest     | Nepal/China  | Mountain     | 8848 m    | Highest point on Earth       |
| Grand Canyon      | USA          | Canyon       | 1600 m    | Erosional landform & strata  |
| El Valle Volcano  | Panama       | Stratovolcano| 600 m     | Nested caldera, tourism      |

## 🎨 Visualization Design
- Light/dark basemaps switchable via toggle
- 3D terrain with markers and pop-ups
- Geological icons per site type (volcano, cave, fossil, etc.)
- Site facts and travel tips shown in sidebar

## 🧪 How to Contribute
1. Fork the repo
2. Add a new site to the `geo_sites_worldwide.geojson` following the existing schema
3. Submit a Pull Request

## 🌐 Future Features
- Add filtering by country or site type
- Integrate satellite overlays (e.g., Landsat)
- Export route maps for travel planning
- Implement multilingual support

## 🧾 License
This project is licensed under the MIT License.

---
> **Author**: Tamir Chong  
> **LinkedIn**: [https://www.linkedin.com/in/tamirchong/](https://www.linkedin.com/in/tamirchong/)  
> **Email**: tamir-chong@hotmail.com
