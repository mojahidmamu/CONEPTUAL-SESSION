import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email)
    const updateUser = { name, email };
    console.log(updateUser);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          alert('Data updated successfully')
        }
      });
  };

  return (
    <div>
      <h2>
        Update information,
        <br /> Name: {loadedUser.name}{" "}
      </h2>
      <form onSubmit={handleUpdate}>
        <input
          defaultValue={loadedUser?.name}
          type="text"
          placeholder="Name"
          name="name"
          id=""
        />{" "}
        <br />
        <input
          defaultValue={loadedUser?.email}
          type="email"
          placeholder="Email"
          name="email"
          id=""
        />{" "}
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
