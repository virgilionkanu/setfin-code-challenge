import { Routes, Route, Navigate } from 'react-router-dom';

import { InnerContent } from "./pages/inner-content/components";
import { Bill } from './pages/bill/components';
import { Invoice } from './pages/invoice/components';
import { Finance } from './pages/finance/components';
import { CustomerSupplier } from './pages/customer-supplier/components';
import { AccountingTaxe } from './pages/accounting-taxe/components';
import { Budget } from './pages/budget/components';
import { ProductService } from './pages/product-service/components';
import { Support } from './pages/support/components';

export const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="pagar"/>} />
      <Route path="faturar" element={<Invoice />} />
      <Route path="pagar" element={<Bill />} />
      <Route path="financas" element={<Finance />} />
      <Route path="clientes-e-fornecedores" element={<CustomerSupplier />} />
      <Route path="contabilidade-e-impostos" element={<AccountingTaxe />} />
      <Route path="orcamento" element={<Budget />} />
      <Route path="produto-e-servicos" element={<ProductService />} />
      <Route path="suporte" element={<Support />} />
    </Route>
  </Routes>
);