import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import * as Icons from '../../components/icon';
import { useCaptcha } from '../../components/useCaptcha';
import { get2FAToken } from '../../services/user';

export default function () {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [is2FAEnabled, enable2FA] = useState(false);
  const execute = useCaptcha({
    sitekey: window.turnstileKey || window.recaptchaV3Key,
    hideDefaultBadge: true,
  });

  const match = location.pathname.match(/(.*?\/)ui/);
  const basePath = match && match[1] ? match[1] : '/';

  useEffect(() => {
    if (!user || !user.email) {
      return;
    }

    const query = new URLSearchParams(location.search);
    const isAdmin = user.type === 'administrator';

    const defaultRedirect = isAdmin ? '/ui/profile' : '/ui';
    const redirect =
      isAdmin && query.get('redirect')
        ? query.get('redirect')
        : defaultRedirect;

    console.log(redirect);
    navigate(redirect.replace(/\/+/g, '/'));
  }, [user]);

  const onSubmit = async function (e) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const code = e.target.code ? e.target.code.value : '';
    const remember = e.target.remember.checked;

    if (!email) {
      return setError(t('please input email'));
    }
    if (!password) {
      return setError(t('please input password'));
    }
    if (e.target.code && !code) {
      return setError(t('please input 2fa code'));
    }

    const token = await execute('login');

    try {
      await dispatch.user.login({
        email,
        password,
        code,
        remember,
        recaptchaV3: window.recaptchaV3Key ? token : undefined,
        turnstile: window.turnstileKey ? token : undefined,
      });
    } catch (e) {
      setError(t('email or password error'));
    } finally {
      setLoading(false);
    }
  };

  const check2FACode = async (e) => {
    const email = e.target.value;

    if (!email) {
      return;
    }

    const data = await get2FAToken(email);

    enable2FA(data.enable);
  };

  let baseUrl = window.serverURL;

  if (!baseUrl) {
    const match = location.pathname.match(/(.*?\/)ui/);

    baseUrl = match ? match[1] : '/';
  }

  const socials = ['google'];

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
          {/* <h1><a href="http://waline.js.org" className="i-logo">Waline</a></h1> */}

          <form method="post" name="login" role="form" onSubmit={onSubmit} style={{ minWidth: '300px' }}>
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
                onBlur={check2FACode}
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
            {is2FAEnabled && (
              <p>
                <label htmlFor="code" className="sr-only">
                  {t('2fa code')}
                </label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  className="text-l w-100"
                  placeholder={t('2fa code')}
                />
              </p>
            )}
            <p className="captcha-container" />
            <p className="submit">
              <button
                type="submit"
                className="btn btn-l w-100 primary"
                disabled={loading}
              >
                {t('login')}
              </button>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label htmlFor="remember">
                <input
                  type="checkbox"
                  name="remember"
                  className="checkbox"
                  id="remember"
                />{' '}
                {t('remember me')}
              </label>
              <span className="right forgot-password">
                <Link to="/ui/forgot">{t('forgot password')}</Link>
              </span>
            </p>
          </form>
          <div className="social-accounts">
            {(window.ALLOW_SOCIALS || socials).map((social) => (
              <a
                key={social}
                href={`${baseUrl}oauth${
                  window.ALLOW_SOCIALS ? '/' + social + '?' : `?type=${social}`
                }&redirect=${basePath}ui/profile`}
              >
                {React.createElement(Icons[social])}
              </a>
            ))}
          </div>

          <p className="more-link">
            <Link to="/ui">{t('back to home')}</Link> •{' '}
            <Link to="/ui/register">{t('register')}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
