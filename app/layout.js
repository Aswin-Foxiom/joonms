// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }

import { MyProvider } from "./context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MyProvider>
          {" "}
          <ToastContainer />
          {children}
        </MyProvider>
      </body>
    </html>
  );
}
