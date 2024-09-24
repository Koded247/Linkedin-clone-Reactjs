import { truncateText } from "../utils";

export const recommendationData = [
    {
        dp: <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFP-cp26qyBJA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1656941846715?e=1732752000&v=beta&t=Jg3rLsR6luluuktVvcJTNUNScsSuIcdKdOYysayq6jo"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "muhammed kabir",
        bio: "Business Owner | Investor",
    },
    {
        dp: <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEe_9Rg5DcEcQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1699354218628?e=1732752000&v=beta&t=WYTOhxouZJVlMFl2jjybh3F9k6d_rNeedjCVoQx3pRs"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "Olawale Gabriel",
        bio: "Teacher | Tutor",
    },
    {
        dp: <img
            src="https://media.licdn.com/dms/image/v2/D4D35AQGnv5Cls4h8mA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719437447990?e=1727798400&v=beta&t=b5jQH0MyJIBPPpjiPGK5c0Q6UU8ehFwNDrn64dJOH7I"
            alt="avatar"
            width={80}
            height={80}
            style={{ background: "navajowhite", borderRadius: "50%", border: "2px solid white" }}
        />,
        name: "chinedu Amaka",
        bio: "fashion Designer",
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