import { Routes, Route } from 'react-router-dom';
// import './App.css';
import { Link } from "react-router-dom";
import styles from "./styles/cenas.module.css"


//style={{backgroundImage: `url(${Background})`}}


function App() {

  return (
    <div>
      
      
      
      <div className={styles.main}>

      

      <Routes>
        <Route path="/pesquisa" element={
          (<div className={styles.main2}>
            <input className="barraPesquisa" type="text" placeholder="Pesquisa..." />
            <Link to={"/novaPergunta"}>

              <button className="duvidasMainPage">Submeter Nova Pergunta</button>
            </Link>
          </div>)} />

            <Route path="/novaPergunta" element={(
              <div className={styles.main2}>
                <input type="text" className="boxPerguntas"/>
                <Link to={"/"}>
                  
                <button className="duvidasMainPage">Submeter</button>
                </Link>
                
              </div>
            )}>


            </Route>


        <Route path="/" element={(
          <Link to={"/pesquisa"}>
            <button className="duvidasMainPage">Dúvidas</button>
          </Link>)} />
      </Routes>
      
      </div>
      {/* <Sidebar
        buttons={sidebarButtons}
      />
     )
        <Routes>
          <Route path="/student">
            <Route path="/student/exercises" element={<p>OLÀ ALUNO</p>}/>
          </Route>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
       */}
    </div>
  );
}

export default App;