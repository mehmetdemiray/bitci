import { COUNT, INPAGE, ACTIVE_PAGE, MARGIN, MARGINH, MAX_CARD_WIDTH, DEVICE_TYPE, DIRECTION, SEARCH, LOADING} from './../types';

const initialState = {
    searchText: "beautiful landscape",
    count: 0,
    inPage: 4,
    activePage: 0,
    margin: 10,
    marginH: 0,
    maxCardWidth: 0,
    deviceType: "desktop",
    direction: 0,
    loading: false
};

export default function(state= initialState, action) {
  switch(action.type) {
    case COUNT:
      return { ...state, count:action.payload };
    case INPAGE:
        return { ...state, inPage:action.payload};
    case ACTIVE_PAGE:
        return { ...state, activePage:action.payload };
    case MARGIN:
        return { ...state, margin:action.payload };
    case MARGINH:
        return { ...state, marginH:action.payload };
    case MAX_CARD_WIDTH:
        return { ...state, maxCardWidth:action.payload };
    case DEVICE_TYPE:
        return { ...state, deviceType:action.payload };
    case DIRECTION:
      return { ...state, direction:action.payload };
    case SEARCH:
      return { ...state, searchText:action.payload };
    case LOADING:
      return { ...state, loading:action.payload };
    default:
  }
  return state;
}