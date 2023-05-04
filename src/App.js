import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Printing the form data");
    console.log(formData)
  }

  return (
     
    <div className=" w-2/4  mx-auto p-8">
   <form onSubmit={submitHandler} className="space-y-2">

    <label htmlFor="firstName" className="font-semibold">First name</label>
    <br/>
    <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="Rahul"
      value={formData.firstName}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <label htmlFor="lastName" className="font-semibold">Last name</label>
    <br/>
    <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="Wagh"
      value={formData.lastName}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <label htmlFor="email" className="font-semibold">Email Address</label>
    <br/>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="rahul@123.com"
      value={formData.email}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <label htmlFor="country" className="font-semibold">Country</label>
    <br/>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
    </select>

    <br/>
    <label htmlFor="streetAddress" className="font-semibold">Street Address</label>
    <br/>
    <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <label htmlFor="city" className="font-semibold">City</label>
    <br/>
    <input
      type="text"
      name="city"
      id="city"
      placeholder="pune"
      value={formData.city}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

  <br/>
    <label htmlFor="state" className="font-semibold">State / Province</label>
    <br/>
    <input
      type="text"
      name="state"
      id="state"
      placeholder="maharashtra"
      value={formData.state}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <label htmlFor="postalCode" className="font-semibold">Postal Code</label>
    <br/>
    <input
      type="text"
      name="postalCode"
      id="postalCode"
      placeholder="110077"
      value={formData.postalCode}
      onChange={changeHandler}
      className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-800 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    />

    <br/>
    <br/>
    <fieldset>
      <legend className="font-semibold">By Email</legend>

      <div className="flex ">
      <div className="flex h-6 items-center">
      <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        className="h-4 w-4 rounded"
      />
      </div>
      <div className="ml-3 text-sm leading-6" >
        <label htmlFor="comments" className="font-medium text-gray-900 ">Comments</label>
     
        <p className="text-grey-500">Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>


      <div className="flex">
      <div className="flex h-6 items-center">
      <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
        className="h-4 w-4 rounded"
      />
      </div>
     
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="candidates" className="font-medium text-gray-900 ">Candidates</label>
        <p className="text-grey-500">Get notified when a candidate applies for a job.</p>
      </div>
      </div>

      <div className="flex">
      <div className="flex h-6 items-center">
      <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
      />
      </div>
       
      <div className="ml-3 text-sm leading-6">
        <label htmlFor="offers" className="font-medium text-grey-900">Offers</label>
        <p className="text-grey-500">Get notified when a candidate accepts or rejects an offer.

</p>
      </div>
      </div>
      


    </fieldset>

    <br/>
    <br/>
    <fieldset>
      <legend className="font-semibold">Push Notifications</legend>
      <p className="text-grey-500">These are delivered via SMS to your mobile phone.</p>
 
      <br/>
      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
        className="h-4 w-4"
      />

      <label htmlFor="pushEverything" className="font-medium text-grey-900 ml-3">Everything</label>

      <br/>
       
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changeHandler}
        className="h-4 w-4"
      />

      <label htmlFor="pushEmail" className="font-medium text-grey-900 ml-3">Same as email</label>

      <br/>
       
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changeHandler}
        className="h-4 w-4"
      />

      <label htmlFor="pushNothing" className="font-medium text-grey-900 ml-3">No Push Notifications</label>

    </fieldset>
 
   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>
 
   </form>

   </div>
  
  );
}

export default App;
