//创建一个地图对象
var map = L.map('map').setView([39.90723, 116.39126], 18);
// 创建贴图
 L.tileLayer('http://map.zhtu.net:8080/r3t-basemap/{z}/{x}/{y}/tile.jpg', {
   tileSize: 256,
   minZoon: 1,
   maxZoom: 18,
 }).addTo(map);

// 添加比例尺
L.control.scale({ position: 'topright' }).addTo(map);

// 双击事件回调
function onMapDblClick(e) {
  var latlng = e.latlng;
  var marker = L.marker([latlng.lat, latlng.lng], {label: latlng+''});
  marker.addTo(map).bindPopup('纬度: ' + latlng.lat + '<br/>经度: ' + latlng.lng).openPopup();
  // console.log("You clicked the map at ", e.latlng, e);
}
// 添加双击事件
map.on('dblclick', onMapDblClick);