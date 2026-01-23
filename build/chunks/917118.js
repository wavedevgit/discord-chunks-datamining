/** Chunk was on 54160 **/
/** chunk id: 917118, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  G: () => l
}), require("./896048.js"), require("./492834.js");
var Chunk417597 = require("./417597.js"),
  Chunk73153 = require("./73153.js"),
  Chunk964486 = require("./964486.js"),
  Chunk32120 = require("./32120.js"),
  Chunk574454 = require("./574454.js");
let l = e => {
  let [t, r] = (0, n.yK)([o.A], () => [o.A.usernameSuggestion(), o.A.usernameSuggestionLoading()]);
  return (0, a.Ay)(() => (o.A.wasSuggestionsFetched() ? i.h.dispatch({
    type: "POMELO_SUGGESTIONS_FETCH",
    usernameSuggestionLoading: false
  }) : s.A.fetchSuggestions(e).finally(() => {
    i.h.dispatch({
      type: "POMELO_SUGGESTIONS_FETCH",
      usernameSuggestionLoading: false
    })
  }), () => {
    s.A.resetSuggestions()
  })), {
    usernameSuggestion: t,
    usernameSuggestionLoading: r
  }
}