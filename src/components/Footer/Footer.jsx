import React from 'react';
import { Container } from 'react-bootstrap';
import appInfo from '../../utils/Constantes'

const Footer = (props) => {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <span className="text-muted">Copyright &copy; 2020 - {appInfo.name} - versión {appInfo.ver}</span>
            </Container>
        </footer>
    );
}
export default Footer;