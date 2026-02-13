import Courses2 from '@/components/Courses2';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Pagination from '@/components/Pagination';

export default function CoursesPage2() {
    return (
        <main className="pt-17.5">
            <NavBar/>
            <Courses2 />
            <Pagination totalPages={2} currentPage={2} />
            <Footer/>
        </main>
    );
}