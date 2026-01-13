/** Chunk was on 90882 **/
/** chunk id: 141014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => s,
  g: () => u
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk224724 = require("./224724.js"),
  Chunk86419 = require("./86419.js");
let c = Chunk473749.createContext(null);

function s(e) {
  let {
    widgetType: t,
    children: n
  } = e, s = (0, l.e7)([a.Z], () => {
    let e = a.Z.getPendingWidgets();
    if (null == e) returnfalse;
    let n = e.find(e => e.type === t);
    if (null == n) returnfalse;
    let r = (0, o.Gv)(t);
    return n.games.length > r
  }), [u, d] = i.useState(s);
  return (0, r.jsx)(c.Provider, {
    value: {
      expanded: u,
      setExpanded: d
    },
    children: n
  })
}

function u() {
  let e = i.useContext(c);
  if (null == e) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return e
}