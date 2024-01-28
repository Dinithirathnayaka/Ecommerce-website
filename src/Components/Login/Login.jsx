import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";

function Login() {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };

  const [values, setValues] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(values));

    const passwordValidation =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
        values.password
      );

    if (!passwordValidation) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  };
  return (
    <div className="grid items-center h-screen grid-cols-1 justify-items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="grid mb-4 h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Input
            label="Image URL Address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
          {showAlert && (
            <div className="px-4 py-3 mb-4 text-red-700 bg-red-200">
              <Typography variant="small">
                Password must contain at least one digit, one letter, one
                special character (!@#$%^&*), and be 4 to 10 characters long.
              </Typography>
            </div>
          )}

          <Typography variant="small" className="flex justify-center mt-6">
            Image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
