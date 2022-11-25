import { useForm } from 'react-hook-form';

import '../style.scss';

export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="first__row">
          <label>
            Fornecedor <br />
            <input type="text" name="supplier" placeholder='Setfin Tecnologia' />
          </label>

          <label>
            CNPJ <br />
            <input type="text" name="cnpj" placeholder='43.539.060/0001-90' />
          </label>

          <label>
            Valor a pagar <br />
            <input type="text" name="amount-payable" placeholder='R$ 1.000,00' />
          </label>
        </div>

        <div className='second__row'>
          <label>
            Esse pagamento é parcelado? <br />
            <input type="range" max="1" name="isParcel" />
          </label>
        </div>

        <div className="third__row">
          <label>
            Parcelas <br />
            <input type="text" name="parcel" placeholder='4 X' />
          </label>

          <label>
            Parcela 1 <br />
            <input type="text" name="parcel-one" placeholder='R$ 250,00' />
          </label>

          <label>
            Vencimento parcela <br />
            <input type="text" name="due-date-one" placeholder='30/11/2022' />
          </label>

          <label>
            Parcela 2 <br />
            <input type="text" name="parcel-two" placeholder='R$ 250,00' />
          </label>

          <label>
            Vencimento parcela <br />
            <input type="text" name="due-date-two" placeholder='30/12/2022' />
          </label>

          <label>
            Parcela 3 <br />
            <input type="text" name="parcel-three" placeholder='R$ 250,00' />
          </label>

          <label>
            Vencimento parcela <br />
            <input type="text" name="due-date-three" placeholder='30/01/2023' />
          </label>

          <label>
            Parcela 4 <br />
            <input type="text" name="parcel-four" placeholder='R$ 250,00' />
          </label>

          <label>
            Vencimento parcela <br />
            <input type="text" name="due-date-four" placeholder='28/02/2023' />
          </label>
        </div>

        <div className="fourth__row">
          <label>
            Forma de pagamento <br />

            <div className="select">
              <select id="payment-methods" name="payment-methods">
                <option selected value="bank-account-transfer">Transferência bancária</option>
                <option value="boleto">Boleto</option>
                <option value="cartao-credito">Cartão de crédito</option>
              </select>
            </div>
          </label>

          <label>
            Classificação <br />

            <div className="select">
              <select id="classification"  name="classification">
                <option selected value="suppliers">Pagamento de fornecedores</option>
                <option value="others">Outros</option>
              </select>
            </div>
          </label>

          <label>
            Observações <br />

            <input type="text" name="observation" 
              placeholder='Valores referente a compra de produtos capilar' 
            />
          </label>
        </div>

        <div className='btn'>
          <button type="submit">Incluir contas a pagar</button>
        </div>

      </form>
    </div>
  );
};