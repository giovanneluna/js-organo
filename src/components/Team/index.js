import Contributor from "../Contributor"
import "./Team.css"

const Team = (props) => {
  const css = { backgroundColor: props.secondaryColor }

  return (
    props.contributors.length > 0 && (
      <section className="team" style={css}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="contributors">
          {props.contributors.map((contributor) => (
            <Contributor
              corDeFundo={props.primaryColor}
              key={contributor.name}
              name={contributor.name}
              office={contributor.office}
              image={contributor.image}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Team
