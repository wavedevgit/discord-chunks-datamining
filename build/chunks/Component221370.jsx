/** Chunk was on 89311 **/
/** chunk id: 221370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk758713 = require("./758713.js"),
  Chunk657707 = require("./657707.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let f = [Chunk758713.z.DESKTOP, Chunk758713.z.XBOX, Chunk758713.z.PLAYSTATION, Chunk758713.z.NINTENDO];

function p(e) {
  var {
    platform: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["platform"]);
  switch (t) {
    case s.z.DESKTOP:
      return (0, r.jsx)(o.pzj, m({
        size: "xs"
      }, n));
    case s.z.XBOX:
      return (0, r.jsx)(o.Mko, m({
        size: "xs"
      }, n));
    case s.z.PLAYSTATION:
      return (0, r.jsx)(o.Tsp, m({
        size: "xs"
      }, n));
    case s.z.NINTENDO:
      return (0, r.jsx)(o.aPH, m({
        size: "xs"
      }, n));
    default:
      return null
  }
}

function g(e) {
  let {
    platforms: t
  } = e;
  return (0, r.jsx)("div", {
    className: a()(u.row, u.gapSm),
    style: {
      alignItems: "center"
    },
    children: t.map(e => (0, r.jsx)(c.u, {
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
      children: (0, r.jsx)(p, {
        platform: e
      })
    }, e))
  })
}

function x(e) {
  let {
    detectedGame: t,
    className: n
  } = e, l = i.useMemo(() => {
    let e = new Set(t.platforms),
      n = [...e];
    return !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && n.push(s.z.DESKTOP), n.filter(e => f.includes(e))
  }, [t.platforms]);
  return 0 === l.length ? null : (0, r.jsx)("div", {
    className: a()(u.column, u.gapLg, n),
    children: l.length > 0 && (0, r.jsx)(g, {
      platforms: l
    })
  })
}