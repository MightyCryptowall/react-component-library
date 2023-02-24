import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

interface useRickAndMortyProps {
  
}

const fetchRepoData = (): { info: {count: number} } => ({
    info:{
      count: 3535
    }
})
    

// axios
//   .get('https://rickandmortyapi.com/api/character')
//     .then((response) => response.data)
 
const useRickAndMorty = () => {
  return useQuery(['rick-and-morty-characters'], fetchRepoData)
}
 
export default useRickAndMorty;