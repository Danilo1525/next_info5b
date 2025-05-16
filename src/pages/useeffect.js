import { useEffect, useState } from "react";


export default function UseEffect() {
  const [numero, setNumero] = useState(0);
  setTimeout(() => {
    setNumero(numero + 1);
    }, 3000);

    useEffect(() => {
        if (numero > 0) {
            document.title = `UseEffect ${numero}`;
        }
    }, [numero]);
  return <>
      <div className="text-center">
        <h1>Use Effect</h1>
        <h2>{numero === 0 ? <img src={"./loading-2.gif"} height={"40px"} width={"100px"}/> : numero}</h2>
      </div>
    </>
}
