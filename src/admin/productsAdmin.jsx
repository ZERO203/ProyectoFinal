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
      setEditingId(null); // Salir del la edicion
      fetchProducts(); // Recargar productos después de la edición
      setNewProduct({ nameProduct: '', price: '', img: '', description: '' }); // Limpiar formulario
    } catch (error) {
      console.error("Error al editar producto:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos/${id}`);
      fetchProducts(); // Recargar productos después de la eliminación
      setNewProduct({ nameProduct: '', price: '', img: '', description: '' }); // Limpiar formulario
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-14 mx-auto min-h-screen ">
      <h2 className="text-center text-2xl font-bold mb-8 text-white">Administración de Productos</h2>
      <div className="flex flex-wrap container gap-2 mb-20 justify-center">
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:bg-gray-900 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Nombre del Producto"
          value={newProduct.nameProduct}
          onChange={(e) => setNewProduct({ ...newProduct, nameProduct: e.target.value })}
        />
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:bg-gray-900 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:bg-gray-900 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="Descripcion"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
        type="file"
        className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:bg-gray-900 focus:ring-2 focus:ring-green-600 text-base outline-none text-gray-100 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
        // Elimina la línea value={newProduct.img}
        onChange={(e) => {
          if (e.target.files.length > 0) {

            const file = e.target.files[0];
            const imgURL = URL.createObjectURL(file);

            // Actualiza tu estado aquí
            setNewProduct({ ...newProduct, img: imgURL });
          }
        }}
        />
        <button onClick={handleAddProduct} className=" text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded text-lg whitespace-nowrap overflow-hidden overflow-ellipsis">Agregar Producto</button>
      </div>
      <div className="container px-10 mx-auto min-w-screen flex flex-row font-bold text-white justify-around mb-6 ">
        <p className="border-b-green-600 border-b-4 w-36 text-center">PRODUCTOS</p>
        <p className="border-b-green-600 border-b-4 w-36 text-center">PRECIO</p>
        <p className="border-b-green-600 border-b-4 w-48 text-center">DESCRIPCION</p>
        <p className="border-b-green-600 border-b-4 w-36 text-center">IMAGENES</p>
        <p className="border-b-green-600 border-b-4 w-72 text-center">BOTONES EDITAR Y ELIMINAR</p>
      </div>
      {products.map((product) => (
        <div key={product.id} className="container px-5 mx-auto min-w-screen">
          
          {editingId === product.id ? (

            <div>
              
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
                type="file"
                className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => {

                  if (e.target.files && e.target.files[0]) {
                    const newImgURL = URL.createObjectURL(e.target.files[0]);
                    setNewProduct({ ...newProduct, img: newImgURL });
                  }
                }}
              />
              
              <button className=" ml-8 text-white bg-green-500 border-0 py-2 px-7 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => handleEditProduct(product.id)}>Guardar</button>
              
            </div>
            
          ) : (

                <div className="bg-gray-700 shadow-lg rounded-lg p-2 mb-4 ">

                    <div className="flex  justify-evenly h-auto flex-nowrap items-center	"> 

                        <p className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2  text-base outline-none text-gray-100 py-1 px-2 w-48 truncate leading-8 text-center">{product.nameProduct}</p>                      
                        <p className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2  text-base outline-none text-gray-100 py-1 px-2 w-40 truncate leading-8 text-center ">$ {product.price}</p> 
                        <p className="bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2  text-base outline-none text-gray-100 py-1 px-2 w-72 truncate leading-8 ">{product.description}</p>
                        <img className=" h-28 rounded-2xl w-36" src={product.img} alt={product.nameProduct} />   

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-40 py-2" onClick={() => { setEditingId(product.id); setNewProduct({ nameProduct: product.nameProduct, description: product.description, price: product.price, img: product.img }); }}>Editar</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded w-40 py-2" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>

                    </div>   

                </div>

          )}
          
        </div>
      ))}
    </div>
    </section>
  );
};

export default ProductAdmin;
