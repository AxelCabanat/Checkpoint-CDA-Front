import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../GraphQL/queries';
import {Continent} from '../Utils/Types'
import { Link } from 'react-router-dom';
const HomePage = () => {

  const {
    loading: continentsLoading,
    data,
  } = useQuery(GET_CONTINENTS);
console.log(data.continents)
  return (
  <div>
    <h1>Choose your country</h1>
    <div className='flex flex-row'>
      {!continentsLoading && 
      data.continents.map((continent: Continent) => 
      <Link to={`/continent/${continent.code}`}>
      <div className='border-2 border-black-300 w-20 h-20 text-center'> {continent.name} </div>
      </Link>)}
    </div>
  </div>
  );
};
  export default HomePage;
  
  