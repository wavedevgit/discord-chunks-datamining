/** Chunk was on web.js **/
"use strict";

function n(e) {
  let t = {};
  return Object.keys(e).forEach(function(n) {
    (0 | n) == n && (n |= 0), t[e[n]] = n
  }), t
}
t.tagClass = {
  0: "universal",
  1: "application",
  2: "context",
  3: "private"
}, t.tagClassByName = n(t.tagClass), t.tag = {
  0: "end",
  1: "bool",
  2: "int",
  3: "bitstr",
  4: "octstr",
  5: "null_",
  6: "objid",
  7: "objDesc",
  8: "external",
  9: "real",
  10: "enum",
  11: "embed",
  12: "utf8str",
  13: "relativeOid",
  16: "seq",
  17: "set",
  18: "numstr",
  19: "printstr",
  20: "t61str",
  21: "videostr",
  22: "ia5str",
  23: "utctime",
  24: "gentime",
  25: "graphstr",
  26: "iso646str",
  27: "genstr",
  28: "unistr",
  29: "charstr",
  30: "bmpstr"
}, t.tagByName = n(t.tag)