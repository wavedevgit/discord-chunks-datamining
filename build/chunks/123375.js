/** Chunk was on web.js **/
/** chunk id: 123375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s,
  r: () => o
});
var Chunk825913 = require("./825913.js"),
  Chunk357710 = require("./357710.js"),
  Chunk64700 = require("./64700.js");
let o = (0, Chunk64700.createContext)({
    isSelected: false
  }),
  s = (0, Chunk64700.forwardRef)(function(e, t) {
    [e, t] = (0, r.JT)(e, t, o);
    let {
      isSelected: n,
      ...s
    } = e;
    return a.createElement(i.e, {
      ...s,
      ref: t,
      className: e.className || "react-aria-SelectionIndicator",
      name: "SelectionIndicator",
      isVisible: n
    })
  })