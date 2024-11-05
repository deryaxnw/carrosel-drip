import React, { useState } from 'react';
import "./filter.css"

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


  const genero = [
    {name: 'masculino', label:'Masculino'},
    {name: 'feminino', label:'Feminino'},
    {name: 'unisex', label: 'Unisex'}
  ]

  const estado = [
    {name: 'novo', label: 'Novo'},
    {name: 'Usado', label: 'Usado'}
  ]


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


const [selectedGenero, setSelectedGenero] = useState(
  genero.reduce((acc) => {
    acc[genero.name] = false;
    return acc;
  }, {})
)

const [selectedEstado, setSelectedEstado] = useState(
  estado.reduce((acc) => {
    acc[estado.name] = false;
    return acc;
  }, {})
)

  const handleCheckboxChange = (event, setFunction) => {
    const { name, checked } = event.target;
    setFunction((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleRadioChange = (event) => {
    const { name } = event.target;
    setSelectedEstado({
      novo: true,
      usado: false,
      [name]: false,
    });
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
                checked={!!selectedMarkas[marka.name]}
                onChange={(e) => {handleCheckboxChange(e, setSelectedMarkas)}}
                
              />
              {marka.label}
            </label>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: 'black' }}>
      <h3>Categoria</h3>
      {categoria.map((categ) => (
          <div key={categ.name}>
            <label>
              <input
                type="checkbox"
                name={categ.name}
                checked={!!selectedCategoria[categ.name]}
                onChange={(e) => {handleCheckboxChange(e, setSelectedCategoria)}}
                 
              />
              {categ.label}
            </label>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: 'black' }}>
      <h3>Gênero</h3>
      {genero.map((gene) => (
          <div key={gene.name}>
            <label>
              <input
                type="checkbox"
                name={gene.name}
                checked={!!selectedGenero[gene.name]}
                onChange={(e) => {handleCheckboxChange(e, setSelectedGenero)}}
                
              />
              {gene.label}
            </label>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px', color: 'black' }}>
      <h3>Estado</h3>
      {estado.map((estad) => (
          <div key={estad.name}>
            <label>
              <input
                type="radio"
                name="estado"
                value={estad.name}
                checked={!!selectedEstado[estad.name] || true}
                onChange={handleRadioChange}
                 
              />
              {estad.label}
            </label>
          </div>
        ))}
      </div>
    </aside>
    
  );
}

export default FilterAside;
