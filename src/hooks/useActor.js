import { useEffect, useState } from "react";
import {getActor} from '../api/tmdb-api'

const useActor = id => {
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActor(id).then(movie => {
      setActor(actor);
    });
  }, [id]);
  return [actor, setActor];
};

export default useActor