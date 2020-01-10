import React from "react";
import { connect } from "react-redux";
import Result from "./Result";

function Results(props) {
  console.log(props);

  if (props.searchResults) {
    return <div style={{marginTop:20}}>{renderSearchResults(props.searchResults)}</div>;
  } else {
    return null;
  }
}

const renderSearchResults = searchResults => {
  return searchResults.map((result, i) => {
    return <Result delay={i} result={result} />;
  });
};

const mapStateToProps = state => {
  return {
    searchResults: state.search.get("searchResults")
  };
};

export default connect(mapStateToProps)(Results);
