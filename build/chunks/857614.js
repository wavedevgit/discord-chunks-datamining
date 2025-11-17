/** Chunk was on 66382 **/
/** chunk id: 857614, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = true;
var n = u(require("./330750.js")),
  o = u(require("./700712.js")),
  a = u(require("./874317.js")),
  i = u(require("./41608.js")),
  l = u(require("./327398.js")),
  s = u(require("./939991.js"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
exports.hover = i.default, exports.handleHover = i.default, exports.handleActive = l.default, exports.loop = s.default;
var c = exports.ReactCSS = function(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  var l = (0, n.default)(r),
    s = (0, o.default)(e, l);
  return (0, a.default)(s)
};
exports.default = c