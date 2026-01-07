/** Chunk was on web.js **/
/** chunk id: 695676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  gc: () => i,
  hH: () => o,
  uX: () => a
});
var Chunk473749 = require("./473749.js"),
  i = function(e) {
    return e.HOME = "home", e.LIST = "list", e.APPLICATION = "application", e
  }({});
let a = Chunk473749.createContext({
  history: [],
  discard: {},
  currentView: true,
  pushHistory: () => {},
  goBack: () => {},
  getMostRecentHistoryItemByType: () => true,
  isSlideReady: false,
  setSlideReady: () => {}
});

function o() {
  return r.useContext(a)
}