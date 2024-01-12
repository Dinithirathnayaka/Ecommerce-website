import React, { useRef } from "react";
import { IconContext } from "react-icons";
import emailjs from "emailjs-com";
import { Button, Input, Typography } from "@material-tailwind/react";

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
    <div className="flex justify-around items-center px-5">
      <div className="rounded-lg ">
        <h1 className=" text-3xl font-inter text-gray-600 font-bold tracking-normal leading-non text-center my-6">
          Contact Us
        </h1>

        <IconContext.Provider>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="flex flex-wrap justify-between  gap-6">
              <Typography
                variant="p"
                color="blue-gray"
                className="-mb-3 uppercase text-sm"
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="p"
                color="blue-gray"
                className="-mb-3 uppercase text-sm"
              >
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="p"
                color="blue-gray"
                className="-mb-3 uppercase text-sm"
              >
                Message
              </Typography>
              <Input
                size="lg"
                rows={10}
                placeholder="type message here..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Typography
              className="flex justify-center items-center my-6"
              content="Sign Out"
              placement="bottom"
            >
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hover:bg-gray-200 duration-300 ease-in-out uppercase"
                type="submit"
                content="Sign Out"
                placement="bottom"
              >
                Send
              </Button>
            </Typography>
          </form>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;
