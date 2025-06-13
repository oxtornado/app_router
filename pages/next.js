import Link from "next/link"
import Button from "./components/button"

const mainParagraphStyle = "text-center text-gray-400 text-balance font-['Roboto'] font-light text-xl"

export default function NextPage() {
    return (
        <div>
            <div className="flex flex-col place-items-center place-content-center h-[40rem] m-12">
                <h1 className="text-9xl text-center text-balance font-['Instrument_Serif'] italic m-3">
                    The React Framework for the Web
                </h1>
                <p className={`${mainParagraphStyle}`}>
                    Used by some of the world's largest companies, Next.js enables you to create
                        <span className="font-bold px-1 text-white">
                            high-quality web applications
                        </span> 
                    with the power of React components.
                </p>
                <div className="flex">
                    <Button
                        label='Go back'
                        href={'/'}
                        className={''}
                    />

                    <Button
                        label='Documentation'
                        href={'https://nextjs.org/docs'}
                        className='bg-[#1e1e1e] m-4 p-2 px-8 text-lg rounded-xl font-light'
                    />
                    </div>
            </div>
        </div>
    )
}
