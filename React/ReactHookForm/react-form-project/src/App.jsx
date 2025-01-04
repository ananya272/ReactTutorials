import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(data) {
    //API CALL simulation
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form",data);
  }


  return (
    <form onSubmit={handleSubmit((onSubmit))}>
      <div><label > First Name: </label>
      <input 
      className={errors.firstName ? 'input-error':""}
      {...register('firstName', 
        { 
          required: true, 
          minLength:{value:3, message:'min len atleast 3' },
          maxLength:{value:6, message:'max len atmost 6' }
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div><label > Middle Name: </label>
      <input className={errors.firstName ? 'input-error':""}
      {...register("MiddleName")} />
      </div>
      <br />
      <div><label > Last Name: </label>
      <input className={errors.firstName ? 'input-error':""}
      {...register("lastName", {
        pattern:{
          value: /^[A-Za-z]+$/i,
          message:"Last Name is not as per the rules"
        }
      })}/>
      {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? "Submitting": "Submit"}/>
    </form>
  )
}

export default App
