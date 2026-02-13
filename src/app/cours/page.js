import Courses1 from '@/components/Courses1';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Pagination from '@/components/Pagination';

export default function CoursesPage() {
    return (
        <main className="pt-17.5">
            <NavBar/>
            <Courses1 />
            <Pagination totalPages={2} currentPage={1} />
            <Footer/>
        </main>
    );
}