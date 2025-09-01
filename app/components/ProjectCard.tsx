import Image from "next/image";

type Props = { title: string; href?: string; img?: string; };

export default function ProjectCard({ title, href = "#", img = "/placeholder.png" }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group block rounded-lg overflow-hidden border hover:shadow-lg transition">
      <div className="relative h-44 bg-neutral-100">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 font-medium group-hover:text-blue-600">{title}</div>
    </a>
  );
}