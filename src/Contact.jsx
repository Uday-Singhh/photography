import react from 'react';
const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">For more information and any query contact us:</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                <div id="mycontact">


                                    <div>
                                        <h3>My Contact Number: <strong>8307068609, 9416939408</strong></h3>
                                    </div>
                                    <div><h3>My Email: <strong>kumarumesh2185@gmail.com</strong></h3>
                                    </div>
                                    <div><h3>Location: <strong>Bewal bus stand, kanina-narnaul road via simah</strong></h3>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
export default Contact;
// import react, { useState } from 'react'
// const Contact = () => {
//     const [data,setdata]=useState({
//         fullname:"",
//         phone:"",
//         email:"",
//         msg:"",
//     });
//     const InputEvent=(event)=>{
//         const {name,value}=event.target;
//         setdata((preval)=>{
//             return{
//                 ...preval,
//                 [name]:value,
//             }
//         })
//     }
//     const formsubmit=(e)=>{
//         e.preventDefault();
//         alert(`My name is ${data.fullname}.my mobile number is ${data.phone} and email is ${data.email}.Here is what I want to say ${data.msg}`)
//     };
//     return (
//         <>
//             <div className="my-5">
//                 <h1 className="text-center">Contact Us</h1>
//             </div>
//             <div className="container contact_div">
//                 <div className="row">
//                     <div className="col-md-6 col-10 mx-auto">
//                         <form onSubmit={formsubmit}>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">Full Name</label>
//                                 <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">Phone number</label>
//                                 <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                                 <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
//                             </div>
//                             <div class="col-12">
//                                 <button class="btn btn-outline-primary" type="submit">Submit form</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }
// export default Contact;