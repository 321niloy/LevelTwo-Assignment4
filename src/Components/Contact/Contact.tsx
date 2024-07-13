/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import contactimage from "../../../image/action-calcio.gif";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_qymata3",
//         "template_l9b11q2",
//         form.current,
//         "27auYAxRn2wcbS3p9"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           Swal.fire(
//             "Sent your Message Successfully",
//             "You clicked the button!",
//             "success"
//           );
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="my-10">
//       <div>
//         <h1 className="text-center text-5xl font-serif text-red-500 mb-5">
//           Contact Us
//         </h1>
//       </div>
//       <div className="flex justify-center">
//         <div className="contact-container bg-black p-10 rounded-xl shadow-slate-300 lg:w-[1000px] overflow-hidden">
//           <div className="contact-image">
//             <img
//               className="w-full h-auto rounded-3xl"
//               src={contactimage}
//               alt="Contact"
//             />
//           </div>
//           <div className="contact-form">
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="font-bold text-red-600">
//                 <label>Name</label>
//               </div>
//               <div>
//                 <input
//                   className="w-full border rounded-xl border-red-600 p-2"
//                   type="text"
//                   name="user_name"
//                 />
//               </div>
//               <div className="font-bold text-red-600">
//                 <label>Email</label>
//               </div>
//               <div>
//                 <input
//                   className="w-full border rounded-xl border-red-600 p-2 text-black"
//                   type="email"
//                   name="user_email"
//                 />
//               </div>
//               <div className="font-bold text-red-600">
//                 <label>Message</label>
//               </div>
//               <div>
//                 <textarea
//                   className="w-full h-48 border rounded-xl border-red-600 text-black p-2"
//                   name="message"
//                 />
//               </div>
//               <span className="bg-red-500 p-3 text-white rounded-xl mt-3 flex items-center w-full justify-center">
//                 <input className="ms-2" type="submit" value="Send" />
//               </span>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import contactimage from "../../../image/action-calcio.gif";
import "./Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); // Specify HTMLFormElement as the type

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_qymata3",
          "template_l9b11q2",
          form.current,
          "user_id_here" // Replace with your actual user ID
        )
        .then(
          (result: any) => {
            console.log(result.text);
            Swal.fire(
              "Sent your Message Successfully",
              "You clicked the button!",
              "success"
            );
            e.currentTarget.reset();
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="my-10">
      <div>
        <h1 className="text-center text-5xl font-serif text-red-500 mb-5">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="contact-container bg-black p-10 rounded-xl shadow-slate-300 lg:w-[1000px] overflow-hidden">
          <div className="contact-image">
            <img
              className="w-full h-auto rounded-3xl"
              src={contactimage}
              alt="Contact"
            />
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="font-bold text-red-600">
                <label>Name</label>
              </div>
              <div>
                <input
                  className="w-full border rounded-xl border-red-600 p-2"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="font-bold text-red-600">
                <label>Email</label>
              </div>
              <div>
                <input
                  className="w-full border rounded-xl border-red-600 p-2 text-black"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="font-bold text-red-600">
                <label>Message</label>
              </div>
              <div>
                <textarea
                  className="w-full h-48 border rounded-xl border-red-600 text-black p-2"
                  name="message"
                />
              </div>
              <span className="bg-red-500 p-3 text-white rounded-xl mt-3 flex items-center w-full justify-center">
                <input className="ms-2" type="submit" value="Send" />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
