import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Layout(props) {
    return (
    <>
    {/*<Nav/>*/}
     {props.children}
    <Footer/>
    </>
    )
  }