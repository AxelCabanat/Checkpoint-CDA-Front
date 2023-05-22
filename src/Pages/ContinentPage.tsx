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
        <div>
        <p>{data.continent.name}</p>
        <div>
            {
                data.continent.countries.map(
                    (country: Country, index:number) =>  
                    <Link to={`/country/${country.code}`}> 
                    <div key={index} className="flex flex-row">         
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