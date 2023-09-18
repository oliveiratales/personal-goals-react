import { toast } from "react-toastify";

const useToast = (msg, status = null) => {
  if (!status) {
    toast.sucess(msg, {
      pposition: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (status === "error"){
    toast.error(msg, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
}
};

export default useToast;
