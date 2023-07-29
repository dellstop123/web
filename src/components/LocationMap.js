// src/components/LocationMap.js

import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const LocationMap = () => {
  const position = [32.483162, 75.393128] // Set the latitude and longitude of your location here

  return (
    <MapContainer center={position} zoom={4} style={{ height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample location in Gatsby!
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LocationMap
