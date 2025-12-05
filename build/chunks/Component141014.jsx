/** Chunk was on 77443 **/
/** chunk id: 141014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => a,
  g: () => o
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let l = Chunk473749.createContext(null);

function a(e) {
  let {
    value: t,
    children: n
  } = e;
  return (0, r.jsx)(l.Provider, {
    value: t,
    children: n
  })
}

function o() {
  let e = Chunk473749.useContext(l);
  if (null == module) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return module
}