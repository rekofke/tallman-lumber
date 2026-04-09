import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Tools = () => {
  // --- Lumber Board Foot Calculator ---
  const [bfLength, setBfLength] = useState(8);
  const [bfWidth, setBfWidth] = useState(6);
  const [bfThickness, setBfThickness] = useState(1);
  const [bfQuantity, setBfQuantity] = useState(1);
  const [boardFeet, setBoardFeet] = useState(0);

  const calculateBoardFeet = () => {
    const feet = (bfLength * bfWidth * bfThickness) / 144;
    setBoardFeet(feet * bfQuantity);
  };

  // --- Deck Board Calculator ---
  const [deckLength, setDeckLength] = useState(12);
  const [deckWidth, setDeckWidth] = useState(10);
  const [boardWidth, setBoardWidth] = useState(5.5);
  const [gap, setGap] = useState(0.125);
  const [deckBoards, setDeckBoards] = useState(0);

  const calculateDeckBoards = () => {
    const boardsPerRow = deckWidth / ((boardWidth + gap) / 12);
    const rows = deckLength / 12; // assuming deck boards are 12ft long? Actually we need to decide board length.
    // Simpler: total linear feet of deck area divided by board width
    const sqft = deckLength * deckWidth;
    const boardSqft = (boardWidth / 12) * 12; // assuming board length 12ft
    const boardsNeeded = Math.ceil(sqft / boardSqft);
    setDeckBoards(boardsNeeded);
  };

  // --- Concrete Bag Calculator ---
  const [cubicYards, setCubicYards] = useState(1);
  const [bagSize, setBagSize] = useState(60);
  const [bagsNeeded, setBagsNeeded] = useState(0);

  const calculateConcrete = () => {
    // Cubic feet in a yard = 27
    const cubicFeet = cubicYards * 27;
    // Coverage per bag (cubic feet): 60lb = 0.45, 80lb = 0.6
    const coverage = bagSize === 60 ? 0.45 : 0.6;
    setBagsNeeded(Math.ceil(cubicFeet / coverage));
  };

  return (
    <Container className="my-5">
      <h1 className="mb-4">Helpful Tools</h1>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Lumber Board Foot Calculator</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Length (feet)</Form.Label>
                  <Form.Control
                    type="number"
                    value={bfLength}
                    onChange={(e) => setBfLength(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Width (inches)</Form.Label>
                  <Form.Control
                    type="number"
                    value={bfWidth}
                    onChange={(e) => setBfWidth(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Thickness (inches)</Form.Label>
                  <Form.Control
                    type="number"
                    value={bfThickness}
                    onChange={(e) => setBfThickness(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={bfQuantity}
                    onChange={(e) => setBfQuantity(Number(e.target.value))}
                  />
                </Form.Group>
                <Button variant="primary" onClick={calculateBoardFeet}>
                  Calculate
                </Button>
              </Form>
              {boardFeet > 0 && (
                <p className="mt-3 mb-0">
                  <strong>Board feet:</strong> {boardFeet.toFixed(2)}
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Deck Board Calculator</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Deck Length (feet)</Form.Label>
                  <Form.Control
                    type="number"
                    value={deckLength}
                    onChange={(e) => setDeckLength(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Deck Width (feet)</Form.Label>
                  <Form.Control
                    type="number"
                    value={deckWidth}
                    onChange={(e) => setDeckWidth(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Board Width (inches)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.5"
                    value={boardWidth}
                    onChange={(e) => setBoardWidth(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Gap (inches)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.125"
                    value={gap}
                    onChange={(e) => setGap(Number(e.target.value))}
                  />
                </Form.Group>
                <Button variant="primary" onClick={calculateDeckBoards}>
                  Calculate
                </Button>
              </Form>
              {deckBoards > 0 && (
                <p className="mt-3 mb-0">
                  <strong>Boards needed (approx):</strong> {deckBoards}
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>Concrete Bag Calculator</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Cubic Yards Needed</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.5"
                    value={cubicYards}
                    onChange={(e) => setCubicYards(Number(e.target.value))}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Bag Size (lb)</Form.Label>
                  <Form.Select
                    value={bagSize}
                    onChange={(e) => setBagSize(Number(e.target.value))}
                  >
                    <option value="60">60 lb</option>
                    <option value="80">80 lb</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={calculateConcrete}>
                  Calculate
                </Button>
              </Form>
              {bagsNeeded > 0 && (
                <p className="mt-3 mb-0">
                  <strong>Bags needed:</strong> {bagsNeeded}
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tools;
