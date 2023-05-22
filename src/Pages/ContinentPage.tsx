import { useParams } from "react-router";
import { useQuery } from '@apollo/client';
import { GET_ONE_CONTINENT } from '../GraphQL/queries';
import { Country } from "../Utils/Types";
import { Link } from "react-router-dom";

const ContinentPage = () => {

    const { code } = useParams<string>();

    const { data } = useQuery(
        GET_ONE_CONTINENT,
        { variables: { code: code! } },
      );

return (
    <div>
        {data! && 
        <div className="flex flex-col justify-center">
        <h1 className='m-auto text-xl'>{data.continent.name}</h1>
        <h2 className='m-auto text-m'>Countries</h2>
        <div className="grid grid-cols-4">
            {
                data.continent.countries.map(
                    (country: Country, index:number) =>  
                    <Link to={`/country/${country.code}`}> 
                    <div key={index} className='border-2 border-black-300 text-center h-48 flex flex-col justify-center'>         
                        <p >{country.emoji}</p>
                        <p >{country.name}</p>
                    </div>
                    </Link>
                )
            }
        </div>
        </div>
}
    </div>
)
}

export default ContinentPage