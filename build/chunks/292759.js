/** Chunk was on 92078 **/
/** chunk id: 292759, original params: n,r,t (module,exports,require) **/
require.d(exports, {
  U: () => u
});
var Chunk541568 = require("./541568.js"),
  Chunk9455 = require("./9455.js");

function i(n, r) {
  (null == r || r > n.length) && (r = n.length);
  for (var t = 0, e = Array(r); t < r; t++) e[t] = n[t];
  return e
}

function u(n, r, t) {
  var u, a = function(n) {
      if (Array.isArray(n)) return n
    }(u = (0, o.r)(n, r, t)) || function(n, r) {
      var t, e, o = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
      if (null != o) {
        var i = [],
          u = true,
          a = false;
        try {
          for (o = o.call(n); !(u = (t = o.next()).done) && (i.push(t.value), i.length !== r); u = true);
        } catch (n) {
          a = true, e = n
        } finally {
          try {
            u || null == o.return || o.return()
          } finally {
            if (a) throw e
          }
        }
        return i
      }
    }(u, 2) || function(n, r) {
      if (n) {
        if ("string" == typeof n) return i(n, 2);
        var t = Object.prototype.toString.call(n).slice(8, false);
        if ("Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t) return Array.from(n);
        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return i(n, r)
      }
    }(u, 2) || function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }(),
    c = a[0],
    f = a[1];
  return (0, e.L)(function() {
    var r = n.getHandlerId();
    if (null != r) return n.subscribeToStateChange(f, {
      handlerIds: [r]
    })
  }, [n, f]), c
}