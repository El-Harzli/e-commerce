import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { my_products } from "../Assets/all_product";
import SearchedItem from "../SearchedItem/SearchedItem";

function SearchBar({ isSearchbarMenuActive, setIsSearchbarMenuActive }) {
  const [isSearchBarEmpty, setIsSearchBarEmpty] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("Menswear");
  const underlineRef = useRef(null);
  const mySearchInput = useRef(null);

  const [searchHistory, setSearchHistory] = useState([]);
  const handleSubmitSearch = () => {
    setSearchHistory((prev) => [...prev, searchValue]);
  };

  const handleOnSearchInputChange = (e) => {
    setIsSearchBarEmpty(e.target.value.trim() === "");
    setSearchValue(e.target.value);
  };

  const onClearHandler = () => {
    setSearchValue("");
    setIsSearchBarEmpty(true);
  };

  const handleChangeCategoryResult = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const activeItem = document.querySelector(".category-result-item.active");
    if (activeItem && underlineRef.current) {
      const { offsetLeft, clientWidth } = activeItem;
      underlineRef.current.style.width = `${clientWidth}px`;
      underlineRef.current.style.left = `${offsetLeft}px`;
    }
  }, [activeCategory]);

  useEffect(() => {
    if (isSearchbarMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSearchbarMenuActive]);

  useEffect(() => {
    function setDynamicHeight() {
      const vh = window.innerHeight * 0.01; 
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  
    setDynamicHeight();
  
    // Recalculate the height on resize (e.g., when the user scrolls or rotates the screen)
    window.addEventListener('resize', setDynamicHeight);
    
    // Focus the input field when the component mounts
    if (mySearchInput.current) {
      mySearchInput.current.focus();
    }
  
    return () => window.removeEventListener('resize', setDynamicHeight);
  }, []); // Empty dependency array to run only once on mount

  const handleSearchInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmitSearch();
    }
  };

  return (
    <div className={`search-bar ${isSearchbarMenuActive ? "active" : ""}`}>
      <div className="search-container">
        <div className="search-input-field">
          <i onClick={handleSubmitSearch} className={`bx bx-search ${isSearchBarEmpty ? "" : "active"}`}></i>
          <input
            ref={mySearchInput}
            onKeyDown={handleSearchInputKeyDown}
            value={searchValue}
            onChange={handleOnSearchInputChange}
            type="text"
            placeholder={`Search ${activeCategory}`}
          />
          <i
            onClick={onClearHandler}
            className={`bx bx-x ${isSearchBarEmpty ? "" : "active"}`}
          ></i>
        </div>
        <div className="btn-cancel">
          <button onClick={() => setIsSearchbarMenuActive(false)}>
            Cancel
          </button>
        </div>
      </div>
      <div className="search-result">
        <div className="search-result-category">
          <ul className="category-result-items">
            <li
              onClick={() => handleChangeCategoryResult("Womenswear")}
              className={`category-result-item ${activeCategory === "Womenswear" ? "active" : ""}`}
            >
              WOMENSWEAR
            </li>
            <li
              onClick={() => handleChangeCategoryResult("Menswear")}
              className={`category-result-item ${activeCategory === "Menswear" ? "active" : ""}`}
            >
              MENSWEAR
            </li>
            <li
              onClick={() => handleChangeCategoryResult("Kidswear")}
              className={`category-result-item ${activeCategory === "Kidswear" ? "active" : ""}`}
            >
              KIDSWEAR
            </li>
            <div ref={underlineRef} className="underline"></div>
          </ul>
        </div>

        <div className="search-result-value">
          {searchValue.length === 0 ? (
            searchHistory.length === 0 ? (
              <div>No recent searches</div>
            ) : (
              searchHistory.map((currentSearch, index) => (
                <div key={index} className="mb-3">{currentSearch}</div>
              ))
            )
          ) : null}

          {searchValue.length > 0 && searchValue.length < 3 && <div></div>}
          {searchValue.length >= 3 && (
            <div>
              {my_products
                .filter(
                  (product) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
                    product.brand.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((filteredProduct) => (
                  <SearchedItem className="mb-3" product={filteredProduct} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
