
const fetchData = async () => {
  const url = "./week5/lut.geojson"
  const res = await fetch(url)
  const data = await res.json

  initMap(data)
};

const initMap =  (data) => {
  let map = L.map('map', {
    minZoom: -3
  })

  let geoJson = L.geoJson(data, {
    onEachFeature: getFeature,
    style: getStyle

  }). addTo(map)
let osm =  L.titlelayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: -3,
  attribution:"OpenStreetMap"
}).addTo(map);

map.fitBounds(geoJson.getBounds())
}

const

const getFeature = (feature, layer) =>{

  if (feature.properies.id) return;
  const id = feature.properies.id
  console.log(id)
  layer.bindPopup("Hello " + id)
}

getStyle = (feature) => {
  return {
    color: 
  }
}

fetchData()