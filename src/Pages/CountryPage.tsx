import { useParams } from "react-router";
import { useQuery } from '@apollo/client';
import { GET_ONE_COUNTRY } from '../GraphQL/queries';

const CountryPage = () => {

    const { code } = useParams<string>();

    const { data } = useQuery(
        GET_ONE_COUNTRY,
        { variables: { code: code! } },
      );

return (
    <div>
        {data! && 
        <div>
            <p>{data.country.name}</p>
        </div>
}
    </div>
)
}

export default CountryPage