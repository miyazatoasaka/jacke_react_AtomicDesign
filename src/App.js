import "./styles.css";
import { BrowserRouter, Router } from "react-router-dom";

const user = {
  name: "かふたろ",
  image: "https://source.unsplash.com/Sgthj0HW6ec",
  email: "kaf_info@kamitsubaki.co.jp",
  phone: "010-1111-2222",
  company: {
    name: "KAMITSUBAKI STUDIO"
  },
  website: "https://kamitsubaki.jp/"
};
export default function App() {
  return <BrowserRouter />;
}
