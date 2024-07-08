import "./Contributor.css"

const Contributor = ({ name, image, office, corDeFundo }) => {
  return (
    <div className="contributor">
      <div className="header" style={{ backgroundColor: corDeFundo }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}

export default Contributor
