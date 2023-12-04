import Image from "next/image";
import Link from "next/link";
import photos from "@/lib/photos";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10 ">
        {photos.map(({ id, imageSrc }) => (
          <Link href={`/photos/${id}`}>
            <Image
              src={imageSrc}
              alt="NextGram"
              height={500}
              width={500}
              className="aspect-square object-cover w-full"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
