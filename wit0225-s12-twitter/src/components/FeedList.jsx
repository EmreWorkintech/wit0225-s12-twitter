import { useTweets } from "../services/queries";
import FeedItem from "./FeedItem";

function FeedList() {
  const { data: tweets, error, isLoading } = useTweets();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {tweets.map((tweet, i) => (
        <FeedItem key={i} tweet={tweet} />
      ))}
    </div>
  );
}

export default FeedList;
