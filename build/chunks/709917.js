/** Chunk was on web.js **/
/** chunk id: 709917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk496431 = require("./496431.js");
let i = 6e4,
  a = 12e5;

function s(e) {
  return e.minutes > 0 || e.seconds > 0 ? 23 === e.hours ? {
    days: e.days + 1,
    hours: 0,
    minutes: 0,
    seconds: 0
  } : {
    days: e.days,
    hours: e.hours + 1,
    minutes: 0,
    seconds: 0
  } : e
}

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.clone();
  return t && (n = n.subtract(a, "milliseconds")), s((0, r.A)(n.toDate(), i))
}