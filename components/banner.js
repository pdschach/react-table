import {logo} from "./banner.module.css";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "lightseagreen",
    textAlign: "center"
    
}


// const Banner = ({children}) => {
//     return (
//         <header className="row mb-4">
//             <div className="col-3">
//                 <img src="./logo.svg" alt="logo" className={logo} />
//             </div>
//             <div className="col-8 mt-4" style={subtitleStyle}>
//                {children}
//             </div>
//         </header>
//     );
// };


 function Banner ({children}) {
    return (
        <header className="row mb-4 ">
            <div className="col-3">
                <img src="./logo.svg" alt="logo" className={logo} />
            </div>
            <div className="col-8 mt-4 text-center" style={subtitleStyle}>
               {children}
            </div>
        </header>
    );
};

export default Banner;