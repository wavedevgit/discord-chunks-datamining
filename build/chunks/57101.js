/** Chunk was on web.js **/
/** chunk id: 57101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  Chunk897325 = require("./897325.js");

function a(e) {
  let {
    theme: t,
    layoutType: n
  } = e;
  return (0, i._)(t, n)
}
let o = (0, Chunk392711.memoize)(a, e => {
  let {
    theme: t,
    layoutType: n
  } = e;
  return "".concat(t, ":").concat(n)
})