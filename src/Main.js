import ReactDOM from 'react-dom/client';
import './index.css';
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

//function for all navbar links 
function Navlinks(props) {
  return (<><a className="mr-5 hover:text-white" href={props.link}>{props.text}</a></>);
}

//function for all gallery images
function Gallery(props) {
  return (<><div className={props.width}>
    <img alt="gallery" loading="lazy" className={props.className} src={props.src} />
  </div></>);
}

//function for form input textboxes
function FormInputs(props) {
  return (<><div className="p-2 w-1/2">
    <div className="relative">
      <label htmlFor={props.for} className="leading-7 text-sm text-gray-400">{props.text}</label>
      <input type={props.type} id={props.id} name={props.name} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
    </div>
  </div></>);
}

function Site() {
  return (<><div>
    {/* Header */}
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div>
          <img src="./images/logo.png" loading="lazy" height={70} width={70} />
        </div>
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl"><span className="font-bold">Jyot</span>-Gym</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Navlinks link='#' text='Home' />
          <Navlinks link='#Gallery' text='Gallery' />
          <Navlinks link='#contact' text='Contact Us' />
          <Navlinks link='#footer' text='Get Address' />
        </nav>
        <Link to="./enroll" target="_blank">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Enroll
            Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
    <hr />
    {/* Header */}

    {/* banner */}
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="object-cover object-center rounded" loading="lazy" alt="hero" src="https://source.unsplash.com/720x600?workout" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">No Pain No Gain
          </h1>
          <span className="font-medium font-bold mb-4">Go To Gym and...</span>
          <p className="mb-8 leading-relaxed">"Unleash Your Inner Athlete",
            "Elevate Your Fitness, Elevate Your Life",
            "Transform Your Body, Transform Your Mind",
            "Unlock Your Potential, Ignite Your Passion",
            "Push Your Limits, Break Barriers",
            "Embrace the Challenge, Embrace the Change"</p>
        </div>
      </div>
    </section>
    <hr id="Gallery" />
    {/* banner */}

    {/* gallery */}
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">Witness The Power Of
            Dedication</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">"Explore our vibrant gallery showcasing our
            state-of-the-art equipment, motivating group classes, and inspiring fitness transformations. Witness the
            energy, dedication, and success stories that make our gym a thriving community. Join us and be part of the
            incredible fitness journey!" </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <Gallery width='md:p-2 p-1 w-1/2' className='w-full object-cover h-full object-center block rounded' src='./images/gym1.jpeg' />
            <Gallery width='md:p-2 p-1 w-1/2' className='w-full object-cover h-full object-center block rounded' src='./images/gym5.jpg' />
            <Gallery width='md:p-2 p-1 w-full' className='w-full h-full object-cover object-center block rounded' src='./images/gym4.jpg' />
          </div>
          <div className="flex flex-wrap w-1/2">
            <Gallery width='md:p-2 p-1 w-full' className='w-full h-full object-cover object-center block rounded' src='./images/gym3.jpg' />
            <Gallery width='md:p-2 p-1 w-1/2' className='w-full object-cover h-full object-center block rounded' src='./images/gym6.jpg' />
            <Gallery width='md:p-2 p-1 w-1/2' className='w-full object-cover h-full object-center block rounded' src='./images/gym2.jpg' />
          </div>
        </div>
      </div>
    </section>
    <hr />
    {/* gallery */}

    {/* contact */}
    <form action="mailto:dynamonsworld2015@gmail.com" method="POST">
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white" id="contact">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Get in touch with us and ask your queries!"
              <br />
              Note : We will contact you through your given email.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <FormInputs for='name' text='Name' type='text' id='name' name='name' />
              <FormInputs for='email' text='Email' type='email' id='email' name='email' />
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required defaultValue={""} />
                </div>
              </div>
              <div className="p-2 w-full">
                <button id="ContactSubmit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
    <hr />
    {/* contact */}

    {/* footer */}
    <footer id="footer" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center items-center text-center">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <div>
            <img src="./images/logo.png" loading="lazy" height={70} width={70} />
          </div>
          <span className="ml-3 text-xl"><span className="font-bold">Jyot</span>-Gym</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023
          Jyot-Gym | All Rights Reserved &nbsp;
        </p>
        <p>
        </p><address>| Address : Jyot-Gym, Near Shivaji Circle, In Front Of St.Marry School, Ghogha Road, 364001, Bhavnagar.
        </address>
        <p />
        <a href="#" className="ml-4">
          <button className="inline-flex items-center bg-gray-800 border-0 py-3 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Go
            Up
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-1 h-1" viewBox="0 0 24 24">
            </svg>
          </button>
        </a>
      </div>
    </footer>
    {/* footer */}
  </div></>);
}
export default Site;