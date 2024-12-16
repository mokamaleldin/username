import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-6 rounded-t-3xl shadow-inner">
            <div className="container mx-auto px-4 text-center">
                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mb-4">
                    <Link target="_blank" className="hover:scale-110 duration-150" href="https://github.com/mokamaleldin">
                        <Image priority src="/Icons/github.svg" alt="github" width={40} height={40} />
                    </Link>
                    <Link target="_blank" className="hover:scale-110 duration-150" href="https://www.linkedin.com/in/mokamaleldin">
                        <Image priority src="/Icons/linkedin.svg" alt="linkedin" width={35} height={35} />
                    </Link>
                    <Link target="_blank" className="hover:scale-110 duration-150" href="https://www.instagram.com/mokamaleldin_">
                        <Image priority src="/Icons/instgram.svg" alt="instagram" width={35} height={35} />
                    </Link>
                    <Link target="_blank" className="hover:scale-110 duration-150" href="https://www.tiktok.com/@mokamaleldin">
                        <Image priority src="/Icons/tiktok.svg" alt="tiktok" width={35} height={35} />
                    </Link>
                    <Link target="_blank" className="hover:scale-110 duration-150" href="https://www.youtube.com/@mokamaleldin">
                        <Image priority src="/Icons/youtube.svg" alt="youtube" width={35} height={35} />
                    </Link>
                </div>

                {/* Email Address */}
                <p className="text-custom-slate text-sm mb-2 font-semibold">
                    Email me at:
                    <a
                        href="mailto:mohammed.kamal.eliwa@gmail.com"
                        className="hover:underline text-custom-lavender ml-1"
                    >
                        mohammed.kamal.eliwa@gmail.com
                    </a>
                </p>

                {/* Site Credit */}
                <div className="font-bold">
                    <Link
                        href="https://mokamaleldin.vercel.app/"
                        target="_blank"
                        className="hover:underline text-custom-moss"
                    >
                        Site by Mohamed Kamaleldin
                    </Link>
                </div>

                {/* Reserved Rights */}
                <div className="text-custom-slate text-xs mt-3 flex justify-center ">
                    © All rights reserved mkee 2024
                </div>
            </div>
        </footer>
    );
};

export default Footer;
