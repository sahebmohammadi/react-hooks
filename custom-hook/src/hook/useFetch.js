import { useEffect, useReducer } from "react";
import axios from "axios";

const initialSatate = {
  error: null,
  data: null,
  loading: false,
};

const actions = {
  fetchRequest: "FETCH_DATA_REQUEST",
  fetchSuccess: "FETCH_DATA_SUCCESS",
  fetchFailure: "FETCH_DATA_FAILURE",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.fetchRequest: {
      return { ...state, loading: true, error: null, data: null };
    }
    case actions.fetchSuccess: {
      return { ...state, loading: false, error: null, data: action.payload };
    }
    case actions.fetchFailure: {
      return { ...state, loading: false, error: action.payload, data: null };
    }
    default:
      return state;
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialSatate);

  useEffect(() => {
    dispatch({ type: actions.fetchRequest });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: actions.fetchSuccess, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: actions.fetchFailure, payload: err.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
