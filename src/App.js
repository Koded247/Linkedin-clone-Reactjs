
import './App.css';
import Navbar from './components/navBar';
import 'boxicons';
import ProfileCard from './components/profileCard';
import CreatePost from './components/createPost';
import Post from './components/Post';
import RecommendationsCard from './components/Recommendations';
import RightFooter from './components/RightFooter';
import Image1 from './components/Assets/projmanage.jpg';
import Image2 from './components/Assets/beltechimg.jpg';

// import RecommendationsCard from './components/Recommendations';
// import RightFooter from './components/RightFooter';

const postData = [
  {
    name: "Akorede Abidoye",
    bio: "Software Engineer | Frontend Developer ",
    text: "This is the first post content that would show for the first post component"
  },
  {
    name: "User one",
    bio: "This is user one bio",
    text: "With Project Management skills, you can make your dreams happen in just about any industry, anywhere in the world",
    image: Image1,
  },
  {
    name: "User two",
    bio: "This is user two bio",
    text: "We’re almost in the final stretch of our testnet phase and gearing up for our game-changing mainnet launch. Get ready to experience the future of smart waste management and Web3 like never before",
    image: Image2,
  },
  {
    name: "User three",
    bio: "This is user three bio",
  },
  {
    name: "User four",
    bio: "This is user four bio",
  },
  {
    name: "User five",
    bio: "This is user five bio",
  },
  {
    name: "User six",
    bio: "This is user six bio",
  },
  {
    name: "User seven",
    bio: "This is user seven bio",
  },
  {
    name: "Akorede Abidoye",
    bio: "Software Engineer | Frontend Developer",
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content-container flex flex-row gap-x-8 mt-8 mx-auto max-w-6xl'>

        
        <div>
          <ProfileCard />
        </div>

        
        <div className='w-[60%] max-w-[60%]'>
          <CreatePost />

          <div className='space-y-2 py-2'>
            {
              postData.map((eachPost) => (
                <Post {...eachPost} />
              ))
            }
          </div>
        </div>

        
        
        <div>
          <RecommendationsCard />
          <RightFooter />

          
          <div className='text-xs text-center'>LinkedIn Corporation © 2024</div>
        </div>
      </div>
    </div>
  );
}

export default App;
