/** Chunk was on 54628 **/
/** chunk id: 114170, original params: e,t,r (module,exports,require) **/
var Chunk553616 = require("./553616.js"),
  Chunk64774 = require("./64774.js"),
  o = {};
Object.keys(Chunk553616).forEach(function(e) {
  o[e] = {}, Object.defineProperty(o[e], "channels", {
    value: a[e].channels
  }), Object.defineProperty(o[e], "labels", {
    value: a[e].labels
  });
  var t = n(e);
  Object.keys(t).forEach(function(r) {
    var a, n, s = t[r];
    o[e][r] = (a = function(e) {
      if (null == e) return e;
      arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
      var t = s(e);
      if ("object" == typeof t)
        for (var r = t.length, a = 0; a < r; a++) t[a] = Math.round(t[a]);
      return t
    }, "conversion" in s && (a.conversion = s.conversion), a), o[e][r].raw = (n = function(e) {
      return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), s(e))
    }, "conversion" in s && (n.conversion = s.conversion), n)
  })
}), module.exports = o