export default function People({ people }) {

     return (
        <>
            <div>People</div>
            {people.map((person, idx) => <a href={`/people/${idx+1}`}><div>{person.name}</div></a>)}
        </>
     )

  }

  export async function getStaticProps() {
    // Call an external API endpoint to get people
    const res = await fetch('https://swapi.dev/api/people')
    const json = await res.json()
  
    // By returning { props: { people } }, the People component
    // will receive `people` as a prop at build time
    return {
      props: {
        people: json.results
      },
    }
  }