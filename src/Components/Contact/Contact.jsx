import React, { useRef } from "react";
import { IconContext } from "react-icons";
import emailjs from "emailjs-com";
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
    <div className="flex justify-around items-center px-5 my-20">
      <div className="rounded-lg ">
        <h1 className=" text-3xl font-inter text-gray-600 font-bold tracking-normal leading-non text-center my-6">
          Contact Us
        </h1>

        <IconContext.Provider>
          <form ref={form} className="form" onSubmit={sendEmail}>
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
                className="font-inter"
              />
            </div>

            <Typography
              className="flex justify-center items-center my-6"
              content="Sign Out"
              placement="bottom"
            >
              <Tooltip content="Send Message" placement="bottom">
                <Button
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className=" duration-300 ease-in-out uppercase bg-black text-white rounded-none font-semibold w-40 font-inter"
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
