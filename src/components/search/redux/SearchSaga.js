import types from "../types";
import { debounce, put, call } from "redux-saga/effects";
import {setSearchResult } from '../action';
import axios from "axios";

function* setSearch({value}) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bkO1TSLMY6k6lLMN3LwnlRUpXW22I2R3&q=${value}&limit=25`;
    const data = yield axios.get(url);
    return yield put(setSearchResult(data.data.data));
    
  } catch (e) {
    console.log(e);
  }
}

function *watchSearch() {
  yield debounce(1000,types.watchGetSearchResults, setSearch);
}


export default watchSearch;