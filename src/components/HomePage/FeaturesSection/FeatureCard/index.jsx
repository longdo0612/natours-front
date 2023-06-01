import classes from './index.module.scss';
import clsx from 'clsx';

const FeatureCard = ({ Icon, heading, text }) => {
  return (
    <div className={classes['feature-box']}>
      <Icon className={clsx([classes['feature-box__icon']])} />
      <h3 className={clsx([classes['heading-tertiary'], 'ma-bt-sm'])}>
        {heading}
      </h3>
      <p className={classes['feature-box__text']}>{text}</p>
    </div>
  );
};

export default FeatureCard;
