
import Footer  from '../../components/Shared/Footer'
const DashboardLayout = ({children}) => {
    return (
        <>
            <div className='min-h-screen'>
            {children}
            </div>
            <Footer/>
        </>
    );
};

export default  DashboardLayout ;