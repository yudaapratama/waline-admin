import cls from 'classnames';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import TwoFactorAuth from './twoFactorAuth';
import Header from '../../components/Header';
import * as Icons from '../../components/icon';
import { updateProfile } from '../../services/user';

export default function () {
  const [isPasswordUpdating, setPasswordUpdating] = useState(false);
  const [isProfileUpdating, setProfileUpdating] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { t } = useTranslation();

  const onProfileUpdate = async function (e) {
    e.preventDefault();

    const display_name = e.target.screenName.value;
    const url = e.target.url.value;
    const label = e.target.label.value;

    if (!display_name || !url) {
      return alert(t('nickname and homepage are required'));
    }

    setProfileUpdating(true);
    try {
      await dispatch.user.updateProfile({ display_name, url, label });
    } catch (e) {
      alert(e);
    } finally {
      setProfileUpdating(false);
    }
  };

  const onPasswordUpdate = async function (e) {
    e.preventDefault();

    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (!password || !confirm) {
      return alert(t('please input password'));
    }

    if (password !== confirm) {
      return alert(t("passwords don't match"));
    }

    setPasswordUpdating(true);
    await updateProfile({ password });
    setPasswordUpdating(false);
  };

  const unbind = async function (type) {
    await updateProfile({ [type]: '' });
    location.reload();
  };

  const changeAvatar = async function (e) {
    e.preventDefault();

    const url = prompt(t('please input avatar url'));

    if (!url) {
      return;
    }

    await updateProfile({ avatar: url });
    location.reload();
  };

  let baseUrl = window.serverURL;

  if (!baseUrl) {
    const match = location.pathname.match(/(.*?\/)ui/);

    baseUrl = match ? match[1] : '/';
  }
  const qs = new URLSearchParams(location.search);
  let token =
    window.TOKEN || sessionStorage.getItem('TOKEN') || qs.get('token');

  if (!token) {
    token = localStorage.getItem('TOKEN');
  }

  return (
    <>
      <Header />
      <div className="main">
        <div className="body container">
          <div className="typecho-page-title">
            <h2>{t('setting')}</h2>
          </div>
          <div className="row typecho-page-main">
            <div className="col-mb-12 col-tb-3">
              <p>
                <a
                  href="javascript:void(0)"
                  title={t('change avatar')}
                  target="_blank"
                  rel="noreferrer"
                  onClick={changeAvatar}
                >
                  <img
                    className="profile-avatar"
                    src={
                      user.avatar ||
                      `https://seccdn.libravatar.org/avatar/${user.mailMd5}?s=220&amp;r=X&amp;d=mm`
                    }
                  />
                </a>
              </p>
              <h2>{user.display_name}</h2>
              <p>{user.email}</p>
            </div>

            <div
              className="col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel"
              role="form"
            >
              <section>
                <h3>{t('profile')}</h3>
                <form method="post" onSubmit={onProfileUpdate}>
                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="screenName-0-1">
                        {t('nickname')}
                      </label>
                      <input
                        id="screenName-0-1"
                        name="screenName"
                        type="text"
                        className="text"
                        defaultValue={user.display_name}
                      />
                      <p className="description"></p>
                    </li>
                  </ul>

                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="url-0-2">
                        {t('homepage')}
                      </label>
                      <input
                        id="url-0-2"
                        name="url"
                        type="text"
                        className="text"
                        defaultValue={user.url}
                      />
                      <p className="description">
                        <Trans
                          i18nKey="homepage tips"
                          defaults="Current users' homepage. It must be start with <code>http://</code> or <code>https://</code>."
                          components={{ code: <code /> }}
                        />
                      </p>
                    </li>
                  </ul>

                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="url-0-2">
                        {t('exclusive label')}
                      </label>
                      <input
                        id="url-0-2"
                        name="label"
                        type="text"
                        className="text"
                        defaultValue={user.label}
                      />
                      <p className="description"></p>
                    </li>
                  </ul>

                  <ul className="typecho-option typecho-option-submit">
                    <li>
                      <button
                        type="submit"
                        className="btn primary"
                        disabled={isProfileUpdating}
                      >
                        {t('update my profile')}
                      </button>
                    </li>
                  </ul>
                </form>
              </section>
              <br />
              <section id="social-account">
                <h3>{t('connect to social account')}</h3>
                <div className="account-list">
                  {/** warning: compat with old server version */}
                  {window.ALLOW_SOCIALS && (
                    <div
                      className={cls('account-item github', {
                        bind: user.github,
                      })}
                    >
                      <a
                        href={
                          user.github
                            ? `https://github.com/${user.github}`
                            : `${baseUrl}oauth/github?state=${token}`
                        }
                        target={user.github ? '_blank' : '_self'}
                        rel="noreferrer"
                      >
                        {React.createElement(Icons.github)}
                      </a>
                    </div>
                  )}
                  {!window.ALLOW_SOCIALS &&
                    ['google'].map((social) => (
                      <div
                        key={social}
                        className={cls('account-item', social, {
                          bind: user[social],
                        })}
                      >
                        <a
                          href={
                            user[social]
                              ? `https://${social}.com/${user[social]}`
                              : `${baseUrl}oauth/?type=${social}&state=${token}`
                          }
                          target={user[social] ? '_blank' : '_self'}
                          rel="noreferrer"
                        >
                          {React.createElement(Icons[social])}
                        </a>
                        <div
                          className="account-unbind"
                          onClick={() => unbind(social)}
                        >
                          <svg
                            className="close-icon"
                            viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                          >
                            <path d="m568.569 512 170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" />
                          </svg>
                        </div>
                      </div>
                    ))}
                </div>
              </section>
              <br />
              <section id="change-password">
                <h3>{t('change password')}</h3>
                <form method="post" onSubmit={onPasswordUpdate}>
                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="password-0-11">
                        {t('password')}
                      </label>
                      <input
                        id="password-0-11"
                        name="password"
                        type="password"
                        className="w-60"
                        autoComplete="new-password"
                      />
                      <p className="description">
                        <Trans i18nKey="password tips"></Trans>
                      </p>
                    </li>
                  </ul>

                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="confirm-0-12">
                        {t('password again')}
                      </label>
                      <input
                        id="confirm-0-12"
                        name="confirm"
                        type="password"
                        className="w-60"
                        autoComplete="new-password"
                      />
                      <p className="description">
                        <Trans i18nKey="password again tips"></Trans>
                      </p>
                    </li>
                  </ul>
                  <ul className="typecho-option typecho-option-submit">
                    <li>
                      <button
                        type="submit"
                        className="btn primary"
                        disabled={isPasswordUpdating}
                      >
                        {t('update password')}
                      </button>
                    </li>
                  </ul>
                </form>
              </section>
              <br />
              <TwoFactorAuth />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
