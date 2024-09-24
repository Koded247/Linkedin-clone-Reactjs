import { truncateText } from "../utils";

export const recommendationData = [
    {
        dp: <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Mayowa Obisesan",
        bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
    },
    {
        dp: <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Mayowa Obisesan",
        bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
    },
    {
        dp: <img
            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Ryan"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Mayowa Obisesan",
        bio: "Software Engineer | Frontend Developer | Web3 Mentor at web3bridge",
    },
]

function RecommendationProfile({ dp, name, bio }) {
    return (
        <div className="flex flex-row items-start gap-x-2">
            <div>{dp}</div>
            <div className="flex flex-col items-start text-xs">
                <div className="text-sm font-bold">{name}</div>
                <div className="leading-normal">{truncateText(bio, 50)}</div>
                <button className="border border-gray-800 px-4 py-2 mt-2 rounded-full font-bold text-md">Follow</button>
            </div>
        </div>
    )
}

function RecommendationsCard() {
    return (
        <div className="recommendation-card-container flex flex-col gap-y-2 w-72 max-w-72 bg-white rounded-lg px-4 py-4 border text-left">
            <div className="font-bold text-xs">
                Add to your feed
            </div>

            <div className="flex flex-col gap-y-2">
                {
                    recommendationData.map((eachRecommendationData) => (
                        <RecommendationProfile {...eachRecommendationData} />
                    ))
                }
            </div>

            <div className="font-bold text-sm pt-2">View all recommendations</div>
        </div>
    )
}

export default RecommendationsCard;