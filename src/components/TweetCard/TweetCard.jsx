import { Avatar, Circle, FollowBtn, Line, ProfileCard, TweetsLabel } from "./TweetCard.styled"

const TweetCard = ({ user, follow, unfollow, followedUsers }) => {

    return(
        <ProfileCard>
        <Line />
        <Circle />
        <Avatar url={user.avatar} alt={user}/>
        
        <TweetsLabel>{user.tweets} Tweets</TweetsLabel>
        <TweetsLabel>{user.followers} Followers</TweetsLabel>
       
   {followedUsers.includes(user.id) ? (
        <FollowBtn
          type="button"
          onClick={() => unfollow(user)}
          user={user}
        >
          following
        </FollowBtn>
      ) : (
        <FollowBtn
          type="button"
          onClick={() => follow(user)}
          user={user}
        >
          follow
        </FollowBtn>
      )}
        </ProfileCard> 
    )
}

export default TweetCard