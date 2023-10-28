'use client'
import Home from '@/components/Home';
import Index from '@/components/Index'
import LocationDetection from '@/components/Location';
import Signup from '@/components/SignUp';
 

const page = () => {
  return (  
    <div>
      {/*  */}
      {/* <Signup/> */}

      <Home/>
      <Index/>
      <LocationDetection/>
    

    </div>
  );
}
 
export default page;