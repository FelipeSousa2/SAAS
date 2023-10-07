"use client";

import { useSession } from "next-auth/react";



const AddPage = () => {
    const {} = useSession()

  return (
    <div>
      <form>
        <h1>Adicionar Novo Produto</h1>
        <div>
          <label>Título</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Descrição</label>
          <textarea  name="desc" />
        </div>
        <div>
          <label>Preço</label>
          <input type="numebr" name="price" />
        </div>
        <div>
          <label>Categoria</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Opções</label>
          <div>
            <input type="text" placeholder="Título" name="title" />
            <input type="number" placeholder="Preço Adicional" name="additionalPrice" />
          </div>
          <button>Adicionar opção</button>
        </div>
        <div>
            <div>
                <span>Pequena</span>
                <span>R$ 2</span>
            </div>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
