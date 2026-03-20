import React from "react";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container className="my-5">
      <h1>Frequently Asked Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What types of lumber do you sell?</Accordion.Header>
          <Accordion.Body>
            We carry a wide range of wood products including Douglas Fir,
            Pressure-Treated, Pine, Cedar, Mahogany, Oak, Plywood, OSB, and
            more. Visit our products page for more details.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you offer delivery?</Accordion.Header>
          <Accordion.Body>
            Yes, we deliver all throughout northern Nevada including Reno,
            Fernley, Winnemucca, Battle Mountain, Elko and more. Delivery fee
            depends on the distance, order size and the size of truck needed for
            the delivery. Please feel free to contact us or submit a quote
            request for specific cost.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          {" "}
          {/* changed to "2" */}
          <Accordion.Header>How do I get a quote?</Accordion.Header>
          <Accordion.Body>
            There are several ways you can obtain an estimate. You can come into
            the store during regular business hours with a materials list and we
            will print you a quote. You can obtain one over the phone, or by
            clicking the contact section on the website and filling out the form
            labeled Request a Quote. This will send us an email and we will
            contact you with the requested quote as soon as possible.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you accept returns?</Accordion.Header>
          <Accordion.Body>
            We do accept returns with a few exsceptions - We will not return
            used or open items. - We will not return discounted or cull items. -
            we will not return used lumber or lumber that has sat out and is not
            in the same condition as it was purchased
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Will you cut my lumber to size?</Accordion.Header>
          <Accordion.Body>
            We will absolutely cut your lumber for you to size. Depending on the
            amount of cuts needed there may be an associated cost with the cuts.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can somebody help me get the measurements for the door I need?
          </Accordion.Header>
          <Accordion.Body>
            We are more than willing to come out and take the door measurements
            for you. This may be the better option if you are unexperienced in
            this area because if you give us the wrong measurements and we build
            your door with them, you are unfortunately stuck with that door.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you accept returns?</Accordion.Header>
          <Accordion.Body>
            We do accept returns with a few exsceptions - We will not return
            used or open items. - We will not return discounted or cull items. -
            we will not return used lumber or lumber that has sat out and is not
            in the same condition as it was purchased
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Do you sell custom windows?</Accordion.Header>
          <Accordion.Body>
            We are an authorized dealer of Amsco windows. We carry a selection
            of stock sized windows in store. If you require a custom size we can
            absolutely order it for you, delivery time is typically three weeks.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
