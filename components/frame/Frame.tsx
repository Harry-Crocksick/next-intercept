import Image from "next/image";
import { Photo } from "@/lib/photos";

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        src={photo.imageSrc}
        alt="Example Photo"
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white text-black p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
      </div>
    </>
  );
}
