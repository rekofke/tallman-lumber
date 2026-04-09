import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

// Part I: Product Data and Component Structure
function Products() {
  const lumberProducts = [
    {
      type: "Douglas Fir Boards",
      widths: '2x4", 2x6", 2x8", 2x10", 2x12"',
      lengths: "8ft, 10ft, 12ft, 16ft, 20ft",
    },
    {
      type: "Douglas Fir Beams",
      widths: '4x4", 4x6", 4x8", 4x10", 4x12, 6x6", 6x8"',
      lengths: "8ft, 10ft, 12ft, 16ft, 20ft",
    },
    {
      type: "Pressure Treated Boards",
      widths: '2x4", 2x6", 2x8", 2x10", 2x12", 4x4", 6x6"',
      lengths: "8ft, 10ft, 12ft, 16ft, 20ft",
    },
    {
      type: "Pressure Treated Beams",
      widths: '4x4", 4x6", 6x6"',
      lengths: "6ft, 8ft, 10ft, 12ft, 16ft, 20ft",
    },
    {
      type: "Pine",
      widths: '1x4", 1x6", 1x8", 1x12"',
      lengths: "8ft, 10ft, 12ft, 16ft",
    },
    {
      type: "Cedar",
      widths: "1x4, 1x6",
      lengths: "12ft",
    },
  ];

  const hardWoods = [
    {
      type: "Poplar",
      widths: "Random widths (1x4+)",
      lengths: "Random lengths (10ft+)",
    },
    {
      type: "Birch",
      widths: "Random widths (1x4+)",
      lengths: "Random lengths (10ft+)",
    },
    {
      type: "African Mahogany",
      widths: "Random widths (1x4+)",
      lengths: "Random lengths (10ft+)",
    },
    {
      type: "Red Oak",
      widths: "Random widths (1x4+)",
      lengths: "Random lengths typically (10ft+)",
    },
  ];

  // Trim Products Section

  const sheathingProducts = [
    { type: "OSB", thickness: '7/16", 5/8", 3/4" T&G' },
    { type: "CDX", thickness: '3/8", 1/2", 5/8", 3/4"' },
    { type: "ACX", thickness: '1/4", 3/8", 1/2", 5/8", 3/4"' },
    { type: "AB (Marine)", thickness: '1/2", 3/4"' },
    { type: "MDF", thickness: '1/2", 3/4", 1"' },
    { type: "Melamine", thickness: '1/2", 3/4"' },
    { type: "Particle Board", thickness: '3/8", 1/2", 3/4"' },
    { type: "Oak", thickness: '1/2", 3/4"' }, // Fixed typo
    { type: "Baltic Birch", thickness: '1/8", 1/2", 3/4"' }, // Added missing quotes
  ];

  const backerBoardProducts = [
    { type: "Grip-Rite", thickness: '1/4"', dimensions: "3x5ft" },
    { type: "Grip-Rite", thickness: '1/2"', dimensions: "3x5ft" },
  ];

  const sheetrockProducts = [
    {
      thickness: '3/8"',
      sizes: '4x8"',
      description: "Ideal for ceilings and areas where weight is a concern.",
    },
    {
      thickness: '1/2"',
      sizes: "4x8ft, 4x12ft, 54x12ft",
      description:
        "Standard thickness for walls and ceilings in residential construction.",
    },
    {
      thickness: '5/8"',
      sizes: '4x8", 4x12"',
      description:
        "Provides enhanced fire resistance and soundproofing ideal for commercial buildings and multi-family housing.",
    },
  ];

  const roofingProducts = [
    {
      Brand: "Iko Dynastty",
      name: "",
    },
  ];

  //Part II: Render Product Information
  return (
    <Container className="my-5">
      {/* USP Highlight Section */}
      <div
        className="text-center p-4 p-md-5 mb-4 rounded shadow-sm"
        style={{
          backgroundColor: "#f0f4fc",
          borderLeft: `5px solid #4169e1`, // royal blue
          borderRight: `5px solid #4169e1`,
        }}
      >
        <h2 className="display-5 fw-bold" style={{ color: "#0a192f" }}>
          {" "}
          {/* navy */}
          From foundation to finishing touch
        </h2>
        <p className="lead fs-4 mt-3" style={{ color: "#2c3e66" }}>
          Lumber, doors, windows, cabinets, trim, roofing, and hardware – all
          under one roof, with expert advice at every step.
        </p>
      </div>

      {/* Lumber Products Section */}
      <h2 id="Lumber" className="mb-3">
        Lumber & Structural Materials
      </h2>
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Type</th>
            <th>Widths</th>
            <th>Lengths</th>
          </tr>
        </thead>
        <tbody>
          {lumberProducts.map((product, idx) => (
            <tr key={idx}>
              <td>{product.type}</td>
              <td>{product.widths}</td>
              <td>{product.lengths}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2 id="trim" className="mb-3">
        Exotic and Hardwoods
      </h2>
      <p>
        We offer a selection of premium hardwood boards. They are all 1x boards
        and sold by the board foot. They are random widths and lengths and
        typically between 4"-6" wide and between 10' and 12'.
      </p>
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Type</th>
            <th>Widths</th>
            <th>Lengths</th>
          </tr>
        </thead>
        <tbody>
          {hardWoods.map((product, idx) => (
            <tr key={idx}>
              <td>{product.type}</td>
              <td>{product.widths}</td>
              <td>{product.lengths}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Trim & Millwork Products */}
      <h2 id="trim" className="mb-3">
        Trim & Millwork
      </h2>
      <p>
        Our trim and millwork selection includes a variety of profiles and
        materials to suit any project. From classic crown molding to modern
        baseboards, we have the perfect finishing touches for your home. Our
        products are available in oak, pine and MDF options, ensuring durability
        and style for both interior and exterior applications.
      </p>

      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush shadow-sm rounded">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>CSMDF</strong>
              <span className="badge bg-secondary rounded-pill">
                3 1/4 & 2 1/4
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Pine</strong>
              <span className="badge bg-secondary rounded-pill">
                1½", 2½", 3½"
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Inside & Outside Corner - Oak & Pine</strong>
              <span className="badge bg-secondary rounded-pill">Available</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Bevel (Oak & Pine)</strong>
              <span className="badge bg-secondary rounded-pill">
                Various sizes
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Crown Moulding (MDF)</strong>
              <span className="badge bg-secondary rounded-pill">2¼", 3¼"</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush shadow-sm rounded">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Full Round</strong>
              <span className="badge bg-secondary rounded-pill">
                Various diameters
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Quarter Round</strong>
              <span className="badge bg-secondary rounded-pill">
                Various sizes
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Chamfer</strong>
              <span className="badge bg-secondary rounded-pill">
                Standard sizes
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Screen Moulding</strong>
              <span className="badge bg-secondary rounded-pill">Available</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Cap Moulding</strong>
              <span className="badge bg-secondary rounded-pill">
                Multiple profiles
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-3 text-muted">
        * Many other styles and profiles available – Come on in or give us a
        call to discuss your specific needs!
      </p>

      {/* Sheathing & Panel Products Section */}
      <h2 id="sheathing" className="mb-3">
        Sheathing & Panel Products
      </h2>
      <p>
        **All of our sheathing and plywood products are sold in 4' x 8'
        sheets.**
      </p>

      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Type</th>
            <th>Thickness</th>
          </tr>
        </thead>
        <tbody>
          {sheathingProducts.map((product, idx) => (
            <tr key={idx}>
              <td>{product.type}</td>
              <td>{product.thickness}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Backer Board Products Section */}
      <h2 className="mb-3">Backer Board Products</h2>
      <p>
        Our backer board products are designed for durability and performance in
        demanding applications. They are ideal for use in wet areas such as
        bathrooms, kitchens, and outdoor projects, providing a stable and
        moisture-resistant substrate for tile and other finishes.
      </p>
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Type</th>
            <th>Thickness</th>
            <th>Dimensions</th>
          </tr>
        </thead>
        <tbody>
          {backerBoardProducts.map((product, idx) => (
            <tr key={idx}>
              <td>{product.type}</td>
              <td>{product.thickness}</td>
              <td>{product.dimensions}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Sheetrock Products Section */}
      <h2 className="mb-3">Sheetrock & Drywall</h2>
      <p>All sheetrock is sold in 4' x 8' sheets unless noted otherwise.</p>
      <p>
        In addition to sheetrock, we also offer a full selection of drywall
        tools and accessories, including tape, corner bead, and joint
        compound.{" "}
      </p>
      <Table striped bordered hover responsive className="mb-5">
        <thead>
          <tr>
            <th>Thickness</th>
            <th>Available Sizes</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sheetrockProducts.map((product, idx) => (
            <tr key={idx}>
              <td>{product.thickness}</td>
              <td>{product.sizes}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Roofing Products Section */}
      <h2 id="roofing" className="mb-3">
        Roofing
      </h2>
      <p>
        We are a one stop shop for all of your roofing needs. In addition to
        shingles we carry tar paper, synthetic under-layment, WIP 100 Ice & Fire
        Shield, and much more.
      </p>
      <h3>IKO Dynasty Shingles</h3>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <p>
            <strong>IKO Shingles</strong> – Trusted roofing protection with
            style and durability. IKO is a leading global manufacturer known for
            high-performance asphalt shingles that stand up to harsh weather
            while enhancing curb appeal. Their architectural shingles offer
            dimensional depth and come in a variety of rich colors to complement
            any home. With advanced technologies like ArmourZone™ reinforcement
            and Dual-Intensity™ nailing strips, IKO shingles provide superior
            wind resistance and easier installation. Backed by industry-leading
            warranties, IKO gives you peace of mind for decades to come. Stop by
            to see our color selection in person
          </p>
        </Col>
        <Col md={6}>
          <h3>Metal Roofing</h3>
          <p>
            We have three sizes the imperial rib style of metal roofing in
            stock, and all three types are the standard 36" wide. 3' x 8', 3' x
            10' and 3' x 12'. If you would prefer some color in your roof we can
            order your choice color in your custom size. typical turn around
            time on metal orders averages around 2-3 weeks.
          </p>
        </Col>
      </Row>

      <h2 id="bagged" className="mb-3">
        Bagged Products
      </h2>
      <p>
        We carry a full line of bagged materials for concrete, masonry, tile and
        landscaping projects.
      </p>
      <ul className="list-group mb-4">
        <li className="list-group-item">
          ✔ <strong>Concrete Mix</strong> – 60lb bags for sidewalks, footings,
          and general use
        </li>
        <li className="list-group-item">
          ✔ <strong>Mortar Mix</strong> – Type S for brick and block
          construction
        </li>
        <li className="list-group-item">
          ✔ <strong>Sand</strong> – 30 Grit, 60 Grit, Polymeric, and all-purpose
          sand
        </li>
        <li className="list-group-item">
          ✔ <strong>Cement</strong> – 47lb bag For fast repairs and post setting
        </li>
        <li className="list-group-item">
          ✔ <strong>Lime</strong> – 50lb bag For traditional masonry mixes
        </li>
        <li className="list-group-item">
          ✔ <strong>Ardex Concrete Patch</strong> – 40lb bag Easy-to-use repair
          products
        </li>
        <li className="list-group-item">
          ✔ <strong>VersaBond Thinset</strong> – 50lb bags of tile mortar in
          gray or white both fortified and non-fortified.
        </li>
      </ul>

      {/* Paint Products */}
      <h2 className="mb-3">Paint Products</h2>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <p>
            We are proud distributors of Valspar paint products, offering a wide
            range of interior and exterior paints, primers, and stains. Our
            selection includes options for every project, from durable exterior
            paints to low-VOC interior finishes. Whether you're looking to
            refresh a room or protect your home's exterior, we have the right
            paint for you.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/tallman_media/Tallman Jpg/Paint1.jpg"
            className="img-fluid rounded-top"
            alt="Paint Products"
          />
        </Col>
      </Row>

      {/* Doors Section */}
      <h2 id="doors" className="mb-3">
        Doors
      </h2>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <p>
            Tallman Lumber features a newly remodeled fully functional door shop
            allowing us to build you a new door, or even just repair or upgrade
            your current door. We offer a large variety of sizes as well as a
            vast selection of style options. For individuals looking for a more
            custom option, we are partnered with WoodGrain Doors to offer you a
            wide variety of custom door options. We can help you find the
            perfect door for your project, whether it’s a simple interior door
            or a grand entryway.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/tallman_media/Tallman Jpg/woodgrainDoor2.jpg"
            className="img-fluid rounded-top"
            alt="Door Slabs"
          />
        </Col>
      </Row>

      {/* Windows Section */}
      <h2 id="windows" className="mb-3">
        Windows
      </h2>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <p>
            We offer a wide selection of windows including single & double-hung,
            vented sliding and more, Energy-efficient options are available. Our
            partnership with Amsco ensures quality and durability.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/tallman_media/Tallman Jpg/Amsco2.webp"
            className="img-fluid rounded"
            alt="Windows"
          />
        </Col>
      </Row>

      {/* Cabinets Section */}
      <h2 id="cabinets" className="mb-3">
        Cabinets
      </h2>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <p>
            Discover our premium cabinet collection, crafted by Fashion Cabinets
            in Utah—renowned for quality and design. Mike Thompson of M.T.
            Construction serves as our dedicated representative, guiding you
            from selection to professional installation. Whether you're updating
            a kitchen, bath, or custom storage space, Mike’s expertise ensures a
            perfect fit for your style and needs. Contact us to schedule a
            consultation or request a quote.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/tallman_media/Tallman Jpg/Cabinet2.png"
            className="img-fluid rounded-top"
            alt="Cabinets"
          />
        </Col>
      </Row>

      <p className="text-muted mt-4">
        *Contact us for current inventory and special orders.
      </p>
    </Container>
  );
}

export default Products;
