// [color].js
// import the colors array
import colors from '../data/colors.json'

export async function getStaticPaths() {
    // loop through the colors array
    const paths = colors.map(color => ({
        // return an object with params.color set to the color's name
        params: { color: color.name }
    }))
    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    // find the info for just one color
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format.
    return { props: { color } }
}

export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: color.hex }}>
      <h1>{color.name}</h1>
    </div>
}