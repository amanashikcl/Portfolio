import TiltedCard from '../components/TiltedCard';
import Typewriter from '../components/Typewriter';
import GradientText from '../components/GradientText';
import ShinyText from '../components/ShinyText';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-8 max-w-5xl mx-auto">
      <div className="w-full lg:w-1/2 flex-shrink-0 flex justify-center">
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
      <div className="w-full lg:w-1/2 space-y-5">
        <h1 className="text-5xl font-bold">
          Hello, I'm{' '}
          <GradientText
            colors={['#6366f1', '#a855f7', '#ec4899', '#6366f1']}
            animationSpeed={3}
            className="text-5xl font-bold"
          >
            Aman Ashik
          </GradientText>
        </h1>
        <h2 className="text-2xl text-base-content/70 h-8">
          <Typewriter
            texts={['Django REST Framework Developer', 'Python & Django Expert', 'React Frontend Developer', 'Full Stack Engineer']}
            speed={80}
            deleteSpeed={40}
            pauseTime={1500}
          />
        </h2>
        <div className="text-lg leading-relaxed">
          <ShinyText
            text="I'm a passionate developer with expertise in building modern web applications. I love turning ideas into reality through clean code and thoughtful design."
            speed={3}
            className="text-lg"
          />
        </div>
        <div className="flex gap-4 pt-4">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-outline">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
