import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './pages';
import { Navbar } from './components';

export const AppRouter = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />

            <div className='flex-grow container mx-auto p-4'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path='/category/:category'
                        element={<CategoryPage />}
                    />
                </Routes>
            </div>
        </div>
    );
};