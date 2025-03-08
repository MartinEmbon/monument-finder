import React, { useState, useEffect } from 'react';
// import QRCode from 'react-qr-code'; 
import './MonumentPage.css'; // Your CSS file for styling
import image from "./assets/images/cartel-paso-1.jpeg"; // Adjust path as needed
import logo from "./assets/images/logoCorrientesTur.svg"; // ✅ Correct path

// Mock Data (This would be replaced with actual data from your database)
const mockMonumentData = {
    id: 2,
    name: "Paso de la Patria",
    location: "Corrientes, Argentina",
    description:
        "Paso de la Patria es un destino turístico famoso por sus playas de arena dorada y aguas cristalinas. Es un lugar ideal para el descanso, la pesca deportiva y los deportes acuáticos.",
    history:
        "Paso de la Patria tiene una gran importancia histórica y cultural en Corrientes. Durante la Guerra de la Triple Alianza, fue un punto estratégico y hoy en día es un atractivo turístico que combina historia y naturaleza.",
    imageUrl: image, // Imagen representativa del lugar
    qrCodeLink: "https://example.com/monumento/paso-de-la-patria", // Enlace ficticio para la página del monumento
};

function MonumentPage() {
    const [monument, setMonument] = useState(null);

    useEffect(() => {
        // Here you would fetch the monument data by its ID or QR code
        // For now, we'll just use the mock data
        setMonument(mockMonumentData);
    }, []);

    if (!monument) return <p>Loading...</p>;

    return (
        <div className="monument-page">
            <header className="monument-header">
                <img src={logo} alt="Corrientes Ministerio de Turismo" className="logo" />
                <div className="header-text">
                    <h1>{monument.name}</h1>
                    <p className="monument-location">{monument.location}</p>
                </div>
            </header>

            <section className="monument-details">
                <img src={monument.imageUrl} alt={monument.name} className="monument-image" />
                <p className="monument-description">{monument.description}</p>
                <h3>Historia</h3>
                <p className="monument-description">{monument.history}</p>
            </section>

            {/* <section className="monument-qr">
        <h3>Scan the QR Code for More Info:</h3>
      </section> */}
            {/* <QRCode value={monument.qrCodeLink} size={128} /> */}

            <section className="monument-advertisement">
                <h3>Patrocinado por el Gobierno</h3>
                <p>Explora más sobre la rica historia de Argentina. Visita el sitio oficial de turismo para conocer las últimas novedades.</p>
                <a href="https://corrientes.tur.ar/" target="_blank" rel="noopener noreferrer">
                    <button className="advertisement-btn">Visitar Sitio de Turismo</button>
                </a>
            </section>
        </div>
    );
}

export default MonumentPage;
