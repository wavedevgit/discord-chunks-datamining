/** Chunk was on 81162 **/
/** chunk id: 361117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => l
}), require("./388685.js"), require("./457542.js");
var Chunk399606 = require("./399606.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493773 = require("./493773.js"),
  Chunk986197 = require("./986197.js"),
  Chunk135200 = require("./135200.js");
let l = e => {
  let [t, n] = (0, r.Wu)([s.Z], () => [s.Z.usernameSuggestion(), s.Z.usernameSuggestionLoading()]);
  return (0, a.ZP)(() => (s.Z.wasSuggestionsFetched() ? i.Z.dispatch({
    type: "POMELO_SUGGESTIONS_FETCH",
    usernameSuggestionLoading: false
  }) : o.Z.fetchSuggestions(e).finally(() => {
    i.Z.dispatch({
      type: "POMELO_SUGGESTIONS_FETCH",
      usernameSuggestionLoading: false
    })
  }), () => {
    o.Z.resetSuggestions()
  })), {
    usernameSuggestion: t,
    usernameSuggestionLoading: n
  }
}