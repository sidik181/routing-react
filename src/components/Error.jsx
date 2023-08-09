import React from 'react'

function Error({error}) {
	return (
		<>
			<p className='--bs-danger'>Error: {error}</p>
		</>
	)
}

export default Error