import React from "react";

const Form = () => {
   return (
      <form>
         <div className="mb-3">
            <label htmlFor="FullName" className="form-label">
               Full Name
            </label>
            <input
               type="email"
               className="form-control"
               id="FullName"
               aria-describedby="emailHelp"
            />
         </div>
         <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
               Email address
            </label>
            <input
               type="email"
               className="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"
            />
         </div>
         <div className="mb-3">
            <label htmlFor="Phone" className="form-label">
               Email address
            </label>
            <input
               type="number"
               className="form-control"
               id="Phone"
               aria-describedby="emailHelp"
            />
         </div>

         <button type="submit" className="btn btn-primary">
            Submit
         </button>
      </form>
   );
};

export default Form;
