/** Chunk was on web.js **/
/** chunk id: 140081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o,
  y: () => i
});
var Chunk89199 = require("./89199.js");

function i(e) {
  return e < 100 && (e > 50 ? e += 1900 : e += 2e3), e
}

function o(e, t, n) {
  let i = new Date(e);
  i.setMonth(n - 1), i.setDate(t);
  let o = (0, r.WK)(i, {
      year: 1
    }),
    a = (0, r.WK)(i, {
      year: false
    });
  return Math.abs(o.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) ? i = o : Math.abs(a.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) && (i = a), i.getFullYear()
}