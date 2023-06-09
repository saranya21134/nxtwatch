import {Link} from 'react-router-dom'
import {BsMoon} from 'react-icon/bs'
import {FiSun} from 'react-icon/fi'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import Popup from 'reactjs-popup'
import './index.css'
import {
  ModalContainer,
  AlignColumn,
  ModalDesc,
  AlignRow,
  CloseButton,
  ConfirmButton,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme, onChangeTheme} = value

        const onClickChangeTheme = () => {
          onChangeTheme()
        }

        const bgColor = isDarkTheme ? 'dark' : 'light'
        const textColor = isDarkTheme ? 'textDark' : 'textLight'
        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <nav className={bgColor}>
            <div className="nav-container">
              <div className="website-image">
                <Link className="route-link" to="/">
                  <img
                    src={websiteLogo}
                    className="login-website-logo-desktop-image"
                    alt="website logo"
                  />
                </Link>
              </div>
              <ul className="un-ordered-list">
                <li className="list-item">
                  <button
                    type="button"
                    onClick={onClickChangeTheme}
                    data-testid="theme"
                  >
                    {isDarkTheme ? <BsMoon /> : <FiSun />}
                  </button>
                </li>
                <li className="list-item">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    className="profile-image"
                    alt="profile"
                  />
                </li>
                <li className="list-item">
                  <Popup
                    modal
                    trigger={
                      <LogoutButton type="button" data-testid="iconButton">
                        Logout
                      </LogoutButton>
                    }
                    className="popup"
                  >
                    {close => (
                      <ModalContainer>
                        <AlignColumn>
                          <ModalDesc>
                            Are you sure, you want to logout?
                          </ModalDesc>
                          <AlignRow>
                            <CloseButton
                              type="button"
                              data-testid="closeButton"
                              onClick={() => close()}
                            >
                              Cancel
                            </CloseButton>

                            <ConfirmButton
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </AlignRow>
                        </AlignColumn>
                      </ModalContainer>
                    )}
                  </Popup>
                </li>
              </ul>
            </div>
          </nav>
        )
      }}
    </CartContext.Consumer>
  )
}
export default Header
