import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  createPokemon,
  getTypes,
  removeLoading,
  removeMsg,
} from "../../actions/pokemons";
import { Loading } from "../../components/loading/Loading";
import { validation } from "../../helpers/validar-form";
import "./nuevoPokemon.css";
export const NuevoPokemon = () => {
  const { typesPokemons } = useSelector((state) => state.pokemons);
  const { msgError, msg, loading } = useSelector((state) => state.ui);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(removeMsg());
  }, [dispatch]);

  useEffect(() => {
    dispatch(removeLoading());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
    img: "",
  });

  const handleInputChange = ({ target }) => {
    if (
      target.name === "attack" ||
      target.name === "hp" ||
      target.name === "defense" ||
      target.name === "speed" ||
      target.name === "height" ||
      target.name === "weight"
    ) {
      setInput({
        ...input,
        [target.name]: Number(target.value),
      });
    } else {
      setInput({
        ...input,
        [target.name]: target.value,
      });
    }
  };

  const handleSelect = ({ target }) => {
    setInput({
      ...input,
      types: [...input.types, target.value],
    });
  };

  const handleDeleteType = (type) => {
    setInput({
      ...input,
      types: input.types.filter((pokemonType) => pokemonType !== type),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    const formInvalid = validation(input);
    if (!formInvalid.valido) {
      return setErrors(formInvalid.errors);
    } else {
      dispatch(createPokemon(input));
      localStorage.clear();
      setInput({
        name: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: [],
        img: "",
      });
    }
  };

  return (
    <div className="formulario">
      <button className="btn-volver">
        <NavLink to="/home">Back</NavLink>
      </button>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <h3 className="title-new-pokemon">New Pokemon</h3>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            {errors.name && <span className="input-errors">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Hp</label>
            <input
              type="number"
              placeholder="HP"
              name="hp"
              onChange={handleInputChange}
              value={input.hp}
            />
            {errors.hp && <span className="input-errors">{errors.hp}</span>}
          </div>
          <div className="form-group">
            <label>Attack</label>
            <input
              type="number"
              placeholder="Attack"
              name="attack"
              onChange={handleInputChange}
              value={input.attack}
            />
            {errors.attack && (
              <span className="input-errors">{errors.attack}</span>
            )}
          </div>
          <div className="form-group">
            <label>Defense</label>
            <input
              type="number"
              placeholder="Defense"
              name="defense"
              onChange={handleInputChange}
              value={input.defense}
            />
            {errors.defense && (
              <span className="input-errors">{errors.defense}</span>
            )}
          </div>
          <div className="form-group">
            <label>Speed</label>
            <input
              type="number"
              placeholder="Speed"
              name="speed"
              onChange={handleInputChange}
              value={input.speed}
            />
            {errors.speed && (
              <span className="input-errors">{errors.speed}</span>
            )}
          </div>
          <div className="form-group">
            <label>Height</label>
            <input
              type="number"
              placeholder="Height"
              name="height"
              onChange={handleInputChange}
              value={input.height}
            />
            {errors.height && (
              <span className="input-errors">{errors.height}</span>
            )}
          </div>
          <div className="form-group">
            <label>Weight</label>
            <input
              type="number"
              placeholder="Weight"
              name="weight"
              value={input.weight}
              onChange={handleInputChange}
            />
            {errors.weight && (
              <span className="input-errors">{errors.weight}</span>
            )}
          </div>
          <div className="form-group">
            <label>Types</label>
            <select onChange={(e) => handleSelect(e)}>
              <option value="" hidden name="types">
                Select Type
              </option>
              {typesPokemons.map((type) => (
                <option value={type.name} key={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            {errors.types && (
              <span className="input-errors">{errors.types}</span>
            )}
          </div>
          <div className="form-group">
            <p className="msg-tipos-seleccionados">
              {input.types.length !== 0 && "Tipos Seleccionados:"}
            </p>
            {input.types.map((typeP) => (
              <div key={typeP} className="tipos-seleccionados">
                <h5>
                  {
                    typesPokemons.find((typePoke) => typePoke.name === typeP)
                      ?.name
                  }
                </h5>

                <span onClick={() => handleDeleteType(typeP)}>X</span>
              </div>
            ))}
          </div>
          <div className="form-group">
            <label>Img</label>
            <input
              type="url"
              placeholder="Img"
              name="img"
              onChange={handleInputChange}
              value={input.img}
            />
            {errors.img && <span className="input-errors">{errors.img}</span>}
          </div>
          <button type="submit">Add Pokemon</button>
          {msgError && <span className="error-new-pokemon">{msgError}</span>}
          {msg && <span className="msg-new-pokemon">{msg}</span>}
        </form>
      )}
    </div>
  );
};
