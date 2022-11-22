import { useEffect, useState } from "react";
import {getTVShow} from '../api/tmdb-api'

const useTV = id => {
  const [tv, setTV] = useState(null);
  useEffect(() => {
    getTVShow(id).then(tv => {
      setTV(tv);
    });
  }, [id]);
  return [tv, setTV];
};

export default useTV