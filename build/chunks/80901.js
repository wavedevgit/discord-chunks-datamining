/** Chunk was on 23706 **/
/** chunk id: 80901, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk619825 = require("./619825.js");

function a(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n
}

function o(e, t, r) {
  var n = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0,
    o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 1 / 0;
  if ("Object" === e) {
    var s = Object.getOwnPropertyNames(t);
    r && s.sort(true === r ? true : r), i = {
      entries: (s = s.slice(n, o + 1)).map(function(e) {
        return {
          key: e,
          value: t[e]
        }
      })
    }
  } else if ("Array" === e) i = {
    entries: t.slice(n, o + 1).map(function(e, t) {
      return {
        key: t + n,
        value: e
      }
    })
  };
  else {
    var i, c, u = 0,
      l = [],
      f = true,
      b = "function" == typeof t.set,
      d = function(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return a(e, true);
                var r = Object.prototype.toString.call(e).slice(8, false);
                if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t)
              }
            }(e))) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: true
                } : {
                  done: false,
                  value: e[n++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, i = true,
          c = false;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            c = true, s = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (c) throw s
            }
          }
        }
      }(t);
    try {
      for (d.s(); !(c = d.n()).done;) {
        var h = c.value;
        if (u > o) {
          f = false;
          break
        }
        n <= u && (b && Array.isArray(h) ? "string" == typeof h[0] || "number" == typeof h[0] ? l.push({
          key: h[0],
          value: h[1]
        }) : l.push({
          key: "[entry ".concat(u, "]"),
          value: {
            "[key]": h[0],
            "[value]": h[1]
          }
        }) : l.push({
          key: u,
          value: h
        })), u++
      }
    } catch (e) {
      d.e(e)
    } finally {
      d.f()
    }
    i = {
      hasMore: !f,
      entries: l
    }
  }
  return i
}

function s(e, t, r) {
  for (var n = []; t - e > r * r;) r *= r;
  for (var a = e; a <= t; a += r) n.push({
    from: a,
    to: Math.min(t, a + r - 1)
  });
  return n
}

function i(e, t, r, a) {
  var i, c = arguments.length > 4 && true !== arguments[4] ? arguments[4] : 0,
    u = arguments.length > 5 && true !== arguments[5] ? arguments[5] : 1 / 0,
    l = o.bind(null, e, t, r);
  if (!a) return l().entries;
  var f = u < 1 / 0,
    b = Math.min(u - c, "Object" === e ? Object.keys(t).length : "Array" === e ? t.length : 1 / 0);
  if ("Iterable" !== e) {
    if (b <= a || a < 7) return l(c, u).entries
  } else if (b <= a && !f) return l(c, u).entries;
  if ("Iterable" === e) {
    var d = l(c, c + a - 1),
      h = d.hasMore,
      p = d.entries;
    i = h ? [].concat((0, n.Z)(p), (0, n.Z)(s(c + a, c + 2 * a - 1, a))) : p
  } else i = f ? s(c, u, a) : [].concat((0, n.Z)(l(0, a - 5).entries), (0, n.Z)(s(a - 4, b - 5, a)), (0, n.Z)(l(b - 4, b - 1).entries));
  return i
}