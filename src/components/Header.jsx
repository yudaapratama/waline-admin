import React, { useEffect, useMemo, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { LANGUAGE_OPTIONS } from '../locales';

export default function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { t, i18n } = useTranslation();
  const [latestVersion, setLatestVersion] = useState(null);

  const defaultLanguage = useMemo(() => {
    const option = LANGUAGE_OPTIONS.find((option) =>
      option.alias.includes(i18n.language),
    );

    return option?.value ?? '';
  }, [i18n.language]);

  useEffect(() => {
    if (!user?.email || !user?.__version) {
      return;
    }

    fetch('https://registry.npmjs.org/@waline/vercel/latest')
      .then((resp) => resp.json())
      .then((resp) => {
        if (user.__version === resp.version) {
          return;
        }
        setLatestVersion(resp.version);
      });
  }, [user?.email]);

  const updateLanguage = function (e) {
    i18n.changeLanguage(e.target.value);
  };

  const onLogout = function (e) {
    e.preventDefault();
    dispatch.user.logout();
    navigate('/ui/login');
  };

  return [
    <div className="typecho-head-nav clear-fix" role="navigation" key="header">
      {user?.type === 'administrator' ? (
        <nav id="typecho-nav-list">
          <ul className="root">
            <li className="parent">
              <Link to="/ui">{t('management')}</Link>
            </li>
            <ul className="child">
              <li className="last">
                <Link to="/ui">{t('comment')}</Link>
              </li>
              <li className="last">
                <Link to="/ui/user">{t('user')}</Link>
              </li>
              <li className="last">
                <Link to="/ui/migration">{t('migration')}</Link>
              </li>
            </ul>
          </ul>
        </nav>
      ) : null}
      <div className="operate">
        
        {user?.type ? (
          <Link to="/ui/profile" className="author">
            {user.display_name}
          </Link>
        ) : null}

        {user?.type ? (
          <a className="exit" href="#" onClick={onLogout}>
            {t('logout')}
          </a>
        ) : null}
      </div>
    </div>,
    
  ];
}
