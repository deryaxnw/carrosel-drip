import React, { useState } from 'react';

function FilterAside() {
  const marka = [
    { name: 'adidas', label: 'Adidas' },
    { name: 'calenciaga', label: 'Calenciaga' },
    { name: 'k-swiss', label: 'K-Swiss' },
    { name: 'nike', label: 'Nike' },
    { name: 'puma', label: 'Puma' },
    
  ];

  const categoria = [
    {name: 'esporte e lazer', label: 'Esporte e lazer'},
    {name: 'casual', label: 'Casual'},
    {name: 'utilitário', label: 'Utilitário'},
    {name: 'corrida', label: 'Corrida'}
  ];

  const [selectedMarkas, setSelectedMarkas] = useState(
    marka.reduce((acc) => {
      acc[marka.name] = false;
      return acc;
    }, {})
  );

  const [selectedCategoria, setSelectedCategoria] = useState(
    categoria.reduce((acc) => {
      acc[categoria.name] = false;
      return acc;
    }, {})
  );

  // Função para manipular o clique em cada checkbox
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedBrands((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <aside style={{ padding: '20px', border: '1px solid #ccc', width: '200px' }}>
      <h2>Filtrar</h2>
      <hr />
      <div>
        <h3>Marca</h3>
        {marka.map((marka) => (
          <div key={marka.name}>
            <label>
              <input
                type="checkbox"
                name={marka.name}
                checked={selectedMarkas[marka.name]}
                onChange={handleCheckboxChange}
              />
              {marka.label}
            </label>
          </div>
        ))}
      </div>
      {/* Nova div adicionada dentro do aside */}
      <div style={{ marginTop: '20px', color: 'black' }}>
      {categoria.map((categ) => (
          <div key={categ.name}>
            <label>
              <input
                type="checkbox"
                name={categ.name}
                checked={selectedCategoria[categ.name]}
                onChange={handleCheckboxChange}
              />
              {categ.label}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default FilterAside;
