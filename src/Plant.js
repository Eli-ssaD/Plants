export function Plant(props) {
    const {
      id,
      name,
      image,
      description,
      tag,
      price,
      }  = props.plant

      return (
        <article className="flex-column justify-end pa2 cover" style={{backgroundImage: `url(${image})`}}>
          <h2 className="white">{name}</h2>
          <footer className="flex justify-between items-center">
            <span className="dib white">{tag}</span>
            <span className="dib white">£{price}</span>
            <button className="b--transparent bg-green white br3 p2" onClick={() => props.addToCart(props.plant)}>Buy</button>
          </footer>
        </article>
      )
  }