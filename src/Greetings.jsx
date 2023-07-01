

import { useGetGreetingQuery } from './Redux/apiSlice';

function Greeting() {


	const { data: greeting, error, isLoading } = useGetGreetingQuery();



		if (isLoading) return <div>Loading...</div>
		if (error) return <div>{error}</div>

		return (
			<div style={{ backgroundColor: 'lightblue', padding: '10px', fontSize: '16px' }}>
				Random Greeting: {greeting.message}
			</div>
		);
				
}

export default Greeting;