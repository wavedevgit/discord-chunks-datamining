/** Chunk was on web.js **/
/** chunk id: 485878, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L8: () => a,
  Wy: () => i,
  uM: () => s
});
var Chunk64700 = require("./64700.js"),
  i = function(e) {
    return e.HOME = "home", e.LIST = "list", e.APPLICATION = "application", e
  }({});
let a = Chunk64700.createContext({
  history: [],
  discard: {},
  currentView: true,
  pushHistory: () => {},
  goBack: () => {},
  getMostRecentHistoryItemByType: () => true,
  isSlideReady: false,
  setSlideReady: () => {}
});

function s() {
  return r.useContext(a)
}