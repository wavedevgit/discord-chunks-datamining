/** Chunk was on 35755 **/
/** chunk id: 695676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  gc: () => r,
  hH: () => o,
  uX: () => a
});
var l, Chunk73800 = require("./73800.js"),
  r = ((l = {}).HOME = "home", l.LIST = "list", l.APPLICATION = "application", l);
let a = Chunk73800.createContext({
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
  return Chunk73800.useContext(a)
}