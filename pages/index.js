import Link from "next/link";
import Nav from "./components/nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const paragraphStyle = "text-gray-400 text-balance font-['Roboto'] font-light text-xl"
const mainParagraphStyle = "text-center text-gray-400 text-balance font-['Roboto'] font-light text-xl"

export default function Home() {
  return (
    <div className="bg-linear-to-b from-gray-950 to-black h-screen">

      <Nav />

      <main className="flex flex-col place-items-center place-content-center m-12">

        <h1 className="text-8xl text-center text-balance font-['Instrument_Serif'] italic m-3">
          Understanding App Router
        </h1>

        <p className={mainParagraphStyle}>
          Below we'll share an individual page filled with tools related to web development that'll increase our work as developers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4 mt-10">

        <Link href={`/next`}>
          <div className="bg-[#1e1e1e] p-8 col-span-2 md:col-span-1 rounded-xl hover:shadow-2xl hover:shadow-green-800 transition hover:bg-green-500 group">
            <FontAwesomeIcon icon={faCode} className="fa-5x my-5 group-hover:text-white" />
            <h1 className="font-bold font-['Roboto'] text-5xl group-hover:text-white">
              Next.js
            </h1>
            <p className={`${paragraphStyle} group-hover:text-white`}>
              Discover why does Next js is so popular among web development.
            </p>
          </div>
        </Link>


        <Link href={`/tailwind.next`}>
          <div className="bg-[#1e1e1e] p-8 col-span-2 md:col-span-1 rounded-xl hover:shadow-2xl hover:shadow-blue-800 transition hover:bg-blue-500 group">
            <FontAwesomeIcon icon={faPalette} className="fa-5x my-5" />
            <h1 className="font-bold font-['Roboto'] text-5xl">
              Tailwind CSS
            </h1>
            <p className={`${paragraphStyle} group-hover:text-white`}>
              Learn about Tailwind CSS and look for examples and components.
            </p>
          </div>
        </Link>

          <div className="bg-[#1e1e1e] p-8 col-span-2 rounded-xl hover:shadow-2xl hover:shadow-red-800 transition hover:bg-red-500 group">
            <Link href={`/tailwind.next`}>
              <FontAwesomeIcon icon={faPen} className="fa-5x my-5" />
              <h1 className="font-bold font-['Roboto'] text-5xl">
                In Development
              </h1>
              <p className={`${paragraphStyle} group-hover:text-white`}>
                This project is currently in development
              </p>
          </Link>
          </div>

        </div>


      </main>
    </div>
  );
}