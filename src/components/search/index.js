import React from "react";
import { connect } from "react-redux";
import { getSearchResults } from "./action";
import { SearchWrapper, InputStyle } from "./styled";

function Search(props) {
  console.log(props);
  return (
    <SearchWrapper>
      <InputStyle onChange={e => onInputChange(e, props)} />
    </SearchWrapper>
  );
}

async function onInputChange(e, props) {
  if (e.target.value.trim() !== "") {
    props.getSearchResults(e.target.value);
  }
}

const mapDispatchToProps = {
  getSearchResults
};

export default connect(null, mapDispatchToProps)(Search);
