export const initialState = {
  user: null,
  playlists: null,
  playing: null,
  item: null,
  token:
    "BQC4zXXQy9t8CE9Gc3OzQWJKiWuq8sXLfsd4L5tUfqKetq5ICulwZB4sj0MiKGiCjwrB0TH_84_oM_QiVGYMKrugHjY93KJyCE9Agpanfln3ChIaaQCGcwRchjnLDHNqqweU47BxhAXbcgeWnFue-eYRkM01NzCgU1212lvL-qiqCM__S_aKGi8c4aVVJURtizlpqDIRJtXUIugsVPJM",
  token: "",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
