/** Chunk was on web.js **/
/** chunk id: 913074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s,
  p: () => o
});
var Chunk595707 = require("./595707.js"),
  Chunk156748 = require("./156748.js"),
  Chunk473749 = require("./473749.js");
let o = (0, Chunk473749.createContext)({
    isSelected: false
  }),
  s = (0, Chunk473749.forwardRef)(function(e, t) {
    [e, t] = (0, r.pE)(e, t, o);
    let {
      isSelected: n,
      ...s
    } = e;
    return a.createElement(i.r, {
      ...s,
      ref: t,
      className: e.className || "react-aria-SelectionIndicator",
      name: "SelectionIndicator",
      isVisible: n
    })
  })