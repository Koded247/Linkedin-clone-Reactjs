import { OrangeBoxSmall } from "./orangeBox";
import "../styles/ProfileCard.css";

export const profileData = {
    dp: <img
        src="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan"
        alt="avatar"
        width={80}
        height={80}
        style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
    />,
    name: "Mayowa Obisesan",
    bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
    profileViewers: 65,
    postImpressions: 43,
}

function ProfileCard() {
    return (
        <div className="profile-card-container max-w-60 bg-white pt-6 rounded-lg border">
            <div className="profile-bg-cover"></div>
            <div className="relative z-10 flex flex-row justify-center">
                {profileData.dp}
            </div>
            <div className="flex flex-col items-center text-center py-4">
                <a href="/" className="profile-name text-base font-bold hover:underline">
                    {profileData.name}
                </a>
                <div className="profile-bio text-xs text-gray-600 max-w-[70%]">
                    {profileData.bio}
                </div>
            </div>
            <div className="border-t py-4 font-semibold text-xs">
                <div className="flex flex-row justify-between px-2 py-1 hover:bg-gray-100">
                    <span>Profile Viewers</span>
                    <span>{profileData.profileViewers}</span>
                </div>
                <div className="flex flex-row justify-between px-2 py-1 hover:bg-gray-100">
                    <span>Post Impressions</span>
                    <span>{profileData.postImpressions}</span>
                </div>
            </div>
            <div className="group border-t text-xs text-left p-3 space-y-2 hover:bg-gray-100 hover:cursor-pointer">
                <div>Job search smarter with Premium</div>
                <div className="flex items-center font-bold gap-x-2 group-hover:text-[#0a66c2]">
                    <OrangeBoxSmall />
                    Try for NGN0
                </div>
            </div>
            <div className="border-t flex flex-row justify-start items-center gap-x-2 text-xs px-2 py-3 hover:bg-gray-100 hover:cursor-pointer">
                <span className="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentcolor", transform: ";msFilter:;" }}><path d="M12 11.222 14.667 13l-.89-3.111L16 8l-2.667-.333L12 5l-1.333 2.667L8 8l2.223 1.889L9.333 13z"></path><path d="M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571 7 4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889.89 3.111L12 11.222 9.333 13l.89-3.111L8 8z"></path></svg>
                </span>
                <span className="font-bold">Saved items</span>
            </div>
        </div>
    );
}

export default ProfileCard;