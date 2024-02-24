import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ nameProduct: '', price: '', img: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const result = await axios('https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos');
      setProducts(result.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      await axios.post('https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos', newProduct);
      fetchProducts(); // Recargar productos después de la adición
      setNewProduct({ nameProduct: '', price: '', img: '', description: '' }); // Limpiar formulario
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  const handleEditProduct = async (id) => {
    try {
      await axios.put(`https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos/${id}`, newProduct);
      setEditingId(null); // Salir del modo edición
      fetchProducts(); // Recargar productos después de la edición
    } catch (error) {
      console.error("Error al editar producto:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos/${id}`);
      fetchProducts(); // Recargar productos después de la eliminación
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-14 mx-auto  min-h-screen ">
      <h2 className="text-center text-2xl font-bold mb-8">Administración de Productos</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Nombre del Producto"
          value={newProduct.nameProduct}
          onChange={(e) => setNewProduct({ ...newProduct, nameProduct: e.target.value })}
        />
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Descripcion"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="text"
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Imagen URL"
          value={newProduct.img}
          onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
        />
        <button onClick={handleAddProduct} className=" ml-20 text-white bg-green-500 border-0 py-2 px-7 focus:outline-none hover:bg-green-600 rounded text-lg">Agregar Producto</button>
      </div>
      {products.map((product) => (
        <div key={product.id}>
          {editingId === product.id ? (
            <div className="flex gap-2 mb-4">
              <input
                className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                value={newProduct.nameProduct}
                onChange={(e) => setNewProduct({ ...newProduct, nameProduct: e.target.value })}
              />
              
              <input
                className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />

              <input
                className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />

              <input
                className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                type="text"
                value={newProduct.img}
                onChange={(e) => setNewProduct({ ...newProduct, img: e.target.value })}
              />
              
              <button className=" ml-8 text-white bg-green-500 border-0 py-2 px-7 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => handleEditProduct(product.id)}>Guardar</button>
            </div>
          ) : (
        // <div className="container mx-auto px-28" >
        //     <div className="container ">

                <div className="bg-gray-700 shadow-lg rounded-lg p-2 flex flex-row justify-between mb-4">

                    <div className="flex justify-between items-center w-96">
                        <span  className=" text-base font-bold ">{product.nameProduct}</span>   

                        <span className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2  text-base outline-none text-gray-100 py-1 px-12 w-32 leading-8 ">${product.price}</span>      
                    </div>

                <div className="flex justify-between items-center">

                    <span className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2  text-base outline-none text-gray-100 py-1 px-2 w-52 truncate leading-8 mr-72">{product.description}</span>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6" onClick={() => { setEditingId(product.id); setNewProduct({ nameProduct: product.nameProduct, description: product.description, price: product.price, img: product.img }); }}>Editar</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-6" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                </div>
                </div>

        //     </div>
        // </div>
          )}
          
        </div>
      ))}
    </div>
    </section>
  );
};

export default ProductAdmin;
