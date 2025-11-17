/** Chunk was on web.js **/
/** chunk id: 195302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");
require("./775953.js"), require("./512722.js");
let a = Chunk473749.createContext(true);

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