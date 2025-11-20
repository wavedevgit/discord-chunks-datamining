/** Chunk was on 44097 **/
/** chunk id: 141014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => l,
  g: () => o
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(null);

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
  let e = Chunk473749.useContext(a);
  if (null == module) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return module
}