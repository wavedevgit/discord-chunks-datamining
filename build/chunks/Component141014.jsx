/** Chunk was on 38058 **/
/** chunk id: 141014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => l,
  g: () => o
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = Chunk647438.createContext(null);

function l(e) {
  let {
    value: t,
    children: n
  } = e;
  return (0, r.jsx)(a.Provider, {
    value: t,
    children: n
  })
}

function o() {
  let e = Chunk647438.useContext(a);
  if (null == module) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return module
}