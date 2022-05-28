import {
  Row,
  Table,
  Stack,
  Image,
  Form,
  FormGroup,
  Button,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import React, { Component, useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdOutlinePersonOutline, MdOutlineVisibility, MdOutlineVisibilityOff, MdOutlineVpnKey} from "react-icons/md";
import "../styles/adminlogin.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [errors,setErrors] = useState({});

  const handleClickShowPassword = () => {
    const show = !showPassword;
    setShowPassword(show);
  };
  const handleSubmit=(e:any)=> {
    e.preventDefault();
    console.log("prevent default")
    if(validate()){
      let input: {[key:string]: string} = {};
      input["name"] = "";
      input["password"] = "";
      setInputValues(input)
      alert('Demo Form is submitted');
    }
    
  }
  const validate=()=> {
    const tempvalue: {[key:string]: string} = inputValues;
    const temperrors: {[key:string]: string} = {};
    let isValid = true;
 
    if (!tempvalue["name"]) {
      isValid = false;
      temperrors["name"] = "Please enter your name.";
    }

    if (typeof tempvalue["name"] !== "undefined") {
      const re = /^\S*$/;
      if(tempvalue["name"].length < 6 || !re.test(tempvalue["name"])){
          isValid = false;
          temperrors["name"] = "Please enter valid name.";
      }
    }

    if (!tempvalue["password"]) {
      isValid = false;
      temperrors["password"] = "Please enter your password.";
    }

    if (typeof tempvalue["password"] !== "undefined") {
        isValid = false;
        temperrors["password"] = "Please enter your password.";
    }
    setErrors(temperrors);

    return isValid;
  }


  const handleChange = (e:any)=> {
     const temp: {[key:string]: string} = inputValues;
      temp[e.target.name] = e.target.value ;
      setInputValues(temp);
  }

  console.log("inputValues");
  console.log(inputValues);
  console.log(errors);
  const displayerrors: {[key:string]: string} = errors;
  return (
    <div className="login w-100">
      <img
        className="w-100"
        style={{ height: "100vh" }}
        src="/images/NotFound/404.png"
        alt="back"
      />
      <div className="notfound-container w-100">
        <form className="login_form" onSubmit={(e)=>handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Image src="/icons/logo.svg" className="logo_img mb-5" />
          </div>
          <div className="white mb-2">name</div>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ borderRight: "none", paddingRight: "0px", color: "#999999" }}
            >
              <img src="/icons/account.svg" alt="user" width={15} />
            </InputGroup.Text>
            <FormControl
              placeholder="Name"
              name="name"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none", paddingLeft: "7px" }}
              onChange={(e)=>handleChange(e)}
            />
            
          </InputGroup>
          <div className="text-danger" style={{marginTop:"-10px "}}>{displayerrors.name}</div>
          <div className="white mb-2">Password</div>
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              style={{ borderRight: "none", paddingRight: "0px", color: "#999999" }}
            >
              <img src="/icons/key.svg" alt="key" width={15} />
            </InputGroup.Text>
            <FormControl
              placeholder="Password"
              // aria-label="Password"
             
              name="password"
              aria-describedby="basic-addon1"
              style={{ borderLeft: "none", borderRight: "none", paddingLeft: "7px" }}
              type={showPassword ? "text" : "password"}
              onChange={(e)=>handleChange(e)}
            />
            <InputGroup.Text style={{ color: "#999999", borderLeft: "none" }}>
              {showPassword ? (
                <img src="/icons/eye.svg" width={15} alt="eye" onClick={handleClickShowPassword} />
              ) : (
                <img src="/icons/eye.svg" alt="eye" onClick={handleClickShowPassword} />
              )}
            </InputGroup.Text>
          </InputGroup>
          <div className="text-danger">{displayerrors.password}</div>
          <div className="mb-1" style={{ textAlign: "right" }}>
            <a  href="/forgetpassword" style={{ color: "#70BBFD", textDecoration: "none", textAlign: "right" }}>
              Forget password?
            </a>
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Row className="button_style mb-5">
            <Col sm={6} xs={12}>
              <Button
                className="signin_btn w-100 me-sm-1 me-xs-0"
                onClick={(e) =>handleSubmit(e)}
                type="button"
              >
                Sign In
              </Button>
            </Col>
            <Col sm={6} xs={12}>
              <Button className="create_btn w-100  ms-sm-1 ms-xs-0 mt-xs-2" type="submit">
                Create Account
              </Button>
            </Col>
          </Row>
          <div className="w-100 ">
            <Stack direction="horizontal" className="justify-content-between">
              <div className="white_line"></div>
              <div className="text-light">Or Easily Using</div>
              <div className="white_line"></div>
            </Stack>
            <Stack direction="horizontal" className="justify-content-center d-flex mt-3">
              <div className="pr-10">
                {" "}
                <img src="/icons/facebook.png" style={{ height: "50px" }} />
              </div>
              <div className="pr-10">
                {" "}
                <img src="/icons/google.png" style={{ height: "50px" }} />
              </div>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignIn };
