import { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "reno",
        },
      });
      setResults(res.data.businesses);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    }
  };

  useEffect(() => {
    // searchApi("pasta")
    console.log("fetching businesses");
  }, []);

  return [searchApi, results, errorMessage]
};
