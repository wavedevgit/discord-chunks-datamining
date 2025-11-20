/** Chunk was on 89311 **/
/** chunk id: 221370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk758713 = require("./758713.js"),
  Chunk657707 = require("./657707.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let g = [Chunk758713.z.DESKTOP, Chunk758713.z.XBOX, Chunk758713.z.PLAYSTATION, Chunk758713.z.NINTENDO];

function f(e) {
  var {
    platform: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, a, i = function(e, t) {
      if (null == e) return {};
      var n, a, i = {},
        r = Object.keys(e);
      for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["platform"]);
  switch (t) {
    case s.z.DESKTOP:
      return (0, a.jsx)(o.pzj, m({
        size: "xs"
      }, n));
    case s.z.XBOX:
      return (0, a.jsx)(o.Mko, m({
        size: "xs"
      }, n));
    case s.z.PLAYSTATION:
      return (0, a.jsx)(o.Tsp, m({
        size: "xs"
      }, n));
    case s.z.NINTENDO:
      return (0, a.jsx)(o.aPH, m({
        size: "xs"
      }, n));
    default:
      return null
  }
}

function p(e) {
  let {
    platforms: t
  } = e;
  return (0, a.jsx)("div", {
    className: l()(u.row, u.gapSm),
    style: {
      alignItems: "center"
    },
    children: t.map(e => (0, a.jsx)(c.u, {
      text: function(e) {
        switch (e) {
          case s.z.DESKTOP:
            return d.intl.string(d.t.KT6uCJ);
          case s.z.XBOX:
            return d.intl.string(d.t.DDWUJp);
          case s.z.PLAYSTATION:
            return d.intl.string(d.t.fzMz2s);
          case s.z.NINTENDO:
            return d.intl.string(d.t.AMW8je);
          default:
            return null
        }
      }(e),
      children: (0, a.jsx)(f, {
        platform: e
      })
    }, e))
  })
}

function x(e) {
  let {
    detectedGame: t,
    className: n
  } = e, r = i.useMemo(() => {
    let e = new Set(t.platforms),
      n = [...e];
    return !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && n.push(s.z.DESKTOP), n.filter(e => g.includes(e))
  }, [t.platforms]);
  return 0 === r.length ? null : (0, a.jsx)("div", {
    className: l()(u.column, u.gapLg, n),
    children: r.length > 0 && (0, a.jsx)(p, {
      platforms: r
    })
  })
}