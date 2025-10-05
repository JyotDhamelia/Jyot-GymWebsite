import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroQuotes, galleryQuotes, contactQuotes } from '../data/staticData';

//function for all navbar links 
function Navlinks(props) {
  return (<><a className="mr-5 hover:text-white transition-colors duration-300" href={props.link}>{props.text}</a></>);
}

//function for all gallery images
function Gallery(props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (<><div className={`${props.width} gallery-item relative`}>
    {!imageLoaded && (
      <div className="absolute inset-0 bg-gray-700 animate-pulse rounded flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    )}
    <img 
      alt="gallery" 
      className={`${props.className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} 
      src={props.src}
      onLoad={() => setImageLoaded(true)}
    />
  </div></>);
}

//function for form input textboxes
function FormInputs(props) {
  return (<><div className="p-2 w-1/2">
    <div className="relative">
      <label htmlFor={props.for} className="leading-7 text-sm text-gray-400 font-medium">{props.text}</label>
      <input type={props.type} id={props.id} name={props.name} className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out enhanced-input" required />
    </div>
  </div></>);
}


function Site() {
  const [gymImage, setGymImage] = useState('');
  const [quote, setQuote] = useState({ title: '', subtitle: '', description: '' });
  const [galleryQuote, setGalleryQuote] = useState({ title: '', description: '' });
  const [contactQuote, setContactQuote] = useState('');
  const [gymImageLoaded, setGymImageLoaded] = useState(false);

  // Data imported from staticData.js

  useEffect(() => {
    // Set random quotes
    const randomQuote = heroQuotes[Math.floor(Math.random() * heroQuotes.length)];
    setQuote(randomQuote);
    
    const randomGalleryQuote = galleryQuotes[Math.floor(Math.random() * galleryQuotes.length)];
    setGalleryQuote(randomGalleryQuote);
    
    const randomContactQuote = contactQuotes[Math.floor(Math.random() * contactQuotes.length)];
    setContactQuote(randomContactQuote);

    // Fetch a random gym image from Unsplash API with specific dimensions
    fetch(`https://api.unsplash.com/photos/random?query=gym+fitness&client_id=WzAKreZybhiJo-eaQyKwpul8qLcAfWoiwm8DdZlxghg&w=600&h=600`)
      .then(response => response.json())
      .then(data => {
        setGymImage(data.urls.regular);
      })
      .catch(error => console.error("Error fetching image:", error));
  }, []);


  return (<><div>
    {/* Header */}
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap py-3 px-5 flex-col md:flex-row items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="animate-pulse-slow">
            <img src="./images/logo.png" height={50} width={50} alt="Jyot Gym Logo" className="md:h-[50px] md:w-[50px] h-[40px] w-[40px]" />
          </div>
          <span className="ml-2 text-lg md:text-xl font-medium text-white"><span className="font-bold gradient-text-fire">Jyot</span>-Gym</span>
        </div>
        <nav className="md:ml-auto md:mr-4 flex flex-wrap items-center text-sm md:text-base justify-center gap-2 md:gap-0">
          <a className="mr-5 hover:text-indigo-400 transition-colors duration-300 font-medium cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
          <a className="mr-5 hover:text-indigo-400 transition-colors duration-300 font-medium cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('Gallery')?.scrollIntoView({ behavior: 'smooth' }); }}>Gallery</a>
          <a className="mr-5 hover:text-indigo-400 transition-colors duration-300 font-medium cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact Us</a>
        </nav>
        <Link to="./enroll" target="_blank">
          <button className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 py-2 px-4 md:px-5 focus:outline-none rounded-lg text-white font-semibold text-sm md:text-base mt-4 md:mt-0 modern-btn shadow-lg transform hover:scale-105 transition-all duration-300">Enroll Now
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
    {/* Header */}

    {/* banner */}
    <section className="text-gray-400 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 body-font overflow-hidden">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 animate-slideInLeft">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              {!gymImageLoaded && (
                <div className="relative w-full h-[300px] md:h-[350px] rounded-lg bg-gray-700 animate-pulse">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              {gymImage && (
                <img 
                  className={`relative object-cover object-center rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 w-full h-[300px] md:h-[350px] ${!gymImageLoaded ? 'opacity-0 absolute' : 'opacity-100'}`} 
                  alt="Gym" 
                  src={gymImage} 
                  style={{objectFit: 'cover'}}
                  onLoad={() => setGymImageLoaded(true)}
                />
              )}
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-slideInRight">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white">
              <span className="gradient-text-fire">{quote.title}</span> {quote.subtitle}
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-300">{quote.description}</p>
            <div className="flex gap-4 mt-4">
              <Link to="./enroll">
                <button className="inline-flex text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-lg text-lg font-semibold modern-btn shadow-xl transform hover:scale-105 transition-all duration-300">Get Started</button>
              </Link>
              <button onClick={() => document.getElementById('Gallery')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex text-gray-300 bg-gray-800 border-2 border-gray-700 py-3 px-8 focus:outline-none hover:bg-gray-700 hover:border-indigo-500 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 cursor-pointer">Visit Gallery</button>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      {/* banner */}

    {/* gallery */}
    <section id="Gallery" className="text-gray-400 bg-gradient-to-b from-gray-900 to-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap animate-fadeInUp">
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            {galleryQuote.title.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{galleryQuote.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">{galleryQuote.description}</p>
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
    <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    {/* gallery */}

    {/* contact */}
    <form action="mailto:dynamonsworld2015@gmail.com" method="POST">
      <section id="contact" className="text-gray-400 bg-gradient-to-b from-gray-800 to-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12 animate-fadeInUp">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">{contactQuote}</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto card-hover bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
            <div className="flex flex-wrap -m-2">
              <FormInputs for='name' text='Name' type='text' id='name' name='name' />
              <FormInputs for='email' text='Email' type='email' id='email' name='email' />
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400 font-medium">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out enhanced-input" required defaultValue={""} />
                </div>
              </div>
              <div className="p-2 w-full">
                <button id="ContactSubmit" className="flex mx-auto text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-10 focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-lg text-lg font-semibold modern-btn shadow-xl transform hover:scale-105 transition-all duration-300">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
    {/* contact */}

    {/* footer */}
    <footer id="footer" className="text-gray-400 bg-gray-900 body-font border-t border-gray-800">
      <div className="container px-5 py-4 mx-auto flex items-center justify-center flex-wrap gap-4 md:gap-8">
        <a className="flex title-font font-medium items-center text-white">
          <span className="text-lg"><span className="font-bold gradient-text-fire">Jyot</span>-Gym</span>
        </a>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Jyot-Gym</p>
          <p className="text-xs text-gray-400">|</p>
          <p className="text-xs text-gray-400">123 Fitness Avenue, Gym Nation, FT 12345</p>
        </div>
        <button onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 p-2 focus:outline-none rounded-lg text-base modern-btn shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M5 15l7-7 7 7" />
            </svg>
          </button>
      </div>
    </footer>
    {/* footer */}
  </div></>);
}
export default Site;