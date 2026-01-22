/** Chunk was on web.js **/
/** chunk id: 123375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o,
  r: () => s
});
var Chunk825913 = require("./825913.js"),
  Chunk357710 = require("./357710.js"),
  Chunk64700 = require("./64700.js");
let s = (0, Chunk64700.createContext)({
    isSelected: false
  }),
  o = (0, Chunk64700.forwardRef)(function(e, t) {
    [e, t] = (0, r.JT)(e, t, s);
    let {
      isSelected: n,
      ...o
    } = e;
    return a.createElement(i.e, {
      ...o,
      ref: t,
      className: e.className || "react-aria-SelectionIndicator",
      name: "SelectionIndicator",
      isVisible: n
    })
  })