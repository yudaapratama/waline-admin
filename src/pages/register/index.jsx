import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import { useCaptcha } from '../../components/useCaptcha';

export default function () {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const execute = useCaptcha({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: true,
  });

  useEffect(() => {
    if (user && user.email) {
      navigate('/ui', { replace: true });
    }
  }, [navigate]);

  const onSubmit = async function (e) {
    e.preventDefault();
    setError(false);

    const nick = e.target.nick.value;

    if (!nick || nick.length < 2) {
      return setError(t('nickname illegal'));
    }
    const email = e.target.email.value;

    if (!email) {
      return setError(t('please input email'));
    }
    const link = e.target.link.value;
    const password = e.target.password.value;
    const passwordAgain = e.target['password-again'].value;

    if (!password || !passwordAgain || passwordAgain !== password) {
      return setError(t("passwords don't match"));
    }

    try {
      setSubmitting(true);
      const token = await execute('login');
      const resp = await dispatch.user.register({
        display_name: nick,
        email,
        url: link,
        password,
        recaptchaV3: window.recaptchaV3Key ? token : undefined,
        turnstile: window.turnstileKey ? token : undefined,
      });

      if (resp && resp.verify) {
        alert(t('register success! please go to your mailbox to verify it!'));
      }
      navigate('/ui/login');
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div
        className="message popup notice"
        style={{
          position: 'fixed',
          top: 0,
          display: error ? 'block' : 'none',
        }}
      >
        <ul>{error ? <li>{error}</li> : null}</ul>
      </div>
      <div className="typecho-login-wrap">
        <div className="typecho-login">
          <form method="post" name="login" role="form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="nick" className="sr-only">
                {t('nickname')}
              </label>
              <input
                type="text"
                id="nick"
                name="nick"
                placeholder={t('nickname')}
                className="text-l w-100"
              />
            </p>
            <p>
              <label htmlFor="email" className="sr-only">
                {t('email')}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t('email')}
                className="text-l w-100"
              />
            </p>
            <p>
              <label htmlFor="link" className="sr-only">
                {t('website')}
              </label>
              <input
                type="text"
                id="link"
                name="link"
                placeholder={t('website')}
                className="text-l w-100"
              />
            </p>
            <p>
              <label htmlFor="password" className="sr-only">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="text-l w-100"
                placeholder={t('password')}
              />
            </p>
            <p>
              <label htmlFor="password-again" className="sr-only">
                {t('password again')}
              </label>
              <input
                type="password"
                id="password-again"
                name="password-again"
                className="text-l w-100"
                placeholder={t('password again')}
              />
            </p>
            <p className="captcha-container" />
            <p className="submit">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-l w-100 primary"
              >
                {t('register')}
              </button>
            </p>
          </form>

          <p className="more-link">
            <Link to="/ui">{t('back to home')}</Link> •{' '}
            <Link to="/ui/login">{t('register.login')}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
