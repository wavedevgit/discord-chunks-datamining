/** Chunk was on 66382 **/
/** chunk id: 700712, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.mergeClasses = true;
var n = i(require("./320403.js")),
  o = i(require("./117806.js")),
  a = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  };

function i(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = exports.mergeClasses = function(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    r = e.default && (0, o.default)(e.default) || {};
  return t.map(function(t) {
    var o = e[t];
    return o && (0, n.default)(o, function(e, t) {
      r[t] || (r[t] = {}), r[t] = a({}, r[t], o[t])
    }), t
  }), r
};
exports.default = l