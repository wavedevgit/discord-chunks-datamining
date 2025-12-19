/** Chunk was on 23706 **/
/** chunk id: 667929, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  t7: () => k,
  y7: () => j
});
var Chunk83072 = require("./83072.js"),
  Chunk736226 = require("./736226.js"),
  Chunk544529 = require("./544529.js"),
  Chunk30486 = require("./30486.js"),
  Chunk697939 = require("./697939.js"),
  c = require.n(Chunk697939),
  Chunk417181 = require("./417181.js"),
  l = require.n(Chunk417181),
  Chunk960465 = require("./960465.js");

function b(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, n)
  }
  return r
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? b(Object(r), true).forEach(function(t) {
      (0, a.Z)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}
var h = Chunk30486.default,
  p = Object.keys(h),
  y = function(e) {
    var t = c()(e),
      r = (0, f.L)(t.array()),
      n = (0, o.Z)(r, 3),
      a = n[0],
      s = n[1],
      i = n[2],
      u = (0, f.x)([a < .25 ? 1 : a < .5 ? .9 - a : 1.1 - a, s, i]);
    return c().rgb(u).hex()
  },
  g = function(e) {
    return function(t) {
      return {
        className: [t.className, e.className].filter(Boolean).join(" "),
        style: d(d({}, t.style || {}), e.style || {})
      }
    }
  },
  v = function(e, t) {
    if (true === e) return t;
    if (true === t) return e;
    var r = (0, n.Z)(e),
      a = (0, n.Z)(t);
    switch (r) {
      case "string":
        switch (a) {
          case "string":
            return [t, e].filter(Boolean).join(" ");
          case "object":
            return g({
              className: e,
              style: t
            });
          case "function":
            return function(r) {
              for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
              return g({
                className: e
              })(t.apply(true, [r].concat(a)))
            }
        }
        break;
      case "object":
        switch (a) {
          case "string":
            return g({
              className: t,
              style: e
            });
          case "object":
            return d(d({}, t), e);
          case "function":
            return function(r) {
              for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
              return g({
                style: e
              })(t.apply(true, [r].concat(a)))
            }
        }
        break;
      case "function":
        switch (a) {
          case "string":
            return function(r) {
              for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
              return e.apply(true, [g(r)({
                className: t
              })].concat(a))
            };
          case "object":
            return function(r) {
              for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
              return e.apply(true, [g(r)({
                style: t
              })].concat(a))
            };
          case "function":
            return function(r) {
              for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
              return e.apply(true, [t.apply(true, [r].concat(a))].concat(a))
            }
        }
    }
  },
  m = function(e, t) {
    var r = Object.keys(t);
    for (var n in e) false === r.indexOf(n) && r.push(n);
    return r.reduce(function(r, n) {
      return r[n] = v(e[n], t[n]), r
    }, {})
  },
  w = function(e, t) {
    for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
    if (null === t) return e;
    Array.isArray(t) || (t = [t]);
    var s = t.map(function(t) {
      return e[t]
    }).filter(Boolean).reduce(function(e, t) {
      return "string" == typeof t ? e.className = [e.className, t].filter(Boolean).join(" ") : "object" === (0, n.Z)(t) ? e.style = d(d({}, e.style), t) : "function" == typeof t && (e = d(d({}, e), t.apply(true, [e].concat(a)))), e
    }, {
      className: "",
      style: {}
    });
    return s.className || delete s.className, 0 === Object.keys(s.style).length && delete s.style, s
  },
  O = function(e) {
    return Object.keys(e).reduce(function(t, r) {
      return t[r] = /^base/.test(r) ? y(e[r]) : "scheme" === r ? e[r] + ":inverted" : e[r], t
    }, {})
  },
  k = l()(function(e) {
    var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      n = t.defaultBase16,
      a = true === n ? h : n,
      o = t.base16Themes,
      s = E(r, true === o ? null : o);
    s && (r = d(d({}, s), r));
    for (var i = p.reduce(function(e, t) {
        return e[t] = r[t] || a[t], e
      }, {}), c = m(Object.keys(r).reduce(function(e, t) {
        return false === p.indexOf(t) && (e[t] = r[t]), e
      }, {}), e(i)), u = arguments.length, f = Array(u > 3 ? u - 3 : 0), b = 3; b < u; b++) f[b - 3] = arguments[b];
    return l()(w, 2).apply(true, [c].concat(f))
  }, 3),
  x = function(e) {
    return !!e.extend
  },
  E = function(e, t) {
    if (e && x(e) && e.extend && (e = e.extend), "string" == typeof e) {
      var r = e.split(":"),
        n = (0, o.Z)(r, 2),
        a = n[0],
        i = n[1];
      e = t ? t[a] : s[a], "inverted" === i && (e = O(e))
    }
    return e && Object.prototype.hasOwnProperty.call(e, "base00") ? e : true
  },
  j = function(e) {
    return "string" == typeof e ? "".concat(e, ":inverted") : e && x(e) && e.extend ? "string" == typeof e.extend ? d(d({}, e), {}, {
      extend: "".concat(e.extend, ":inverted")
    }) : d(d({}, e), {}, {
      extend: O(e.extend)
    }) : e ? O(e) : e
  }