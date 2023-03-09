import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Button() {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email !== "") {
      toast.dark("¡Felicidades, te has suscrito!");
      setSubscribe(true);
    } else {
      toast.error("Por favor, ingresa un correo electrónico válido");
    }
  };

  return (
    <>
    <div className="flex flex-col">
      <input className="text-black rounded-lg p-3 m-2 form-submit-on-enter"
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubscribe();
          }
        }}
      />
      <button class="font-semibold bg-rose-500 m-2 rounded-lg p-3" onClick={handleSubscribe}>
        {subscribe ? "Ya estás suscrito" : "Suscribirse"}
      </button>
      <ToastContainer />
      </div>
    </>
  );
}

export default Button;
