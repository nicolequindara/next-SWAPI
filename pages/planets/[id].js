
export default function Planet({planet}) {


    // if (isLoading) return <p>Loading...</p>
    // if (!data) return <p>No planet data</p>

    return (
        <div>
            <h1>{`Planet ${planet.name}`} </h1>
            <p>Rotational Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>Diameter: {planet.diameter}</p>
        </div>
    )
}

  export async function getServerSideProps(context) {
    // Call an external API endpoint to get planets
    const {id} = context.params
    const res = await fetch(`https://swapi.dev/api/planets/${id}`)
    const json = await res.json()
  
    // By returning { props: { planets } }, the planets component
    // will receive `planets` as a prop at build time
    return {
      props: {
        planet: json
      },
    }
  }