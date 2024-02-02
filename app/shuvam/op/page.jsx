import "@/app/globals.css";
import { Clock } from 'lucide-react'

function test(){
  let out = []
  for(let i = 100; i <= 900; i+=100){
    out.push(`<div className="h-12 w-72 bg-green-${i}">test</div>`)
  }

  return out
}

export default function Physics() {
  return (
    <>
      {test()}
    </>
    );
}
