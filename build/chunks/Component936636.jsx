/** Chunk was on 13530 **/
/** chunk id: 936636, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk808380 = require("./808380.js"),
  Chunk934551 = require("./934551.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let x = [Chunk808380.Y.DESKTOP, Chunk808380.Y.XBOX, Chunk808380.Y.PLAYSTATION, Chunk808380.Y.NINTENDO];

function f(e) {
  let {
    platform: t
  } = e, l = function(e, t) {
    if (null == e) return {};
    var l, n, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, l = Reflect.ownKeys(e); i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var l, n, i = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) l = a[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, l = Object.getOwnPropertySymbols(e); i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["platform"]);
  switch (t) {
    case s.Y.DESKTOP:
      return (0, n.jsx)(o.ScreenIcon, m({
        size: "xs"
      }, l));
    case s.Y.XBOX:
      return (0, n.jsx)(o.XboxNeutralIcon, m({
        size: "xs"
      }, l));
    case s.Y.PLAYSTATION:
      return (0, n.jsx)(o.PlaystationNeutralIcon, m({
        size: "xs"
      }, l));
    case s.Y.NINTENDO:
      return (0, n.jsx)(o.NintendoSwitchNeutralIcon, m({
        size: "xs"
      }, l));
    default:
      return null
  }
}

function g(e) {
  let {
    platforms: t
  } = e;
  return (0, n.jsx)("div", {
    className: r()(u.nM, u.Lc),
    style: {
      alignItems: "center"
    },
    children: t.map(e => (0, n.jsx)(c.m, {
      text: function(e) {
        switch (e) {
          case s.Y.DESKTOP:
            return d.intl.string(d.t.KT6uCJ);
          case s.Y.XBOX:
            return d.intl.string(d.t.DDWUJp);
          case s.Y.PLAYSTATION:
            return d.intl.string(d.t.fzMz2s);
          case s.Y.NINTENDO:
            return d.intl.string(d.t.AMW8je);
          default:
            return null
        }
      }(e),
      children: (0, n.jsx)(f, {
        platform: e
      })
    }, e))
  })
}

function h(e) {
  let {
    detectedGame: t,
    className: l
  } = e, a = i.useMemo(() => {
    let e = new Set(t.platforms),
      l = [...e];
    return !e.has(s.Y.DESKTOP) && (e.has(s.Y.MACOS) || e.has(s.Y.LINUX)) && l.push(s.Y.DESKTOP), l.filter(e => x.includes(e))
  }, [t.platforms]);
  return 0 === a.length ? null : (0, n.jsx)("div", {
    className: r()(u.fi, u.iH, l),
    children: a.length > 0 && (0, n.jsx)(g, {
      platforms: a
    })
  })
}