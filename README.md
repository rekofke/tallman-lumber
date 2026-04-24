# 🪵 Tallman Lumber – Full‑Stack Business Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-2.3-lightgrey)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live site:** [tallman-lumber.com](https://tallman-lumber.com)

A complete digital presence for a family‑owned lumber yard in Winnemucca, NV. This project combines a **React SPA** frontend with a **Flask REST API** backend, delivering a fast, SEO‑optimized user experience and an automated communication hub.

---

## 🚀 Features

- **Single‑Page Application** – Instant client‑side routing with React Router DOM (sub‑second navigation).
- **Dynamic Product Catalog** – Tables, list groups, and reusable data arrays for lumber, sheathing, trim, roofing, and more.
- **Contact Hub** – Three forms (General Inquiry, Quote Request, Project Submission) powered by EmailJS, saving the owner ~10 hours/month of manual follow‑up.
- **Newsletter Integration** – Footer‑embedded MailerLite signup (custom React component) – grew list to 150+ subscribers in two months.
- **Customer Engagement** – Elfsight reviews widget, project gallery, contractor referral directory, and an accordion FAQ.
- **Local SEO** – Sitemap, JSON‑LD schema, robots.txt, Google Maps iframe – drove 300% organic traffic from nearby cities (Reno, Elko, Battle Mountain).
- **Admin‑Friendly** – Content updates via simple data arrays (no database edits needed for product lists).
- **Full‑Stack Ready** – Backend API (Flask, SQLAlchemy, JWT) for future features like class bookings, user accounts, and client management.

---

## 🧰 Tech Stack

### Frontend
- **React 18** + **Vite** – fast builds, modern HMR
- **React Router DOM** – SPA routing with anchor links
- **React‑Bootstrap** + **Custom CSS** – responsive, brand‑consistent UI (navy/royal blue/gray)
- **EmailJS** – serverless email forms
- **MailerLite** – newsletter signup and subscriber management
- **Elfsight** – customer reviews carousel

### Backend (optional, for future expansion)
- **Flask** – REST API framework
- **Flask‑SQLAlchemy** – ORM for PostgreSQL/SQLite
- **Flask‑Marshmallow** – schema serialization
- **Flask‑JWT‑Extended** – authentication
- **Flasgger** – Swagger UI documentation

### DevOps & Tools
- **Git** + **GitHub** – version control
- **Netlify** – frontend hosting, custom domain, continuous deployment
- **GitHub Actions** – CI/CD pipeline (planned)
- **Render** – backend hosting (optional)

---

## 📁 Project Structure
