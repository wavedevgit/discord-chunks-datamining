/** Chunk was on 66382 **/
/** chunk id: 330750, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.flattenNames = true;
var n = l(require("./426169.js")),
  o = l(require("./320403.js")),
  a = l(require("./667066.js")),
  i = l(require("./681926.js"));

function l(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var s = exports.flattenNames = function e() {
  var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
    r = [];
  return (0, i.default)(t, function(t) {
    Array.isArray(t) ? e(t).map(function(e) {
      return r.push(e)
    }) : (0, a.default)(t) ? (0, o.default)(t, function(e, t) {
      true === e && r.push(t), r.push(t + "-" + e)
    }) : (0, n.default)(t) && r.push(t)
  }), r
};
exports.default = s