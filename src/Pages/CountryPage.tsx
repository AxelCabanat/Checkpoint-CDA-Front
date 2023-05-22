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
    <div className='flex flex-col justify-center'>
        {data! && 
        <div className="m-auto flex flex-col justify-center">
            <h1 className='m-auto text-xl'>{data.country.name}</h1>
            <p className='m-auto text-xl'>{data.country.emoji}</p>
            <p className='m-auto'>{`Currency: ${data.country.currency}`}</p>
            <p className='m-auto'>{`Capital: ${data.country.capital}`}</p>
        </div>
}
    </div>
)
}

export default CountryPage