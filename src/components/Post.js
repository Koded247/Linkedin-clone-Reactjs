import { profileData } from "./profileCard";
import postImage from "../feedbacks-template-ui.png";

function Post({ name, bio, date, text, image }) {
    const defaultText = "I was in Times Square until 2am waiting to see the massive dark mode switch billboard I made in Figma    It was so worth it for this epic shot, don’t you think?    <br /> <br />    #figma #figmadesign #figmaambassador";

    return (
        <div className="border px-4 py-3 rounded-lg bg-white text-left">
            <div className="flex flex-row text-left items-start gap-x-3">
                <img
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan"
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
        </div>
    )
}

export default Post;