/** Chunk was on web.js **/
/** chunk id: 695676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  gc: () => i,
  hH: () => a,
  uX: () => o
});
var Chunk73800 = require("./73800.js"),
  i = function(e) {
    return e.HOME = "home", e.LIST = "list", e.APPLICATION = "application", e
  }({});
let o = Chunk73800.createContext({
  history: [],
  discard: {},
  currentView: true,
  pushHistory: () => {},
  goBack: () => {},
  getMostRecentHistoryItemByType: () => true,
  isSlideReady: false,
  setSlideReady: () => {}
});

function a() {
  return Chunk73800.useContext(o)
}