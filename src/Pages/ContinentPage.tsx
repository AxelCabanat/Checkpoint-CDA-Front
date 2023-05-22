import { useParams } from "react-router";
import { useQuery } from '@apollo/client';
import { GET_ONE_CONTINENT } from '../GraphQL/queries';
import { Country } from "../Utils/Types";

const ContinentPage = () => {

    const { code } = useParams<string>();

    const { data } = useQuery(
        GET_ONE_CONTINENT,
        { variables: { code: code! } },
      );
if (data!) console.log(data.continent.countries)
return (
    <div>
        {data! && 
        <div>
        <p>{data.continent.name}</p>
        <div>
            {
                data.continent.countries.map(
                    (country: Country, index:number) =>   
                    <div key={index} className="flex flex-row">         
                        <p >{country.emoji}</p>
                        <p >{country.name}</p>
                    </div>
                )
            }
        </div>
        </div>
}
    </div>
)
}

export default ContinentPage