import TiltedCard from '../components/TiltedCard';
import Typewriter from '../components/Typewriter';

const Home = () => {
  return (

    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 max-w-5xl mx-auto">
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <TiltedCard
          imageSrc="/aman.jpg"
          altText="Profile"
          captionText="Aman Ashik :)"
          containerHeight="350px"
          imageHeight="350px"
          imageWidth="350px"
          showMobileWarning={false}
          rounded="rounded-full"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">Hello, I'm Aman Ashik</h1>
        <h2 className="text-2xl text-base-content/70">
          <Typewriter
            texts={['Django REST Framework Developer', 'Python & Django Expert', 'React Frontend Developer', 'Full Stack Engineer']}
            speed={80}
            deleteSpeed={40}
            pauseTime={1500}
          />
        </h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate developer with expertise in building modern web applications.
          I love turning ideas into reality through clean code and thoughtful design.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-outline">Contact Me</button>
        </div>
      </div>
    </div>

  );
};

export default Home;
