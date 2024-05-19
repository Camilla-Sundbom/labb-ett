import PropTypes from "prop-types";

function DisplayComponent({ value }) {
  return (
    <div>
      <h2>Submitted Value: {value}</h2>
    </div>
  );
}

DisplayComponent.propTypes = {
  value: PropTypes.string.isRequired,
};

export default DisplayComponent;
