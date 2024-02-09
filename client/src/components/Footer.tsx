export default function Footer() {
    return <>
    <footer className="flex justify-center bg-slate-900 text-white text-sm md:text-base">
        <div className="flex flex-col p-5">
            <div className="p-5">
                <p>© 2024 gawgaw - Tool to shorten a long link</p>
            </div>
            <div className="flex flex-col items-center gap-y-3 md:flex-row md:justify-evenly"> 
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </div>
    </footer>
    </>
}