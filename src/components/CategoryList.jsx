import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
    imglibro,
    imgAntiguo,
    imgNuevo,
    imgDoctrina,
    imgHistoria,
    imgPerla,
    imgOrdenanzas,
] = imgs;

export const CategoryList = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
            {/* Category Link LIbro */}
            <CategoryCard
                category={categories.libro}
                src={imglibro}
                alt={`Categoría ${categories.libro}`}
                gradientColor=' from-purple-500 to-pink-500'
            />
            {/* Category Link Antiguo */}
            <CategoryCard
                category={categories.antiguo}
                src={imgAntiguo}
                alt={`Categoría ${categories.antiguo}`}
                gradientColor='from-lime-400 to-teal-700'
            />
            {/* Category Link Nuevo */}
            <CategoryCard
                category={categories.nuevo}
                src={imgNuevo}
                alt={`Categoría ${categories.nuevo}`}
                gradientColor='from-red-400 to-zinc-400'
            />
            {/* Category Link Doctrina */}
            <CategoryCard
                category={categories.doctrina}
                src={imgDoctrina}
                alt={`Categoría ${categories.doctrina}`}
                gradientColor='from-cyan-200 to-lime-200'
            />
            {/* Category Link Historia */}
            <CategoryCard
                category={categories.historia}
                src={imgHistoria}
                alt={`Categoría ${categories.historia}`}
                gradientColor='from-sky-300 to-indigo-900'
            />
            {/* Category Link Perla */}
            <CategoryCard
                category={categories.perla}
                src={imgPerla}
                alt={`Categoría ${categories.perla}`}
                gradientColor='from-amber-400 to-emerald-600'
            />
            {/* Category Link Ordenanzas */}
            <CategoryCard
                category={categories.ordenanzas}
                src={imgOrdenanzas}
                alt={`Categoría ${categories.ordenanzas}`}
                gradientColor='from-violet-900 to-rose-500 '
            />
        </div>
    );
};