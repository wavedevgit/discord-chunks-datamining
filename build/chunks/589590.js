/** Chunk was on web.js **/
/** chunk id: 589590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk735438 = require("./735438.js"),
  Chunk842901 = require("./842901.js");

function a(e) {
  let {
    theme: t,
    layoutType: n
  } = e;
  return (0, i.E)(t, n)
}
let s = (0, Chunk735438.memoize)(a, e => {
  let {
    theme: t,
    layoutType: n
  } = e;
  return "".concat(t, ":").concat(n)
})