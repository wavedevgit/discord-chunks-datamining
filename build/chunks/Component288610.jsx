/** Chunk was on web.js **/
/** chunk id: 288610, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");
require("./442715.js"), require("./284009.js");
let a = Chunk64700.createContext(true);

function o(e) {
  let {
    children: t
  } = e, [n, o] = i.useState(null), s = i.useMemo(() => ({
    setComponentToSnapshot: o
  }), [o]);
  return (0, r.jsxs)(a.Provider, {
    value: s,
    children: [t, null != n && (0, r.jsx)("div", {
      id: "component-to-image-container",
      style: {
        position: "fixed",
        top: "-1000px",
        right: "-1000px"
      },
      children: n
    })]
  })
}