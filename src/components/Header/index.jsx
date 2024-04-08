import './index.css'
function Header(){

    return(
    <div className="header-menu">
        <nav>
            <ul className="lista-menu">
                <li>Adventure Trails</li>
                <div className="right-corner">
                    <li>Explorar Trilhas</li>
                    <li>Cadastrar Trilhas</li>
                </div>
                
            </ul>
        </nav>
        
    </div>
    )
}
export default Header;