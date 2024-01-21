import React, { useRef } from "react";
import { IconContext } from "react-icons";
import emailjs from "emailjs-com";
import bgImg from "../../assests/images/bg1.jpg";
import {
  Button,
  Input,
  Typography,
  Textarea,
  Tooltip,
} from "@material-tailwind/react";

function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osvo7ri",
        "template_5pz0fw8",
        form.current,
        "3KqiOVEydz1heFUNA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message: " + error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div className="flex items-center justify-around p-5 py-20 my-5 ">
      <div className="p-5 px-10 border-2 border-black rounded-lg">
        <h1 className="my-6 text-3xl font-bold tracking-normal text-center text-black font-inter leading-non">
          Contact Us
        </h1>

        <IconContext.Provider>
          <form ref={form} className=" form" onSubmit={sendEmail}>
            <div className="flex flex-wrap justify-between gap-6 mx-5">
              <Input
                variant="standard"
                label="NAME"
                name="name"
                className="font-inter"
              />
              <Input
                variant="standard"
                label="EMAIL"
                name="email"
                className="font-inter"
              />
              <Textarea
                variant="outlined"
                label="MESSAGE"
                name="message"
                className=" font-inter"
                style={{ color: "black" }}
              />
            </div>

            <Typography
              className="flex items-center justify-center my-6"
              content="Sign Out"
              placement="bottom"
            >
              <Tooltip content="Send Message" placement="bottom">
                <Button
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="w-40 font-semibold text-white uppercase duration-300 ease-in-out bg-black rounded-none font-inter"
                  type="submit"
                  content="Sign Out"
                  placement="bottom"
                >
                  Send
                </Button>
              </Tooltip>
            </Typography>
          </form>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;
