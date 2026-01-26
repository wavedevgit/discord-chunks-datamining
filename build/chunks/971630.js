/** Chunk was on 39048 **/
/** chunk id: 971630, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  T4: () => s,
  TP: () => l
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349);

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