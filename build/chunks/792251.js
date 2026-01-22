/** Chunk was on web.js **/
/** chunk id: 792251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => s,
  w: () => a
});
let r = 2.8,
  i = 6;

function a(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 100;
  if (0 === e) return 0;
  let a = e / n;
  return (t = a < 1 ? Math.pow(a, r) : Math.pow(10, (a - 1) * i / 20)) * n
}

function s(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 100;
  if (0 === e) return 0;
  let a = e / n;
  return (t = a < 1 ? Math.pow(a, 1 / r) : 20 * Math.log10(a) / i + 1) * n
}