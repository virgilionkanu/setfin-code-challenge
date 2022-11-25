import { Link, useLocation } from 'react-router-dom';

import '../style.scss';

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className='logo'>
        <a href="#void">SETFIN</a>
      </div>

      <div className='balance'>
        <p className='balance__text'>Saldo</p>
        <p className='balance__value'>R$ 100,00</p>
      </div>

      <div className="sidebar__items">
        <Link to="/faturar" className={location.pathname === '/faturar' ? 'sidebar_active' : ''}>Faturar</Link>
        <Link to="/pagar" className={location.pathname === '/pagar' ? 'sidebar_active' : ''}>Pagar</Link>
        <Link to="/financas" className={location.pathname === '/financas' ? 'sidebar_active' : ''}>Finanças</Link>
        <Link to="/clientes-e-fornecedores" className={location.pathname === '/clientes-e-fornecedores' ? 'sidebar_active' : ''}>Clientes e Fornecedores</Link>
        <Link to="/contabilidade-e-impostos" className={location.pathname === '/contabilidade-e-impostos' ? 'sidebar_active' : ''}>Contabilidade e Impostos</Link>
        <Link to="/orcamento" className={location.pathname === '/orcamento' ? 'sidebar_active' : ''}>Orçamento</Link>
        <Link to="/produto-e-servicos" className={location.pathname === '/produto-e-servicos' ? 'sidebar_active' : ''}>Produtos e Serviços</Link>
        <Link to="/suporte" className={location.pathname === '/suporte' ? 'sidebar_active' : ''}>Suporte</Link>
      </div>

      <div className="logout">
        <a href="#void">Sair</a>
      </div>
    </div>
  );
};
