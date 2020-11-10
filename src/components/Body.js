import React from 'react';

export default function Body() {
  return <h1>Body</h1>
}

function Card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <a href={props.url}  target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src={props.cardImage} />
      </a>
      <Card.Body>
        <Card.Title>
          {props.name}{props.openSourceLogo}
        </Card.Title>
        <Card.Text className="text-muted">
          {props.desc}
        </Card.Text>
        <span>
          {topicButtons}
          {langButtons}
        </span>
      </Card.Body>
      <Card.Footer >
      <div>
        <a href={props.url}  target="_blank" rel="noopener noreferrer">
          GitHub <FontAwesomeIcon icon={faCode} />
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {globeLogo}
      </div>
      </Card.Footer>
    </Card>
  )
}
