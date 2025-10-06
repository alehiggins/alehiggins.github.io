import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // Agrupar items por "group"
  const grouped = dataportfolio.reduce((acc, item) => {
    if (!acc[item.group]) {
      acc[item.group] = [];
    }
    acc[item.group].push(item);
    return acc;
  }, {});

  // Orden personalizado de los grupos
  const groupOrder = [
    "logotipe",
    "social-media",
    "visual-content",
    "gadget",
    "brochure",
    "other"
  ];

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Render grupos en el orden definido */}
        {groupOrder.map((groupName) =>
          grouped[groupName] ? (
            <div key={groupName} className="portfolio-group">
              <h2 className="group-title">{groupName}</h2>
              <div className="po_items_ho">
                {grouped[groupName].map((data, i) => (
                  <div key={i} className="po_item">
                    <img src={data.img} alt={data.description} />
                    <div className="content">
                      <p>{data.description}</p>
                      {data.link && <a href={data.link}>view project</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </Container>
    </HelmetProvider>
  );
};

