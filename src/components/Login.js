import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [formFields, setFormFileds] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormFileds({ ...formFields, [name]: value });
  };
  const history = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormFileds({ ...formFields });
    if (
      formFields.username !== null &&
      formFields.username !== "" &&
      formFields.username !== undefined &&
      formFields.password !== null &&
      formFields.password !== "" &&
      formFields.password !== undefined
    ) {
      try {
        fetch("https://pimb2bqaapi.pimalion.cloud/app/Account/Login", {
          method: "POST",
          body: JSON.stringify(formFields),
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json-patch+json",
          },
        }).then(async (response) => {
          if (response.status === 200) {
            alert("Successfully added new user!");
            history.navigate("/users");
          } else {
            alert("Something went wrong!");
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("You need to fill all fields");
    }
  };
  return (
    <form>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      ></link>
      <p class="title is-1 is-spaced">User Application</p>
      <form class="box">
        <div align="center">
          <div class="column is-half">
            <div class="columns is-flex is-flex-direction-column">
            <label class="label">Username</label>
              <div class="column">
                <input
                  class="input is-primary"
                  type="text"
                  name="username"
                  onChange={handleOnChange}
                  
                />
                <label class="label">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  class="input is-primary"
                  
                />
                <button onClick={handleOnSubmit} class="button is-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </form>
  );
}

export default Login;
