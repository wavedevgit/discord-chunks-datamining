/** Chunk was on 53870 **/
/** chunk id: 471746, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  q: () => l
});
var Chunk405802 = require("./405802.js"),
  Chunk772567 = require("./772567.js"),
  Chunk521310 = require("./521310.js"),
  Chunk495311 = require("./495311.js"),
  Chunk681601 = require("./681601.js");

function c(t, n) {
  (null == n || n > t.length) && (n = t.length);
  for (var e = 0, r = Array(n); e < n; e++) r[e] = t[e];
  return r
}

function l(t, n, e) {
  var l = (0, a.N)(),
    s = (0, i.s)(t, n, e),
    f = (0, u.E)(t);
  (0, o.L)(function() {
    if (null != f) {
      var t, o = function(t) {
          if (Array.isArray(t)) return t
        }(t = (0, r.w)(f, s, l)) || function(t, n) {
          var e, r, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != o) {
            var i = [],
              a = true,
              u = false;
            try {
              for (o = o.call(t); !(a = (e = o.next()).done) && (i.push(e.value), i.length !== n); a = true);
            } catch (t) {
              u = true, r = t
            } finally {
              try {
                a || null == o.return || o.return()
              } finally {
                if (u) throw r
              }
            }
            return i
          }
        }(t, 2) || function(t, n) {
          if (t) {
            if ("string" == typeof t) return c(t, 2);
            var e = Object.prototype.toString.call(t).slice(8, false);
            if ("Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return c(t, n)
          }
        }(t, 2) || function() {
          throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }(),
        i = o[0],
        a = o[1];
      return n.receiveHandlerId(i), e.receiveHandlerId(i), a
    }
  }, [l, n, e, s, f])
}