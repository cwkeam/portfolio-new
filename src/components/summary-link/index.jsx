import { Link } from 'gatsby';
import React from 'react';

// const loadImage = imageName => {
//   console.log(imageName)
//   import(`./../../images/${imageName}`).then(image => {
//     return image
//   });
// };
const classes = {
  // wrapper: 'mb-6',
  imageWrapper: 'w-full max-w-500',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-gray-800 font-light text-md',
};

const SummaryLink = ({ name, description = false, image = false, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div>
      <h1
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h1>
      {image && 
        <div className={classes.imageWrapper} style={{marginBottom:14, marginTop:14}}>
          <img className={classes.image} src={image} alt={image} />
        </div>
      }
      {description && <p className={classes.description} dangerouslySetInnerHTML={{__html: description}}></p>}
    </div>
  );
};

export default SummaryLink;
