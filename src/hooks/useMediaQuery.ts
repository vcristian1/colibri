// This code is a custom React hook that allows the user to check if a media query matches the current window size. 
// It uses the useState and useEffect hooks from React to set and update the state of the media query. 
import { useState, useEffect } from "react";

// The useMediaQuery function takes in a query string as an argument, which is used to create a matchMedia object. 
const useMediaQuery = (query: string) => {
// The matches state is then set to the value of media.matches, which will be true or false depending on if the query matches or not. 
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    // A listener is then added to the window resize event, which will update the matches state when it changes. 
    window.addEventListener("resize", listener);
    // Finally, an event listener is removed when the component unmounts.
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;