/** Chunk was on 38576 **/
/** chunk id: 925170, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk804919 = require("./804919.js"),
  Chunk747101 = require("./747101.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk789101 = require("./789101.js");
let y = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    component: Chunk566007.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.xJtdIi)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    component: Chunk985748.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.Ae8tRk)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    component: Chunk173951.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4u"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    component: Chunk455731.Z,
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.NtoBi4)
  }
};

function m(t) {
  let {
    widgetType: e,
    user: n,
    widget: i,
    isGameFetching: o,
    onClick: l
  } = t;
  if (null == i) return null;
  let {
    component: a,
    getAriaLabel: s
  } = y[e];
  return (0, r.jsx)("li", {
    children: (0, r.jsxs)(c.kL8, {
      onClick: l,
      className: j.addButton,
      "aria-label": s(),
      children: [(0, r.jsx)(c.nn4, {
        children: f.intl.string(f.t.e9eskJ)
      }), (0, r.jsx)(a, {
        widget: i,
        user: n,
        isGameFetching: o,
        disableInteraction: true
      })]
    })
  })
}

function h(t) {
  var e, n;
  let i = (0, o.e7)([a.default], () => a.default.getCurrentUser()),
    c = (0, s.oD)(),
    {
      widgets: u,
      isGameFetching: b
    } = (0, p.Z)(c),
    d = new Map(u.map(t => [t.type, t]));
  return null == i ? null : (0, r.jsx)(l.Modal, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    title: f.intl.string(f.t.grUgR0),
    actions: []
  }, t), n = n = {
    children: (0, r.jsx)("ul", {
      "aria-label": f.intl.string(f.t["+EIBSE"]),
      className: j.options,
      children: Object.keys(y).map(t => (0, r.jsx)(m, {
        widgetType: t,
        user: i,
        widget: d.get(t),
        isGameFetching: b,
        onClick: O.dG
      }, t))
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
}