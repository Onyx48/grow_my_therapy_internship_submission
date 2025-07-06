export default function ReviewCard({ name, content }) {
  return (
 
    <div
      className="bg-white rounded-lg shadow-md p-6 flex-shrink-0
                    w-11/12 max-w-sm min-h-[250px] border border-gray-200"
    >
      <p className="font-semibold text-gray-900 text-lg mb-3">{name}</p>
      <p className="text-gray-700 leading-relaxed text-base whitespace-normal">
        {content}
      </p>
    </div>
  );
}
