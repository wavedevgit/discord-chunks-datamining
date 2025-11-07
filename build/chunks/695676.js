/** Chunk was on web.js **/
/** chunk id: 695676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  gc: () => i,
  hH: () => o,
  uX: () => a
});
var Chunk647438 = require("./647438.js"),
  i = function(e) {
    return e.HOME = "home", e.LIST = "list", e.APPLICATION = "application", e
  }({});
let a = Chunk647438.createContext({
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
  return Chunk647438.useContext(a)
}