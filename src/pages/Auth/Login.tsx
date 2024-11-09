import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import fakeAuth from "../../auth";
import { useNavigate } from "react-router-dom";



export default function Login(){

    const [rn, setRn] = useState('');
    const [password,  setPassword] = useState('');
    const [allowButton, setAllowButton] = useState(false);
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        if(rn && password){
            setAllowButton(true);
        }else{
            setAllowButton(false)
        }
    },[rn, password])

    const navigate = useNavigate();


    return (
        <div className="flex justify-center items-center mt-28">
            <div className="border-2  rounded-2xl p-6 min-w-[300px] ">
                <h1 className="text-center font-bold text-4xl mb-4">ProgressX App</h1>
                <h2 className="mb-10 text-center font-medium">A web app for courses & attendance management</h2>
                <div className="mb-3">
                    <label htmlFor="registration-number" className="font-medium mb-3 inline-block text-lg">Registration Number</label>
                    <Input value={rn} onChange={(e)=>setRn(e.target.value)} id="registration-number" className="sm:min-w-[400px]"/>
                </div>
                <div className="">
                    <label htmlFor="password" className="font-medium mb-3 inline-block text-lg">Password</label>
                    <Input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" className="sm:min-w-[400px]"/>
                </div>

                <Button onClick={()=>{
                    setLoading(true)
                    setTimeout(()=>{
                        fakeAuth.login('student', () => navigate(`/student/profile/main`));
                    },2000)
                }} disabled={!allowButton || loading} className={`w-full mt-8 font-bold bg-green-600 hover:bg-green-700`}>
                    {loading 
                        ? <span>Loading...</span>
                        :'Login'
                    }
                </Button>
            </div>
        </div>
    )
}