import classes from './index.module.scss';
import {
  IoGlobeOutline,
  IoCompassOutline,
  IoMapOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <section className={classes['section-features']}>
      <div className={classes.flex}>
        <FeatureCard
          Icon={IoGlobeOutline}
          heading='Explore the world'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repudiandae ducimus libero!'
        />

        <FeatureCard
          Icon={IoCompassOutline}
          heading='Meet nature'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime recusandae autem.'
        />

        <FeatureCard
          Icon={IoMapOutline}
          heading='Find your way'
          text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam atque porro doloribus!'
        />

        <FeatureCard
          Icon={IoHeartOutline}
          heading='Live a healthier life'
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eveniet dicta natus!'
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
