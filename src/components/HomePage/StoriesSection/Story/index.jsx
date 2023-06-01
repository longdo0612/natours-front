import clsx from 'clsx';
import classes from './index.module.scss';

const Story = ({ user, title, content, name }) => {
  return (
    <div className={classes.story}>
      <figure className={classes['story__shape']}>
        <img
          src={user}
          alt='Person on a tour'
          className={classes['story__image']}
        />

        <figcaption className={clsx(classes['story__caption'])}>
          {name}
        </figcaption>
      </figure>
      <div className={classes['story__text']}>
        <h3 className={clsx([classes['heading-tertiary'], 'ma-bt-sm'])}>
          {title}
        </h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Story;
