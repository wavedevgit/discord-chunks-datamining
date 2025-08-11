/** Chunk was on web.js **/
/** chunk id: 886969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk774078 = require("./774078.js");
let i = 6e4,
  o = 12e5;

function a(e) {
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

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.clone();
  return t && (n = n.subtract(o, "milliseconds")), a((0, r.Z)(n.toDate(), i))
}