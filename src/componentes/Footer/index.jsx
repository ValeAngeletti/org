import './Footer.css'

const Footer = () => {
    return <footer className='footer' style={{backgroundImage: 'url(/img/footer.png)'}}>
        <div className='redes'>
            <a href='https://github.com/ValeAngeletti'>
                <img src='/img/github.png' alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/valentina-angeletti19'>
                <img src='/img/linkedin.png' alt='Linkedin' />
            </a>

        </div>
        <img src='/img/Logo.png' alt='org' className='logo'/>
        <strong>Desarrollado por Valentina Angeletti</strong>
    </footer>
}

export default Footer