import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealDetail from './pages/MealDetail'; 
import { FetchMealByFirstLetter, FetchMealById, SearchMealByName } from './services/mealtService'; 

function App() {
  const [letter, setLetter] = useState('b');
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await FetchMealByFirstLetter();
      setMeals(data);
    };

    fetchMeals();
  }, []);

  const handleMealClick = async (meal) => {
    const recipe = await FetchMealById(meal.idMeal);
    setSelectedMeal(recipe);
  };

  const handleBackToHome = () => {
    setSelectedMeal(null);
  };

  const handleSearch = async (searchTerm) => {
    const searchedMeals = await SearchMealByName(searchTerm);

    if (searchedMeals && searchedMeals.length > 0) {
      const firstSearchedMeal = searchedMeals[0];
      setSelectedMeal(firstSearchedMeal);

      setSearchTerm(searchTerm);
    } else {
      alert('No se encontraron resultados para la búsqueda');
    }
  };

  const handleSearchButtonClick = () => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      alert('Por favor, ingresa un término de búsqueda.');
    }
  };

  return (
    <div className="App">
      <Navbar>
        <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
      </Navbar>
      {selectedMeal ? (
        <MealDetail meal={selectedMeal} onBackClick={handleBackToHome} />
      ) : (
        <Home meals={meals} onMealClick={handleMealClick} />
      )}
    </div>
  );
}

export default App;


