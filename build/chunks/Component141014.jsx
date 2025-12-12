/** Chunk was on 85032 **/
/** chunk id: 141014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => l,
  g: () => o
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
let a = Chunk473749.createContext(null);

function l(e) {
  let {
    children: t
  } = e, [n, l] = i.useState(false);
  return (0, r.jsx)(a.Provider, {
    value: {
      expanded: n,
      setExpanded: l
    },
    children: t
  })
}

function o() {
  let e = Chunk473749.useContext(a);
  if (null == module) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return module
}