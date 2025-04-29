import './App.css'

function App() {
  return (
    <div className="form-section">
      <h2>Register</h2>
      <form action="http://localhost:5000/register" method="POST">
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
