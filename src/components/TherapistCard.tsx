interface TherapistCardProps {
  name: string;
  credentials: string;
  image?: string;
  specialties: string[];
  description: string;
  additionalInfo?: string;
  objectPosition?: string;
}

export default function TherapistCard({
  name,
  credentials,
  image,
  specialties,
  description,
  additionalInfo,
  objectPosition = 'center',
}: TherapistCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        {image && (
          <div className="flex-shrink-0">
            <img
              src={image}
              alt={`${name}, ${credentials}`}
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-md"
              style={{ objectPosition }}
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-primary-600 font-semibold">{credentials}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
        <ul className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <li
              key={index}
              className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {specialty}
            </li>
          ))}
        </ul>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      {additionalInfo && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">{additionalInfo}</p>
        </div>
      )}
    </div>
  );
}

