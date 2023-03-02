export default function Person({ person }) {

    return (
       <>
           <div>Person</div>
           <div>Name: {person.name}</div>
           <div>Height: {person.height}</div>
           <div>Mass: {person.mass}</div>
           <div>Hair color: {person.hair_color}</div>
           <div>Eye color: {person.eye_color}</div>
           <div>Birth year: {person.birth_year}</div>
       </>
    )

 }

 export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://swapi.dev/api/people/')
  const json = await res.json()

  // Get the paths we want to pre-render based on posts
  console.log(json)
  const paths = json.results.map((person, idx) => ({
    params: { id: (idx+1).toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

 export async function getStaticProps({ params }) {
    // Call an external API endpoint to get people
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`)
    const json = await res.json()
  
    // By returning { props: { people } }, the People component
    // will receive `people` as a prop at build time
    return {
      props: {
        person: json
      },
    }
  }