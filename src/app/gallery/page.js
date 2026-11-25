import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos and videos of students, teachers, cultural festivals and graduation ceremonies at God's Own Secondary School, Aaye Town, Akure.",
  path: "/gallery",
});

const categories = ["Students", "Cultural", "Graduation", "School", "Videos"];

const items = [
  {
    src: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students in school uniform",
    category: "Students",
  },
  {
    src: "/images/more-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students in school uniform",
    category: "Students",
  },
  {
    src: "/images/mores-students.jpg",
    alt: "Students of God's Own Secondary School in uniform",
    caption: "Our students in school uniform",
    category: "Students",
  },
  {
    src: "/images/graduate.jpeg",
    alt: "Graduating students of God's Own Secondary School",
    caption: "Our graduating class",
    category: "Graduation",
  },
  {
    src: "/images/graduate2.jpeg",
    alt: "Graduating students of God's Own Secondary School",
    caption: "Our graduating class",
    category: "Graduation",
  },
  {
    src: "/images/cultural.jpeg",
    alt: "Cultural event at God's Own Secondary School",
    caption: "Our cultural festival",
    category: "Cultural",
  },
  {
    src: "/images/Native.jpeg",
    alt: "Students in traditional attire at the cultural festival",
    caption: "Our cultural festival",
    category: "Cultural",
  },
  {
    src: "/images/Building.jpeg",
    alt: "Building at God's Own Secondary School",
    caption: "Our school building",
    category: "School",
  },
  {
    src: "/images/Teacher.jpeg",
    alt: "Teacher at God's Own Secondary School",
    caption: "Our dedicated teachers",
    category: "School",
  },
  {
    type: "video",
    src: "/videos/chlorography.mp4",
    poster: "/images/Native.jpeg",
    alt: "Students performing at the cultural festival",
    caption: "Cultural festival highlights",
    category: "Videos",
  },
  {
    type: "video",
    src: "/videos/chlorography2.mp4",
    poster: "/images/cultural.jpeg",
    alt: "Students performing at the cultural festival",
    caption: "Cultural festival highlights",
    category: "Videos",
  },
  {
    type: "video",
    src: "/videos/school-uniform.mp4",
    poster: "/images/students.jpeg",
    alt: "Students of God's Own Secondary School performing in uniform",
    caption: "Our students performing in school uniform",
    category: "Videos",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Moments from life at God's Own Secondary School."
        path="/gallery"
        image="/images/more-cultural.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <GalleryGrid items={items} categories={categories} />
      </section>
    </>
  );
}
