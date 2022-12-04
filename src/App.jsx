import './App.css'

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="cardHeader">
          <img src="https://avatars.githubusercontent.com/u/25049577?v=4" alt="profile" />
        </div>
        <div className="cardContent">
          <div className="mainComponent">
            <h3 className="headText">
              Suphakit Pinyoworapot
            </h3>
            <p className="subText">
              2nd Year Bachelor's degree<br />
              Computer Engineering<br />
              @ University of Phayao<br />
            </p>
          </div>
          <div className="contactIcon">
            <a href="https://fb.com/detzz.in.th" target="_blank" className="facebook">
              <i class="fa fa-facebook"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/georgeKdeterk" target="_blank" className="twitter">
              <i class="fa fa-twitter"></i>
            </a>
            &nbsp;&nbsp;
            <a href="https://github.com/dethMastery" target="_blank" className="github">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
        <a href="https://suphakit.net/Donation" target="_blank" className="cardFooter">
          Donation :D
        </a>
      </div>
    </div>
  )
}

export default App