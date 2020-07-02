import React, { useState, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAsync,
  filterAsync,
  selectValue,
  selectList,
  selectFullList,
  selectLoading,
  selectFilter,
  selectTotalEntries,
  selectTotalPages,
  selectCurrentPage,
  selectNEntries,
  selectCitiesList,
  fetchCitiesAsync,
  selectFilteredList,
  fetchFullList,
  setCurrentPage,
  updatePage
} from './citySlice';
import LoadingBtn from '../assets/LoadingBtn';
import styles from './City.module.css';

const RestaurantsList = React.lazy(() => import('../restaurants/RestaurantsList'));

export function City() {
  const dispatch = useDispatch();
  const filteredList = useSelector(selectFilteredList);
  const citiesList = useSelector(selectCitiesList);
  const nEntries = useSelector(selectNEntries);
  const currentPage = useSelector(selectCurrentPage);
  const loadingState = useSelector(selectLoading);
  const totalEntries = useSelector(selectTotalEntries);
  const totalPages = useSelector(selectTotalPages);
  const list = useSelector(selectList);
  const fullList = useSelector(selectFullList);
  const value = useSelector(selectValue);
  const filter = useSelector(selectFilter);
  const [searchObject, setSearchObject] = useState({
    city: value,
    filter,
    page: currentPage
  });
  const [cityValue, setCityValue] = useState(value);

  useEffect(() => {
    dispatch(fetchCitiesAsync())
  },[]) // should only run once on mount

  const handleInputChange = e => {
    e.preventDefault()
    setSearchObject({ ...searchObject, [e.target.id]: e.target.value } )
    e.target.id === 'city' &&
      setCityValue(e.target.value)
  }
  const searchCity = () => {
    // if (fullList.length > 0 && filter.length > 0) {
    //   dispatch(filterAsync(fullList, searchObject.filter))
    // } else {
    //   console.log('new search')
      dispatch(fetchAsync(searchObject))
    // }
  }
  const goToPage = (n) => {
    console.log({n})
    dispatch(setCurrentPage(n))
    if (filter.length > 0) {
      dispatch(updatePage(filteredList))
    } else {
      dispatch(fetchAsync({...searchObject, page: n}))
    }
  }

  const CitiesDataList = ({ id }) => {
    const list = citiesList.map((city, i) =>
      <option key={`c${i}`} value={city} />
    );
    return <datalist id={id}>{list}</datalist>
  }

  const Pagination = () => {
    const pages = totalPages;
    const pagesList = [...Array(pages).keys()]
    .filter(page => {
      const i1page = page + 1;
      const currentPageGreaterThanorLessThan2 =
        i1page <= currentPage + 1 &&
        i1page >= currentPage - 1;
      const currentPageLessThan5ShowUpTo6 =
        currentPage <= 2 &&
        i1page <= 4;
      const lessThanMaxShowUpTo6 =
        currentPage >= pages - 1 &&
        i1page >= pages - 3;
      return (
        page === 0 ||
        (currentPageGreaterThanorLessThan2 ||
          currentPageLessThan5ShowUpTo6 ||
          lessThanMaxShowUpTo6) ||
        page === pages - 1
      )
    })
    .map(page => {
      const pageClass = currentPage === page + 1 ? styles.current_page_btn : styles.page_btn;
      return (
        <button
          key={`p${page}`}
          className={pageClass}
          onClick={() => goToPage(page + 1)}
        >
          {((
              (page === pages - 1) &&
              (currentPage < pages - 1)
            ) ? '...' : '') +
          `${page + 1}` +
          ((page + 1 === 1) &&
          (currentPage > 3)
          ? '...' : '')}
        </button>
      )
    })
    return <ul className={styles.pages_list}>{ pagesList }</ul>
  }

  return (
    <>
      <p className={styles.searching_text}>
        <p>Search for restaurants in </p>
        <span className={styles.searching_city}>
          {
            searchObject.city.length > 0
            ? `${searchObject.city}.`
            : `...`
          }
        </span>

      </p>
      <div className={styles.search_fields}>
        <label className={styles.city_label} htmlFor="city">City</label>
        <input
          list="citiesList"
          className={styles.city_input}
          type="text"
          id="city"
          name="city"
          placeholder="ex. 'Toronto'"
          required
          onChange={handleInputChange}
        />
        <CitiesDataList id="citiesList" />
        <label className={styles.filter_label} htmlFor="filter">Filter</label>
        <input
          className={styles.filter_input}
          type="text"
          id="filter"
          name="filter"
          placeholder="ex. 'King St' or 'bar'"
          required
          onChange={handleInputChange}
        />
        <button
          className={styles.search_btn}
          onClick={searchCity}
          disabled={cityValue.length === 0 || loadingState !== 'idle'}
        >
        { loadingState === 'idle'
          ? `find`
          : <LoadingBtn />
        }
        </button>
      </div>
      { (list.length >= 0 && value && loadingState !== 'pending') &&
        <p>
          {`Showing ${(currentPage * nEntries) - (nEntries - 1)}` +
          `-${((currentPage - 1) * nEntries) + list.length} ` +
          `of ${totalEntries}`}
        </p>
      }
      { filter.length > 0 &&
        <p>{`Finding: '${filter}' / Found ${list.length}`} </p>
      }
      { list &&
        <>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            totalEntries={totalEntries}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantsList />
          </Suspense>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            totalEntries={totalEntries}
          />
        </>
      }
    </>
  );
}
