import clsx from 'clsx';
import classes from './index.module.scss';

const BookingSection = () => {
  return (
    <section className={classes['section-book']}>
      <div className={classes['flex-center']}>
        <div className={classes.book}>
          <div className={classes['book__form']}>
            <form className={classes.form}>
              <div className='ma-bt-lg'>
                <h2 className={classes['heading-secondary']}>
                  Start booking now
                </h2>
              </div>

              <div className={classes['form__group']}>
                <input
                  type='text'
                  className={classes['form__input']}
                  placeholder='Full Name'
                  id='name'
                  required
                />
                <label htmlFor='name' className={classes['form__label']}>
                  Full Name
                </label>
              </div>

              <div className={classes['form__group']}>
                <input
                  type='email'
                  className={classes['form__input']}
                  placeholder='Email address'
                  id='email'
                  required
                />
                <label htmlFor='email' className={classes['form__label']}>
                  Email address
                </label>
              </div>

              <div className={classes['form__group']}>
                <div className={classes['form__radio-group']}>
                  <input
                    type='radio'
                    className={classes['form__radio-input']}
                    id='small'
                    name='size'
                  />
                  <label
                    htmlFor='small'
                    className={classes['form__radio-label']}
                  >
                    <span className={classes['form__radio-button']}></span>
                    Small tour group
                  </label>
                </div>

                <div
                  className={clsx([classes['form__radio-group'], 'ma-bt-lg'])}
                >
                  <input
                    type='radio'
                    className={classes['form__radio-input']}
                    id='large'
                    name='size'
                  />
                  <label
                    htmlFor='large'
                    className={classes['form__radio-label']}
                  >
                    <span className={classes['form__radio-button']}></span>
                    Large tour group
                  </label>
                </div>

                <div className={classes['form__radio-group']}>
                  <button className={clsx([classes.btn, classes['btn-green']])}>
                    Next step &rarr;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
