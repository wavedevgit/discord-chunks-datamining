/** Chunk was on 35755 **/
/** chunk id: 695676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  gc: () => r,
  hH: () => o,
  uX: () => a
});
var l, Chunk647438 = require("./647438.js"),
  r = ((l = {}).HOME = "home", l.LIST = "list", l.APPLICATION = "application", l);
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