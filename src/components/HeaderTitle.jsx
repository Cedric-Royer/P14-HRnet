import PropTypes from "prop-types";

function HeaderTitle(props) {
  return (
      <div className="title">
        <h1>{props.title}</h1>
      </div>
  )
}

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
  
export default HeaderTitle