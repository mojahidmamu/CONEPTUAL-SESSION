import "./App.css";

function App() {
  const handleAddUSer = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user); 

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
          alert('Data added successfully')
          form.reset();
        }
      });
    // .catch((error) => console.error("Error:", error))
  };
  return (
    <>
      <h1>Simple CRUD operation</h1>
      <form onSubmit={handleAddUSer}>
        <input type="text" placeholder="Name" name="name" id="" /> <br />
        <input type="email" placeholder="Email" name="email" id="" /> <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
