import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from '../GraphQL/queries';
import {Continent} from '../Utils/Types'
import { Link } from 'react-router-dom';
const HomePage = () => {

  const {
    loading: continentsLoading,
    data,
  } = useQuery(GET_CONTINENTS);

  return (
  <div className='flex flex-col justify-center'>
    <h1 className='m-auto text-xl'>Choose your country</h1>
    <div className="grid grid-cols-4">
      {!continentsLoading && 
      data.continents.map((continent: Continent) => 
      <Link to={`/continent/${continent.code}`}>
      <div className='border-2 border-black-300 text-center h-48 flex flex-col justify-center'> {continent.name} </div>
      </Link>)}
    </div>
  </div>
  );
};
  export default HomePage;
  
  