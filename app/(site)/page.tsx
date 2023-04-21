import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects();

    return (
        <div>
            <h1 className="font-semibold text-5xl">Hello I&apos;m <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Recep</span></h1>
            <h2 className="text-2xl font-medium mt-10 mb-6">My Projects</h2>
            <div className="flex flex-wrap justify-start gap-10">
                {projects.map((project) => (
                    <Link key={project._id} href={`/projects/${project.slug}`} className="hover:scale-105 shadow-2xl duration-300 ease-out">
                        <div key={project._id} className="w-[400px] flex flex-col items-center gap-6 p-4 border-[3px] border-gray-300 rounded-xl hover:border-orange-600 duration-400 ease-out">
                            {project.image && (
                                <Image src={project.image} alt={project.name} width={600} height={600} className="object-cover w-full h-48 rounded-lg" />
                                )}
                            <div className="w-fit mx-auto font-semibold text-xl">{project.name}</div>
                        </div>
                    </Link>
                ))} 
            </div>
        </div>
    )
}
