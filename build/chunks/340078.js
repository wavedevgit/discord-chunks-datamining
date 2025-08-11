/** Chunk was on 67544 **/
/** chunk id: 340078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => s,
  v: () => o
});
var Chunk477839 = require("./477839.js");

function s(e, t) {
  return Intl.NumberFormat(t, {
    style: "decimal"
  }).format(e)
}

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : r.eg,
    n = Math.abs(e).toString().padStart(e < 0 ? t - 1 : t, "0");
  return e < 0 ? "-".concat(n) : n
}