import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[mode,setmode]=React.useState(false)
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between   ${inter.className} ${mode?"bg-black":" " }` }
  >
      <div className={`flex gap-4 -mt-2 ml-10`}>
       <div className="flex gap-4 float-right bg-blue-600 rounded-lg p-4 ">
        <Link href={'/About'} className="hover:bg-slate-400 p-2 rounded-lg">About</Link>
        <Link href={'/Projects'} className="hover:bg-slate-400 p-2 rounded-lg">Projects</Link>
        <Link href={'/Contact'} className="hover:bg-slate-400 p-2 rounded-lg">contact</Link>
      </div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      
      <Fab color="secondary" aria-label="edit">
        {mode?<LightModeIcon onClick={()=>setmode(!mode)}/>:<DarkModeIcon style={{color:"black"}} onClick={()=>setmode(!mode)}/>}
      </Fab>
      
      
    </Box>
    </div>
  </main>
           
          
          
    
  );
}
