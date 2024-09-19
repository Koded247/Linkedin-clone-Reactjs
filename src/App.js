import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import 'boxicons';
import ProfileCard from './components/profileCard';
import CreatePost from './components/createPost';
import Post from './components/Post';

const postData = [
  {
    name: "Mayowa Obisesan",
    bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
    text: "This is the dummy text that should show for the first post component"
  },
  {
    name: "User one",
    bio: "This is user one bio",
  },
  {
    name: "User two",
    bio: "This is user two bio",
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
    name: "Mayowa Obisesan",
    bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content-container flex flex-row gap-x-8 mt-8 mx-auto max-w-6xl'>

        {/* The Left side of the body */}
        <div>
          <ProfileCard />
        </div>

        {/* The Center contents of the body */}
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

        {/* The Right side of the body */}
        <div>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}

export default App;
