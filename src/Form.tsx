
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
  password: yup.string().required().matches(/[a-z]+[A-Z]+[0-9]+[!@#$%&*-_]+/).min(6)
}).required();
// type FormData = yup.InferType<typeof schema>;


interface formType {
  email:string,
  password:string,
}

const Form = () => {
  const {register, handleSubmit, formState: {errors}, reset } = useForm<formType>({
  resolver: yupResolver(schema)
  })

  const onSubmit = (data:formType)=>{console.log(data)
 reset()
}
const sendData = ()=>console.log('salam')
  return (
    <div className='w-full h-screen border-4 flex flex-col justify-center items-center'>
   

    <form onSubmit={handleSubmit(onSubmit)} className='mt-10 border-2 rounded-xl border-black w-96 [&>button]:m-10 [&>div]:m-5 flex flex-col'>
     
    <TextField
          required
          id="standard-required"
          label="Required"
          variant="standard"
          {...register('email')}
        />
        {errors.email&&<span>format duz deyil</span>}
   <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          {...register('password')}
        />
        {errors.password&&<span>A-Z,a-z,0-9,@!#$&* en az biri</span>}
     <Button variant="contained" type='submit'>Submit</Button>

  
    
    </form>
    </div>
  )
}

export default Form