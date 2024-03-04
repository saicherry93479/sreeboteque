// @ts-nocheck
import { useLocation } from 'react-router-dom';
import ContactUs from '../Components/ContactUs'

const ContactUsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <ContactUs></ContactUs>
    </div>
  )
}

export default ContactUsPage