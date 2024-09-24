import { profileData } from "./profileCard";
import postImage from "../components/Assets/Time.jpg"
// import postImage from "../feedbacks-template-ui.png";

function Post({ name, bio, date, text, image }) {
    const defaultText = "I was in Times Square until 2am waiting to see the massive dark mode switch billboard I made in Figma    It was so worth it for this epic shot, don’t you think?    <br /> <br />    #figma #figmadesign #figmaambassador";

    return (
        <div className="border px-4 py-3 rounded-lg bg-white text-left">
            <div className="flex flex-row text-left items-start gap-x-3">
                <img
                    src="https://media.licdn.com/dms/image/v2/D4D35AQEoBDfSdgUoGA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695289367351?e=1727776800&v=beta&t=xgZeFrcC9AJcoZSUFKDiJqknbEsxCOPkKaB_dZsmiHs"
                    alt="avatar"
                    width={48}
                    height={48}
                    style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
                />
                <div className="leading-normal text-xs">
                    <div className="text-sm font-semibold">{name ?? profileData.name}</div>
                    <div>{bio ?? profileData.bio}</div>
                    <div>{date ?? new Date().toISOString()}</div>
                </div>
            </div>

            {/* Post Text */}
            <div className="text-sm py-4 leading-normal">
                {text ?? defaultText}
            </div>

            <div>
                <img
                    src={image ?? postImage}
                    alt="avatar"
                    width={"auto"}
                    height={"100%"}
                    style={{ width: "100%", background: "navajowhite", borderRadius: "8px", border: "2px solid white" }}
                />
            </div>
            <div className="flex flex-row justify-around px-4 pt-1 mt-2 border-t">
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-gray-100">
                    <span className="text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><circle cx="7.499" cy="9.5" r="1.5"></circle><path d="m10.499 14-1.5-2-3 4h12l-4.5-6z"></path><path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"></path></svg>
                    </span>
                    <span>Like</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-gray-100">
                    <span className="text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>
                    </span>
                    <span>Comment</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-gray-100">
                    <span className="text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path></svg>
                    </span>
                    <span>Repost</span>
                </div>
                <div className="flex flex-row items-center gap-x-2 font-bold text-sm px-8 py-4 rounded hover:bg-gray-100">
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor", transform: ";msFilter:;" }}><path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path></svg>
                    </span>
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Post;