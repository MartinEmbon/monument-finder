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
    const [showAd, setShowAd] = useState(true);

  const handleAdClose = () => {
    setShowAd(false);
  };
  useEffect(() => {
    const video = document.querySelector('.ad-video');
    if (video) {
      video.play().catch((error) => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);
    useEffect(() => {
        // Here you would fetch the monument data by its ID or QR code
        // For now, we'll just use the mock data
        setMonument(mockMonumentData);
    }, []);

    if (!monument) return <p>Loading...</p>;

    return (
        <div className="monument-page">

{showAd && (
        <div className="ad-overlay">
          <video className="ad-video" autoPlay playsinline muted loop>
            <source src="https://rr4---sn-bg0e6ne7.googlevideo.com/videoplayback?expire=1741477853&ei=fYPMZ8_oMr-LkucPyMv1kAo&ip=156.237.44.132&id=o-ADvhslVM6iJ9xpejpH4LtmwmNonrwgBby7toWOENBnVV&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AUWDL3x7qyKMWw3Px4_X74qdxY3Jo_RnxCqFBzEqb6lHzuDZP2AoDrb-t_JmJzOJxKAivB5Hgv3CpQ3U&spc=RjZbSbzK-De2BUvNFf6PaqE-DPCBd-ZoW9GwAkHzLBgr773QcnXMtzVDHf8aSaaRs8pkTDPD&vprv=1&svpuc=1&mime=video%2Fmp4&ns=rJ_OECNo0gBgQoKyW9zza0cQ&rqh=1&cnr=14&ratebypass=yes&dur=27.724&lmt=1696937215554724&lmw=1&fexp=24350590,24350737,24350827,24350961,24351148,24351173,24351275,24351283,24351347,24351349,24351377,51326932,51358316,51411872&c=TVHTML5&sefc=1&txp=6310224&n=6loX7hMfYkCJGw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgaLGuDeRBYGLK8qVBTrswdiecDSBqnO5esc8IoAKO3awCICmdvoF5M9nptq1-xjpv7R8beQbhuf1fwj08qKlx4Bj5&rm=sn-gjo-w43s7e&rrc=79,80&req_id=627788465b2fa3ee&redirect_counter=2&cm2rm=sn-ab5ely76&cms_redirect=yes&cmsv=e&met=1741456258,&mh=EM&mip=181.91.217.137&mm=34&mn=sn-bg0e6ne7&ms=ltu&mt=1741455875&mv=m&mvi=4&pl=21&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRQIhAOHF1yRF-lsyyugT1N6Los_1oudn-RZNBpvw8U4r-fBLAiA92rjEzQvmdtuup7YdCr_3-CUIFaCe1Xw8nwx1NOEEow%3D%3D" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="ad-close-btn" onClick={handleAdClose}>
            Cerrar Publi
          </button>
        </div>
      )}


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
