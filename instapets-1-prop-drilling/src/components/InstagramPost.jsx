import LikesButton from './LikesButton'

const InstagramPost = ({ picture, incrementTotalLikes }) => { // passing in the setter again
  return (
    <li className="insta-pic">
      <img alt={picture.caption} src={picture.src} />
      <p>{picture.caption}</p>
      <LikesButton incrementTotalLikes={incrementTotalLikes} /> {/** this is a prop still */}
    </li >
  );
};

export default InstagramPost;