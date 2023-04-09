import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    telephone: '',
    email: '',
    country: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector('form');
    const formDatab = new FormData(formEle);
    fetch(
      'https://script.google.com/macros/s/AKfycbxLGZMcN3sKpvaPeN4XECpg42qrWMFifivedKsLa87BzsUasJToYrkFucQ7v-By4rOg/exec',
      {
        method: 'POST',
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setForm({
      name: '',
      surname: '',
      telephone: '',
      email: '',
      country: '',
      city: '',
      message: '',
    });
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.contactFormContainer}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label>Имя</label>
            <input
              type='text'
              name='name'
              className={styles.input}
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formCol}>
            <label>Фамилия </label>
            <input
              type='text'
              name='surname'
              className={styles.input}
              value={form.surname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label>Телефон </label>
            <input
              type='text'
              name='telephone'
              className={styles.input}
              value={form.telephone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formCol}>
            <label>E-mail</label>
            <input
              type='email'
              name='email'
              className={styles.input}
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label>Услуга</label>
            <input
              type='text'
              name='country'
              className={styles.input}
              value={form.country}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formCol}>
            <label>Как вы нас нашли ? </label>
            <input
              type='text'
              name='city'
              className={styles.input}
              value={form.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${styles.formRow} ${styles.textareaRow}`}>
          <label>Дополнительные коментарии:</label>
          <textarea
            name='message'
            rows='6'
            className={`${styles.input} ${styles.textareaInput}`}
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

/* // ContactForm.js
import React from 'react';
import Button from './Button';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <form className={styles.contactForm}>
      <div className={styles.contactFormContainer}>
        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label htmlFor='name'>Имя</label>
            <input type='text' id='name' name='name' className={styles.input} />
          </div>
          <div className={styles.formCol}>
            <label htmlFor='surname'>Фамилия </label>
            <input
              type='text'
              id='surname'
              name='surname'
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label htmlFor='telephone'>Телефон </label>
            <input
              type='text'
              id='telephone'
              name='telephone'
              className={styles.input}
            />
          </div>
          <div className={styles.formCol}>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
              name='email'
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label htmlFor='country'>Услуга</label>
            <input
              type='text'
              id='country'
              name='country'
              className={styles.input}
            />
          </div>
          <div className={styles.formCol}>
            <label htmlFor='city'>Как вы нас нашли ? </label>
            <input type='text' id='city' name='city' className={styles.input} />
          </div>
        </div>

        <div className={`${styles.formRow} ${styles.textareaRow}`}>
          <label htmlFor='message'>Дополнительные коментарии:</label>
          <textarea
            id='message'
            name='message'
            rows='6'
            className={`${styles.input} ${styles.textareaInput}`}
          ></textarea>
        </div>

        <Button type='submit' className={styles.submitButton} text='Submit'>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
 */
