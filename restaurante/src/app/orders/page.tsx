export default function OrdersPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Pedido ID</th>
            <th>Data</th>
            <th>Preço</th>
            <th className="hidden md:block">Produtos</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1233445</td>
            <td className="py-6 px-1">06/09/2023</td>
            <td className="py-6 px-1">R$ 89,90</td>
            <td className="hidden md:block py-6 px-1">
              Menu Big Burger (2), Pizza Vegetariana (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">No caminho (aprox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1233445</td>
            <td className="py-6 px-1">06/09/2023</td>
            <td className="py-6 px-1">R$ 89,90</td>
            <td className="hidden md:block py-6 px-1">
              Menu Big Burger (2), Pizza Vegetariana (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">No caminho (aprox. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1233445</td>
            <td className="py-6 px-1">06/09/2023</td>
            <td className="py-6 px-1">R$ 89,90</td>
            <td className="hidden md:block py-6 px-1">
              Menu Big Burger (2), Pizza Vegetariana (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">No caminho (aprox. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
