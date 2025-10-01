/** Chunk was on 89311 **/
/** chunk id: 221370, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk758713 = require("./758713.js"),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let p = [Chunk758713.z.DESKTOP, Chunk758713.z.XBOX, Chunk758713.z.PLAYSTATION, Chunk758713.z.NINTENDO];

function f(e) {
  var {
    platform: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["platform"]);
  switch (t) {
    case s.z.DESKTOP:
      return (0, n.jsx)(o.pzj, m({
        size: "xs"
      }, r));
    case s.z.XBOX:
      return (0, n.jsx)(o.Mko, m({
        size: "xs"
      }, r));
    case s.z.PLAYSTATION:
      return (0, n.jsx)(o.Tsp, m({
        size: "xs"
      }, r));
    case s.z.NINTENDO:
      return (0, n.jsx)(o.aPH, m({
        size: "xs"
      }, r));
    default:
      return null
  }
}

function g(e) {
  let {
    platforms: t
  } = e;
  return (0, n.jsx)("div", {
    className: a()(d.row, d.gapSm),
    style: {
      alignItems: "center"
    },
    children: t.map(e => (0, n.jsx)(c.ua7, {
      text: function(e) {
        switch (e) {
          case s.z.DESKTOP:
            return u.intl.string(u.t.KT6uCA);
          case s.z.XBOX:
            return u.intl.string(u.t.DDWUJi);
          case s.z.PLAYSTATION:
            return u.intl.string(u.t.fzMz2t);
          case s.z.NINTENDO:
            return u.intl.string(u.t.AMW8jY);
          default:
            return null
        }
      }(e),
      children: t => {
        var r, i;
        return (0, n.jsx)(f, (r = m({}, t), i = i = {
          platform: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }
    }, e))
  })
}

function j(e) {
  let {
    detectedGame: t,
    className: r
  } = e, l = i.useMemo(() => {
    let e = new Set(t.platforms),
      r = [...e];
    return !e.has(s.z.DESKTOP) && (e.has(s.z.MACOS) || e.has(s.z.LINUX)) && r.push(s.z.DESKTOP), r.filter(e => p.includes(e))
  }, [t.platforms]);
  return 0 === l.length ? null : (0, n.jsx)("div", {
    className: a()(d.column, d.gapLg, r),
    children: l.length > 0 && (0, n.jsx)(g, {
      platforms: l
    })
  })
}