import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug);
    return (    
        <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-semibold text-blue-300">{page.title}</h1>
            <div>
                <PortableText value={page.content} />
            </div>
        </div>
    )
} 