export default function Planets({ planets }) {

     return (
        <>
            <div>Planets</div>
            {planets.map((person, idx) => <a href={`/planets/${idx+1}`}><div>{person.name}</div></a>)}
        </>
     )

  }

  export async function getServerSideProps() {
    // Call an external API endpoint to get planets
    const res = await fetch('https://swapi.dev/api/planets')
    const json = await res.json()
  
    // By returning { props: { planets } }, the planets component
    // will receive `planets` as a prop at build time
    return {
      props: {
        planets: json.results
      },
    }
  }