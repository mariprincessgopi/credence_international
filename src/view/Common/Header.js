import { styles } from '../../assets/css/styles';
import LogoHalf from '../../assets/images/logoHalf.png';

export default function Header() {
    const onProductPress = () => {

    };

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light' style={styles.backgroundLightBlue}>
                <div className='container-fluid'>
                    <img src={LogoHalf} className='card-img-top' alt='Not Found' style={styles.headerImage} />
                    {/* <a className='navbar-brand' href='#'>Navbar</a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button> */}
                    <div className='collapse navbar-collapse d-flex justify-content-end'>
                        <ul className='navbar-nav mb-2 mb-lg-0 p-2'>
                            <li className='nav-item'>
                                <button type='button' className='btn btn-link nav-link active' onClick={() => onProductPress()}>Product</button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn btn-link nav-link active' onClick={() => onProductPress()}>Contact us</button>
                            </li>
                            <li className='nav-item'>
                                <button type='button' className='btn btn-link nav-link active' onClick={() => onProductPress()}>Add User</button>
                            </li>
                            {/* <li className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Dropdown
                                </a>
                                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <li><a className='dropdown-item' href='#'>Action</a></li>
                                    <li><a className='dropdown-item' href='#'>Another action</a></li>
                                    <li><hr className='dropdown-divider' /></li>
                                    <li><a className='dropdown-item' href='#'>Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        {/* <form className='d-flex'>
                            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                            <button className='btn btn-outline-success' type='submit'>Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
