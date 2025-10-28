import { useEffect, useState } from 'react'
import './App.css'
import { getAPI, getAPIById, postAPI } from '../libs/API/joke'

function App() {

  const [question, setQuestion] = useState("")
  const [response, setResponse] = useState("")
  const [questions, setQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState("")
  const [randomResponse, setRandomResponse] = useState("")
  const [nb, setNb] = useState("")
  const [idQuestion, setIdQuestion] = useState("")
  const [idResponse, setIdResponse] = useState("")

  useEffect(() => {
    getJoke()
  }, [])

  async function handleForm() {
    const res = await postAPI(question, response)
    res.id && window.location.reload();
  }

  async function getJoke() {
    const res = await getAPI("")
    res.length > 0 && setQuestions(res)
  }

  async function getJokeRandom() {
    const res = await getAPI("random")
    console.log("🚀 ~ getJokeRandom ~ res:", res)
    res.question && (setRandomQuestion(res.question), setRandomResponse(res.response))
  }

  async function handleFormNumber() {
      const res = await getAPIById(nb)
      console.log("🚀 ~ handleFormNumber ~ res:", res)
      res.question && (setIdQuestion(res.question), setIdResponse(res.response))
  }

  return (
    <>
      <h1>Joke Page</h1>
      <h2>Ajout d'une blague</h2>
      <label htmlFor="">
        Question
        <input type="text" onChange={e => setQuestion(e.target.value)} />
      </label>
      <label htmlFor="">
        Réponse
        <input type="text" onChange={e => setResponse(e.target.value)} />
      </label>
      <button onClick={() => handleForm()} disabled={question == "" || response == "" ? true : false}>Ajouter une blague</button>
      <h2>Liste des blagues</h2>
      {questions.map(item => (
        <div key={item.id}>
          <p>{item.question}</p>
          <p>{item.response}</p>
          <hr />
        </div>
      ))}
      <button onClick={()=>getJokeRandom()}>Blague au hasard</button>
      <p> {randomQuestion} </p>
      <p> {randomResponse} </p>
      <h2>Blague par id</h2>
      <label htmlFor="">
        id :
        <input type="number" onChange={e => setNb(e.target.value)} />
      </label>
      <button onClick={() => handleFormNumber()} disabled={nb == "" ? true : false}>Valider</button>
      <p> {idQuestion} </p>
      <p> {idResponse} </p>
    </>
  )
}

export default App
