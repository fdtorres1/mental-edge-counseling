interface TherapistPreviewCardProps {
  name: string;
  credentials: string;
  image: string;
  briefBio: string;
  slug: string;
}

export default function TherapistPreviewCard({
  name,
  credentials,
  image,
  briefBio,
  slug,
}: TherapistPreviewCardProps) {
  return (
    <a
      href={`/about/${slug}`}
      className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <img
            src={image}
            alt={`${name}, ${credentials}`}
            className="w-48 h-48 object-cover rounded-full shadow-md border-4 border-primary-100"
            loading="lazy"
          />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-primary-600 font-semibold mb-4">{credentials}</p>
        <p className="text-gray-700 leading-relaxed">{briefBio}</p>
        <div className="mt-4 text-primary-600 font-semibold flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

