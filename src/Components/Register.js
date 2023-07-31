import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {

  const {createUser,signInWithGoogle}=useContext(AuthContext);
 const navigate=useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then((result)=>{
          const user=result.user;
          console.log(user)
          form.reset();
          navigate("/")
        })
        .catch(error=>{
          console.error(error)
        })

    }

    const hangleGoogleSignIn=()=>{
      signInWithGoogle()
      .then((result)=>{
        const user=result.user;
        console.log(user)
        navigate("/")
      })
      .catch((error)=>{
        console.error(error)
      })
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register Now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form className="card-body" onSubmit={handleSubmit}>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  name='name'
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  name='email'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  name='password'
                  required
                />
                <label className="label">
                  
                  <Link className="link link-primary" to={"/login"}> Already have an account?</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </Form>
            <hr />
            <div className='m-3'>
            <h3 className='m-3 font-bold'>Register With</h3>
            <button onClick={hangleGoogleSignIn} className="btn btn-outline btn-accent" style={{width:"10rem"}}>Google</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;