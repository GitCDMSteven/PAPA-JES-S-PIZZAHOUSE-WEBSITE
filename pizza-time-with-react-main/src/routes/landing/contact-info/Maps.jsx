import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

// Updated coordinates for Rodriguez, Rizal
const position = [14.7520242, 121.141028];

const Maps = () => {
  return (
    <div className="map" aria-label="Company Location">
      <MapContainer
        id="map"
        center={position}
        zoom={20} // closer zoom for street-level view
        scrollWheelZoom={false}
        loading="lazy"
        style={{ height: "400px", width: "100%" }} // ensures map is visible
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
