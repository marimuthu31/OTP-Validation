import './App.css';
import Image from './images/shield.png'
function App() {

  let otp = Math.floor(Math.random() * 10000 + 1);
  let validate = () => {
    var verify = document.getElementById('input').value
    verify = parseInt(verify)
    if (otp === verify) {
      alert('verified')

    }
    else {
      alert('please enter crt OTP number')
    }
  }
  return (
    <div className='main'>
      <form action="" >
        <div className="cointainer">
          <div className="hr">.</div>
          <h1>OTP Verification</h1>
          <div className="validate">
            <img src={Image} alt="" />
          <p>Enter OTP Code <br /> {otp}</p>

          <input type="text" name="" id="input" required autoFocus /> <br />


          <button onClick={validate}>Verify</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
