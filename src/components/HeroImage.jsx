import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // import Link

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('/tallman_media/Tallman Jpg/HeroImg.jpg')", // fixed path
          height: 400,
        }}
      >
        <div
          className="mask"
          style={{ backgroundColor: "rgba(65, 105, 225, 1)" }}
        >
          <div className="text-white">
            <h1 className="mb-3">Tallman Lumber</h1>
            <h4 className="mb-3">Proudly serving northern Nevada since 1955</h4>
            <Link
              to="/contact#quote"
              className="btn btn-outline-light btn-lg"
              role="button"
            >
              Click here for a free quote!
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
