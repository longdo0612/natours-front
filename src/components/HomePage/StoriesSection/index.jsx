import classes from './index.module.scss';
import user1 from '../../../assets/nat-8.jpg';
import user2 from '../../../assets/nat-9.jpg';
import Story from './Story';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const StoriesSection = () => {
  return (
    <section className={classes['section-stories']}>
      <div className={classes['bg-video']}>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/img/video.mp4' type='video/mp4' />
          <source src='/img/video.webm' type='video/webm' />
          Your browser is not supported
        </video>
      </div>

      <div className='u-center-text ma-bt-lg'>
        <h2 className={classes['heading-secondary']}>
          We make people genuinely happy
        </h2>
      </div>

      <div className={clsx([classes.center, 'ma-bt-ms'])}>
        <Story
          user={user1}
          title='I had the best week ever with my family'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              exercitationem rerum? Vero, soluta! Nulla dolore quidem fuga quas,
              optio repellendus autem veritatis tempora cumque neque itaque, eos
              doloribus laboriosam quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facilis exercitationem voluptatibus inventore
              temporibus voluptas iure voluptatum impedit, vero ex! Voluptas
              nobis excepturi aperiam reiciendis illo odio consectetur,
              veritatis beatae consequatur!'
          name='Mary Smith'
        />

        <Story
          user={user2}
          title='I am a different person now'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa quis quibusdam provident quia sint sequi, et corporis voluptatem cupiditate asperiores sunt hic facilis. Ipsum quas veritatis unde exercitationem tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero non tempora minus inventore. Sunt accusamus officia placeat minima, adipisci et ea itaque molestiae fugit deleniti nemo ad culpa saepe.'
          name='Jack Wilson'
        />
      </div>
      <div className='u-center-text ma-bt-ms'>
        <Link className={classes['btn-text']}>Read all stories &rarr;</Link>
      </div>
    </section>
  );
};

export default StoriesSection;
