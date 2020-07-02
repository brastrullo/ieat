import { createSlice } from '@reduxjs/toolkit';
export const citySlice = createSlice({
  name: 'city',
  initialState: {
    loading: 'idle',
    simpleList: [],
    fullList: [],
    filteredList: [],
    list: [],
    citiesList: [],
    nEntries: 25,
    currentPage: 1,
    totalPages: 0,
    totalEntries:0,
    value: '',
    filter: ''
  },
  reducers: {
    loading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    listReceived: (state, action) => {
      console.log('oldlist', action.payload);
      const list = action.payload;
      if (state.loading === 'pending') {
        state.loading = 'idle';
        if (state.filter.length > 0) {
          const n = state.nEntries;
          const p = state.currentPage;
          const min = (p * n) - (n);
          const max = ((p - 1) * n) + n + 1;
          const newList = list.slice(min, max)
          console.log({newList})
          state.list = newList
        } else {
          state.list = list
        }

      }
    },
    setCitiesList: (state, action) => {
      state.citiesList = action.payload;
    },
    clearLists: (state, action) => {
      state.list = [];
      state.simpleList = [];
      state.fullList = [];
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setNEntries: (state, action) => {
      state.nEntries = action.payload;
    },
    setCityVal: (state, action) => {
      state.value = action.payload;
    },
    setFilterVal: (state, action) => {
      state.filter = action.payload;
    },
    setSimpleList: (state, action) => {
      state.simpleList += action.payload;
    },
    setFullList: (state, action) => {
      state.fullList += action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
    setCurrentPage: (state, action) => {
      console.log(action.payload)
      state.currentPage = action.payload;
    },
    setTotalEntries: (state, action) => {
      state.totalEntries = action.payload;
    }
  },
});

export const {
  loading,
  setCityVal,
  setFilterVal,
  fetchList,
  listReceived,
  setCitiesList,
  setSimpleList,
  setFullList,
  setFilteredList,
  filterLists,
  setCurrentPage,
  setTotalEntries,
  setTotalPages,
  setNEntries,
  clearLists
 } = citySlice.actions;

export const updatePage = (list) => dispatch => {
  dispatch(loading());
  dispatch(listReceived(list));
}

export const fetchCitiesAsync = () => async dispatch => {
  const url = `https://opentable.herokuapp.com/api/cities`;
  const cities = async () => {
    try {
      const getData = await fetch(`${url}`);
      const res = await getData.json();
      const data = await res.cities;
      return await data;
    } catch(err) {
      alert(err)
    }
  }
  const res = await cities();
  dispatch(setCitiesList(res));
}

export const fetchFullList = (obj) => async dispatch => {
  dispatch(setTotalPages(obj.totalPages));
  const pageArr = [...Array(obj.totalPages).keys()].map(n => n + 1);
  const fullList = async () => {
    let arr = [];
    for (const i of pageArr) {
      const url = `https://opentable.herokuapp.com/api/restaurants`;
      const getList = async () => {
        try {
          const getData = await fetch(`${url}?city=${obj.city};page=${i}`)
          const res = await getData.json();
          const data = await res.restaurants;
          return await data;
        } catch(err) {
          alert(err)
        }
      }
      const r = await getList();
      arr = arr.concat(r)
    }
    return await arr
  }
  const listLoaded = await fullList();
  dispatch(setFullList(listLoaded));
  if (obj.filter.length > 0) {
    dispatch(filterAsync(listLoaded, obj));
  }
}

export const fetchAsync = obj => async dispatch => {
  dispatch(loading());
  dispatch(setCityVal(obj.city));
  dispatch(setFilterVal(obj.filter));
  const url = `https://opentable.herokuapp.com/api/restaurants`;
  const data = async () => {
    try {
      const getData = await fetch(`${url}?city=${obj.city};page=${obj.page}`);
      const res = await getData.json();
      const total = res.total_entries;
      const perPage = res.per_page;
      const totalPages = Math.ceil(total / perPage)
      dispatch(setTotalPages(totalPages))
      dispatch(setCurrentPage(res.current_page))
      dispatch(setTotalEntries(total))
      if (obj.page === 1) {
        dispatch(fetchFullList({...obj, totalPages, perPage}))
      }
      const data = await res;
      return await data;
    } catch(err) {
      alert(err)
    }
  }
  const res = await data();
  const restaurants = res.restaurants;
  const simpleList = restaurants.map(
    ({name, address, area}) => ({ name, address, area })
  );
  console.log({res, restaurants})
  dispatch(setSimpleList(simpleList));
  // const totalPages = Math.ceil(res.total_entries / res.per_page);
  const totalEntries = res.total_entries;
  if (obj.filter.length === 0) {
    dispatch(clearLists())
    // dispatch(fetchFullList({...obj, totalPages, perPage: res.per_page}))
    dispatch(filterAsync(restaurants, {...obj, perPage: res.per_page, totalEntries }));
  }
};

export const filterAsync = (list, obj) => async dispatch => {
  console.log({obj})
  const unique = Array.from(new Set(list.map(JSON.stringify))).map(JSON.parse);
  const filtered = unique.filter(({
    name,
    address,
    area
  }) => {
    const arr = [name, address, area];
    const s = obj.filter.replace(/\s/g, ' ').toLowerCase();
    return arr.some(n => n.replace(/\s/g, ' ').toLowerCase().indexOf(s) !== -1)
  })
  const n = obj.perPage
  const totalEntries =
    obj.filter.length > 0
    ? filtered.length
    :  obj.totalEntries;
    console.log({totalEntries})
  const totalPages = Math.ceil(totalEntries / n);
  dispatch(setTotalPages(totalPages));
  dispatch(setTotalEntries(totalEntries));
  dispatch(setFilteredList(filtered));
  dispatch(listReceived(filtered));
}

export const selectLoading = state => state.city.loading;
export const selectValue = state => state.city.value;
export const selectFilter = state => state.city.filter;
export const selectList = state => state.city.list;
export const selectFullList = state => state.city.fullList;
export const selectFilteredList = state => state.city.filteredList;
export const selectTotalEntries = state => state.city.totalEntries;
export const selectTotalPages = state => state.city.totalPages;
export const selectCurrentPage = state => state.city.currentPage;
export const selectNEntries = state => state.city.nEntries;
export const selectCitiesList = state => state.city.citiesList;


export default citySlice.reducer;
