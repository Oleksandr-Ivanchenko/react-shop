import { useEffect } from 'react';
import "./SearchBar.scss";
import { Paper, Slider, Typography } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Filters } from "../../utils/interface";
import { getCategoriesSelector, getFilters } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setCategoriesAction, setFiltersAction } from "../../store/actions";
import { getCategories } from "../../api/api";


const sortOptions = [
  {
    "key": "alpASC",
    "name": "Alphabet order A-Z"
  },
  {
    "key": "alpDESC",
    "name": "In Alphabet order Z-A"
  },
  {
    "key": "priceASC",
    "name": "Price from Low to Hight"
  },
  {
    "key": "priceDESC",
    "name": "Price from Hight to Low"
  },
]

export const SearchBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const filters: Filters = useSelector(getFilters);

  useEffect(() => { 
    getCategories().then(categoriesFromServer => {
      dispatch(setCategoriesAction(categoriesFromServer));
    })
  }, [dispatch]);

  const valuetext = (value: number) => {
    return `${value}USD`;
  } 

  const handleChange = (e: any, field: string) => {
    dispatch(
      setFiltersAction({ 
        ...filters,
        [field]: e.target.value 
      })
    );
  };

  return (
    <Paper elevation={3} className="search">
      <Typography variant="h5">
        Make your choice
      </Typography>
      <div className="search__inputs">
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.category}
            label="Category"
            onChange={(e) => handleChange(e, "category")}
          >
            {categories.map((category) => (
              <MenuItem
                key={category.key}
                value={category.key}
              >
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 200 }}>
          <Typography id="non-linear-slider" gutterBottom>
            Price Range
          </Typography>
          <Slider
            min={0}
            max={1000}
            getAriaLabel={() => "Price range"}
            value={filters.price}
            onChange={(e) => handleChange(e, "price")}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filters.sort}
            label="Sort by"
            onChange={(e) => handleChange(e, "sort")}
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.key} value={option.key}>{option.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  )
};