import { useState } from 'react';
import { teachers } from '../../data/teachers.js';
import styles from './Booking.module.css';

function BookingModal({ teacherName: initialTeacher, tariffName: initialTariff, onClose }) {
  const [step, setStep] = useState(initialTeacher ? 3 : 1);
  const [selectedTeacher, setSelectedTeacher] = useState(
    initialTeacher ? teachers.find(t => t.name === initialTeacher) : null
  );
  const [selectedTariff, setSelectedTariff] = useState(initialTariff || null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Пожалуйста, введите имя');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Введите корректный email');
      return;
    }
    if (formData.phone.length < 5) {
      setError('Введите корректный телефон');
      return;
    }
    if (!formData.date) {
      setError('Выберите дату');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        {step === 1 && !submitted && (
          <>
            <h2 className={styles.title}>Выберите преподавателя</h2>
            <p className={styles.stepInfo}>Шаг 1 из 3</p>
            <div className={styles.teachersList}>
              {teachers.map(teacher => (
                <div
                  key={teacher.id}
                  className={styles.teacherOption}
                  onClick={() => {
                    setSelectedTeacher(teacher);
                    setSelectedTariff(null);
                    setStep(2);
                  }}
                >
                  <img src={teacher.photo} alt={teacher.name} className={styles.teacherPhoto} />
                  <div className={styles.teacherInfo}>
                    <h4>{teacher.name}</h4>
                    <p>{teacher.education}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {step === 2 && !submitted && selectedTeacher && (
          <>
            <h2 className={styles.title}>Выберите тариф</h2>
            <p className={styles.stepInfo}>Шаг 2 из 3</p>
            <div className={styles.selectedTeacher}>
              <img src={selectedTeacher.photo} alt={selectedTeacher.name} className={styles.smallPhoto} />
              <div>
                <p><strong>{selectedTeacher.name}</strong></p>
                <p className={styles.smallText}>{selectedTeacher.education}</p>
              </div>
            </div>
            <div className={styles.tariffsList}>
              {selectedTeacher.tariffs.map((tariff, idx) => (
                <div
                  key={idx}
                  className={styles.tariffOption}
                  onClick={() => {
                    setSelectedTariff(tariff.name);
                    setStep(3);
                  }}
                >
                  <span className={styles.tariffName}>{tariff.name}</span>
                  <span className={styles.tariffPrice}>{tariff.price}</span>
                </div>
              ))}
            </div>
            <button className={styles.backStepBtn} onClick={() => setStep(1)}>
              ← Назад
            </button>
          </>
        )}

        {step === 3 && !submitted && (
          <>
            <h2 className={styles.title}>Заполните форму</h2>
            <p className={styles.stepInfo}>Шаг 3 из 3</p>

            <div className={styles.info}>
              <p><strong>Преподаватель:</strong> {selectedTeacher?.name}</p>
              {selectedTariff && <p><strong>Тариф:</strong> {selectedTariff}</p>}
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Ваше имя *
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Email *
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@mail.ru"
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Телефон *
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (999) 000-00-00"
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Желаемая дата *
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={styles.submitBtn}>
                Отправить заявку
              </button>
            </form>

            {!initialTeacher && (
              <button className={styles.backStepBtn} onClick={() => setStep(2)}>
                ← Назад к тарифам
              </button>
            )}
          </>
        )}

        {submitted && (
          <div className={styles.success}>
            <h2>Заявка отправлена</h2>
            <p>Спасибо, {formData.name}! Мы свяжемся с вами в ближайшее время.</p>
            <div className={styles.summary}>
              <p><strong>Преподаватель:</strong> {selectedTeacher?.name}</p>
              {selectedTariff && <p><strong>Тариф:</strong> {selectedTariff}</p>}
              <p><strong>Желаемая дата:</strong> {formData.date}</p>
            </div>
            <button className={styles.okBtn} onClick={onClose}>Хорошо</button>
          </div>
        )}
      </div>
    </div>
  );
}

export { BookingModal };