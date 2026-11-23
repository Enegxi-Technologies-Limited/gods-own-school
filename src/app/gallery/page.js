import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Gallery | God's Own Secondary School",
};

const photos = [
  {
    src: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our Students In School Uniform",
  },

  {
    src: "/images/more-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our Students In School Uniform",
  },

  {
    src: "/images/mores-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our Students In School Uniform",
  },

   {
    src: "/images/graduate.jpeg",
    alt: "Graduating students of God's Own Secondary School",
    caption: "Our Graduating Class",
  },

   {
    src: "/images/graduate2.jpeg",
    alt: "Graduating students of God's Own Secondary School",
    caption: "Our Graduating Class",
  },

   {
    src: "/images/cultural.jpeg",
    alt: "Cultural event at God's Own Secondary School",
    caption: "Our Cultural Festival",
  },

  {
    src: "/images/Native.jpeg",
    alt: "Cultural event at God's Own Secondary School",
    caption: "Our Cultural Festival",
  },

  {
    src: "/images/Building.jpeg",
    alt: "Building at God's Own Secondary School",
    caption: "Our School Building",
  },

  {
    src: "/images/Teacher.jpeg",
    alt: "Teacher at God's Own Secondary School",
    caption: "Our Dedicated Teachers",
  },

    {
    type: "video",
    src: "/videos/chlorography.mp4",
    poster: "/images/Native.jpeg",
    alt: "Students performing at the cultural festival",
    caption: "Cultural Festival Highlights",
  },

  {
    type: "video",
    src: "/videos/chlorography2.mp4",
    poster: "/images/cultural.jpeg",
    alt: "Students performing at the cultural festival",
    caption: "Cultural Festival Highlights",
  },

  {
    type: "video",
    src: "/videos/school-uniform.mp4",
    poster: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our Students Performing In School Uniform",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Moments from life at God's Own Secondary School."
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-navy/10 bg-white"
            >
              <div className="relative aspect-[4/3]">
                {photo.type === "video" ? (
                  <video
                    src={photo.src}
                    poster={photo.poster}
                    controls
                    preload="metadata"
                    aria-label={photo.alt}
                    className="h-full w-full bg-black object-contain"
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>

            </figure>
          ))}
        </div>
      </section>
    </>
  );
}