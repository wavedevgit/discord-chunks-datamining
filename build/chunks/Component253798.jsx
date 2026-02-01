/** Chunk was on 60118 **/
/** chunk id: 253798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => u,
  M: () => c
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk61881 = require("./61881.js"),
  Chunk735321 = require("./735321.js");
let s = Chunk64700.createContext(null);

function c(e) {
  let {
    widgetType: t,
    children: n
  } = e, c = (0, i.bG)([a.A], () => {
    let e = a.A.getPendingWidgets();
    if (null == e) returnfalse;
    let n = e.find(e => e.type === t);
    if (null == n) returnfalse;
    let r = (0, o.cv)(t);
    return n.games.length > r
  }), [u, d] = l.useState(c);
  return (0, r.jsx)(s.Provider, {
    value: {
      expanded: u,
      setExpanded: d
    },
    children: n
  })
}

function u() {
  let e = l.useContext(s);
  if (null == e) throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
  return e
}