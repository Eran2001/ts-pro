import './style.css'

myNew()
 
function myNew(msg: string="Hasa"): never {
  throw new Error(msg)
  
}