/** Chunk was on 23706 **/
/** chunk id: 114170, original params: e,t,r (module,exports,require) **/
var Chunk553616 = require("./553616.js"),
  Chunk64774 = require("./64774.js"),
  o = {};
Object.keys(Chunk553616).forEach(function(e) {
  o[e] = {}, Object.defineProperty(o[e], "channels", {
    value: n[e].channels
  }), Object.defineProperty(o[e], "labels", {
    value: n[e].labels
  });
  var t = a(e);
  Object.keys(t).forEach(function(r) {
    var n, a, s = t[r];
    o[e][r] = (n = function(e) {
      if (null == e) return e;
      arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
      var t = s(e);
      if ("object" == typeof t)
        for (var r = t.length, n = 0; n < r; n++) t[n] = Math.round(t[n]);
      return t
    }, "conversion" in s && (n.conversion = s.conversion), n), o[e][r].raw = (a = function(e) {
      return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), s(e))
    }, "conversion" in s && (a.conversion = s.conversion), a)
  })
}), module.exports = o