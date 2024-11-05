import { Link } from "react-router-dom";

export const CategoryCard = ({
    category,
    alt,
    src,
    gradientColor,
}) => {
    return (
        <Link
    to={`/category/${category}`}
    className="flex flex-col justify-between rounded-2xl overflow-hidden bg-orange-200 transition-all hover:scale-105" // Cambia 'bg-green-500' al color que prefieras
>

            <div className='p-5 flex justify-center items-center'>
                <img src={src} alt={alt} className='w-36 sm:w-24 md:w-32 lg:w-36' /> {/* tamaño card imagen */}
            </div>

            <h1 className='text-2xl sm:text-xl md:text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5 text-center'>
                {category}
            </h1>
        </Link>
    );
};
