import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineWeb } from 'react-icons/md';

type Props = {
    params: {project: string} 
}

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    
    return (
        <div className="w-10/12 mx-auto my-10 flex flex-col gap-10">
            <header className="flex flex-col gap-6">
                <Image src={project.image} width={1920} height={1080} alt={project.name} />
                <h1 className="text-3xl font-bold">{project.name}</h1>
            </header>
            <div className="flex gap-6">
                <div className="w-9/12">
                    <PortableText value={project.content} />
                </div>
                <div className="w-3/12 p-6 border-[3px] rounded-2xl flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Links</h3>
                    <div className="flex flex-col gap-6">
                        <a className="flex gap-6 items-center p-2 border-b-[3px] hover:border-white border-neutral-500 duration-300 ease-out" href={project.url} target="_blank">
                            <MdOutlineWeb className="text-4xl" />
                            <span>Go To Project</span>
                        </a>
                        <a className="flex gap-6 items-center p-2 border-b-[3px] hover:border-white border-neutral-500 duration-300 ease-out" href="https://github.com/Recepyolcu" target="_blank">
                            <AiFillGithub className="text-4xl" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}