/** Chunk was on web.js **/
/** chunk id: 991998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk528734 = require("./528734.js"),
  Chunk995638 = require("./995638.js"),
  Chunk951516 = require("./951516.js");

function a(e, t) {
  var n = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? false : n > 0 ? 1 : n
}

function s(e, t) {
  (0, o.Z)(2, arguments);
  var n = (0, r.default)(e),
    s = (0, r.default)(t),
    l = a(n, s),
    c = Math.abs((0, i.default)(n, s));
  n.setDate(n.getDate() - l * c);
  var u = Number(a(n, s) === -l),
    d = l * (c - u);
  return 0 === d ? 0 : d
}