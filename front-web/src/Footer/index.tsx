import './styles.css';
import { ReactComponent as Logo} from './logo.svg'
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as LinkedinIcon} from './linkedin.svg';
import { ReactComponent as GithubIcon} from './github.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento DevSuperior 2021
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/henriquenawa" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/HenriqueNawa" target="_new">
                    <GithubIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;