import { useState } from "react"
import Button from "../Button"
import DropDown from "../DropDown"
import FieldText from "../FieldText"
import "./Form.css"

const Form = (props) => {
  const [name, setName] = useState("")
  const [office, setOffice] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  const onSave = (event) => {
    event.preventDefault()
    props.toRegisteredContributor({
      name,
      office,
      image,
      team,
    })
    setName("")
    setOffice("")
    setImage("")
    setTeam("")
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <FieldText
          required={true}
          label="Nome"
          placeholder="Digita seu nome"
          valor={name}
          toChange={(valor) => setName(valor)}
        />
        <FieldText
          required={true}
          label="Cargo"
          placeholder="Digita seu cargo"
          valor={office}
          toChange={(valor) => setOffice(valor)}
        />
        <FieldText
          required={true}
          label="Imagem"
          placeholder="Digita o endereço da imagem"
          valor={image}
          toChange={(valor) => setImage(valor)}
        />
        <DropDown
          label="Time"
          itens={props.teams}
          toChange={(valor) => setTeam(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form
