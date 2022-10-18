import './Home.css'

const HomeContainer = ({ greetings }) => {
  return (
  <div>
    <h1 className='titulo'>{greetings}</h1>
      <img width="500" src={'/Logo.png'}/> 
  </div>
  )
}

export default HomeContainer;