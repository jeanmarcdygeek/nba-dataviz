import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button
          aria-pressed={true}
          className="active"
          color="primary"
          href="#pablo"
          onClick={e => e.preventDefault()}
          role="button"
          size="lg"
        >
          Primary link
        </Button>
        <Button
          aria-pressed={true}
          className="active"
          color="secondary"
          href="#pablo"
          onClick={e => e.preventDefault()}
          role="button"
          size="lg"
        >
          Link
        </Button>
      </>
    );
  }
}

export default Buttons;