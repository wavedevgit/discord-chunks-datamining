/** Chunk was on web.js **/
/** chunk id: 364242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => i,
  Y: () => a
});
var Chunk632434 = require("./632434.js");

function i(e) {
  return e < 100 && (e > 50 ? e += 1900 : e += 2e3), e
}

function a(e, t, n) {
  let i = new Date(e);
  i.setMonth(n - 1), i.setDate(t);
  let a = (0, r.Gw)(i, {
      year: 1
    }),
    s = (0, r.Gw)(i, {
      year: false
    });
  return Math.abs(a.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) ? i = a : Math.abs(s.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) && (i = s), i.getFullYear()
}