/** Chunk was on web.js **/
/** chunk id: 424046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YY: () => a,
  cz: () => i,
  hO: () => s,
  rv: () => o
});
var Chunk894186 = require("./894186.js");

function i(e, t) {
  e.assign("day", t.getDate()), e.assign("month", t.getMonth() + 1), e.assign("year", t.getFullYear())
}

function o(e, t) {
  e.assign("hour", t.getHours()), e.assign("minute", t.getMinutes()), e.assign("second", t.getSeconds()), e.assign("millisecond", t.getMilliseconds()), e.assign("meridiem", 12 > t.getHours() ? r.GG.AM : r.GG.PM)
}

function a(e, t) {
  e.imply("day", t.getDate()), e.imply("month", t.getMonth() + 1), e.imply("year", t.getFullYear())
}

function s(e, t) {
  e.imply("hour", t.getHours()), e.imply("minute", t.getMinutes()), e.imply("second", t.getSeconds()), e.imply("millisecond", t.getMilliseconds()), e.imply("meridiem", 12 > t.getHours() ? r.GG.AM : r.GG.PM)
}