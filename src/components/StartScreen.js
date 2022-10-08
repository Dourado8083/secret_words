import "./StartScreen.css"
export const StartScreen = ({startGame}) => {
  return (
    <div className='start'><h1>Secret Word</h1>
    <p>Clique no botão abaixo para começar o jogar</p>
    <button onClick={startGame}>Começa o jogo</button>
    
    </div>
  )
}
