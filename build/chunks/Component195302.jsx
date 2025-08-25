/** Chunk was on web.js **/
/** chunk id: 195302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
require("./775953.js"), require("./512722.js");
let o = Chunk647438.createContext(true);

function a(e) {
  let {
    children: t
  } = e, [n, a] = i.useState(null), s = i.useMemo(() => ({
    setComponentToSnapshot: a
  }), [a]);
  return (0, r.jsxs)(o.Provider, {
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