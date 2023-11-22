
import './App.css';
import styled from 'styled-components';


function App() {

  const CustomButton = styled.button` 
  display: inline-block;
  padding: 10px 20px;
  margin:10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  background: #4CAF50; /* Green background color */
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049; /* Darker green on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
  const Wrapper = styled.div` 
  font-size :30px;
  text-align:center;
  color: #332400;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  display:flex;
  justify-content:space-between;
  width: 70%;
  transition: background 0.3s ease, box-shadow 0.3s ease;
   
  //user & to target the element effects
  &:hover {
    background: #45a049; /* Darker green on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  /* Optional: Add a transition for smoother effect */
    

  
`;



  return (


    <div className="App">
      <header className="App-header">


        <button >Normal Btn</button>
        <p>Normal Paragraph without any styled wrapper</p>
        <CustomButton >Styled Btn</CustomButton>
        <Wrapper>
          <p>Normal Paragraph wrapped with styled wrapper component</p>
        </Wrapper>

      </header>

    </div>

  );
}

export default App;
