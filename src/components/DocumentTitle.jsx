import { useEffect } from "react";
import PropTypes from "prop-types";

function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DocumentTitle;
