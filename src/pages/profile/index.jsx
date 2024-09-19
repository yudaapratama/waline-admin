import cls from 'classnames';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import 'cropt/src/cropt.css';
import { Cropt } from 'cropt';


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

	let element = null
	let cropper = null
	let previousImage = null
	let croppedImage = null

  const onProfileUpdate = async function (e) {
    e.preventDefault();
		setProfileUpdating(true);

		const display_name = e.target.screenName.value;
		// const avatar = e.target.avatar.files[0];
		// const label = e.target.label.value;

		let avatar
		if(croppedImage) {
			avatar = croppedImage
		} else {
			avatar = e.target.avatar.files[0];
		}
		
		let url = user.avatar;
		if(avatar) {
			url = await uploadToImgBB(avatar);
		}

		// if (!display_name || !url) {
		//   return alert(t('nickname and homepage are required'));
		// }

		try {
			await dispatch.user.updateProfile({ display_name, avatar: url });
		} catch (e) {
			alert(e);
		} finally {
			setProfileUpdating(false);
			location.reload();
		}

  };

	
	const onChangeImageHandler = event => {
		event.preventDefault();
		const element = document.getElementById('image-container')
		const wrapper = document.getElementById('image-container-wrapper');
		const img = document.getElementById('image-result');
		
		wrapper.setAttribute('style', 'display: none;');
		
		if(event.target.files.length === 0) {
			document.getElementsByClassName('file')[0].value = '';
			img.removeAttribute('src');
			img.setAttribute('style', 'display: none;');
			return
		}

    const size = event.target.files[0].size
		if(parseInt(size) > (31 * 1024 * 1024)) {
			alert('The image size is too large, please choose another one');
			document.getElementsByClassName('file')[0].value = '';
			return
		}

		wrapper.removeAttribute('style');

		if(cropper) {
			cropper.destroy();
		}

		cropper = new Cropt(element, {
			viewport: {
					width: 219,
					height: 220,
					type: "square",
			},
			mouseWheelZoom: "on",
		});

		const reader = new FileReader();
		reader.onload = function (e) {
			cropper.bind(e.target.result)
		};
		reader.readAsDataURL(event.target.files[0]);
	}

	const onCropHandler = (event) => {
		event.preventDefault();
		cropper.toCanvas(300).then((canvas) => {
			const img = document.getElementById('image-result');
			img.removeAttribute('style');
			img.src = canvas.toDataURL('image/jpeg', 1);
			const base64 = canvas.toDataURL('image/jpeg', 1).replace(/^data:image\/(png|jpg|jpeg);base64,/, '')
			croppedImage = base64
		});
		
	}

	const onResetHandler = (event) => {
		event.preventDefault();
		cropper.refresh()
		const img = document.getElementById('image-result');
		img.setAttribute('style', 'display: none;');
	}

	const uploadToImgBB = async function (file) {
		try {
			let formData = new FormData();
					
			formData.append('image', file);
			formData.append('key', 'd8dc5b96ed210c8360b48acb0fa5ee32');
	
			const response = await fetch('https://api.imgbb.com/1/upload', {
					method: 'POST',
					// headers: {
					// 	'Content-Type': 'multipart/form-data',
					// },
					body: formData,
			})
			const result = await response.json();
			return result.data.url;
			
		} catch (error) {
			console.error(error);
			throw error
		}
	}



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
                <span
                  rel="noreferrer"
                >
                  <img
                    className="profile-avatar"
                    src={
                      user.avatar ||
                      `https://seccdn.libravatar.org/avatar/${user.mailMd5}?s=220&amp;r=X&amp;d=mm`
                    }
                  />
                </span>
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
											<div id="image-container-wrapper" style={{display: 'none'}}>
												<div id="image-container"></div>
												<button
													onClick={onCropHandler}
													type="button"
													className="btn primary"
												>
													Crop
												</button>
												<button
													onClick={onResetHandler}
													type="button"
													className="btn"
													style={{ marginLeft: '10px' }}
												>
													Reset
												</button>
											</div>
										</li>
                  </ul>

									<ul className="typecho-option">
										<li>
											<img id="image-result" src="" alt="" style={{display: 'none'}}/>
										</li>
									</ul>
                  
                  <ul className="typecho-option">
                    <li>
                      <label className="typecho-label" htmlFor="url-0-3">
											{t('change avatar')}
                      </label>
                      <input
                        id="url-0-3"
                        name="avatar"
                        type="file"
                        className="file"
												onChange={onChangeImageHandler}
												accept="image/*"
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
              
              
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
