/** Chunk was on web.js **/
/** chunk id: 194537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk29583 = require("./29583.js"),
  Chunk892227 = require("./892227.js"),
  Chunk618027 = require("./618027.js");

function s(e, t) {
  var n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? false : n > 0 ? 1 : n
}

function o(e, t) {
  (0, a.A)(2, arguments);
  var n = (0, r.default)(e),
    o = (0, r.default)(t),
    l = s(n, o),
    c = Math.abs((0, i.default)(n, o));
  n.setDate(n.getDate() - l * c);
  var u = Number(s(n, o) === -l),
    d = l * (c - u);
  return 0 === d ? 0 : d
}