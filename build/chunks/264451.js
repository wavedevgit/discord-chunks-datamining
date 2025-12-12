/** Chunk was on 384 **/
/** chunk id: 264451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Zo: () => s,
  m5: () => l
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527);

function l(e, t) {
  let n = "",
    r = e >= 0;
  return r && (n += "+"), t ? n += "".concat(Math.floor(100 * e), "%") : n += e, {
    formattedValue: n,
    isPositive: r
  }
}

function s(e, t) {
  return null != e ? i()(e).format(t) : "-"
}