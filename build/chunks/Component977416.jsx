/** Chunk was on 37690 **/
/** chunk id: 977416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk224724 = require("./224724.js"),
  Chunk747101 = require("./747101.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk845859 = require("./845859.js");

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

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  var {
    gameName: t,
    onClick: n
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["gameName", "onClick"]);
  let o = null != t ? t : g.intl.string(g.t.GIWFlJ),
    c = g.intl.formatToPlainString(g.t["3mb1s7"], {
      game: o
    }),
    f = (0, a.e7)([s.Z], () => s.Z.suggestedFetchIsLoading);
  return (0, u.kO)(i.applicationId) || f ? (0, r.jsx)("div", {
    className: p.loadingCover
  }) : (0, r.jsx)(l.ua7, {
    text: c,
    children: e => (0, r.jsxs)(l.P3F, O(m({
      className: b.addButton
    }, e), {
      onClick: n,
      children: [(0, r.jsx)(d.Z, O(m({
        className: b.cover,
        gameName: t
      }, i), {
        disableInteraction: true
      })), (0, r.jsx)(l.svS, {
        size: "md",
        className: b.addIcon,
        color: l.TVs.colors.WHITE
      })]
    }))
  })
}

function j(e) {
  let {
    userId: t,
    games: n,
    onDismiss: i,
    onClick: a,
    className: s
  } = e, u = (0, c.Dt)();
  return (0, r.jsxs)("aside", {
    className: o()(b.container, s),
    "aria-labelledby": u,
    children: [(0, r.jsxs)("div", {
      className: b.header,
      children: [(0, r.jsx)(l.P3F, {
        className: b.dismissButton,
        "aria-label": g.intl.string(g.t["pUR+3t"]),
        onClick: i,
        children: (0, r.jsx)(l.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(l.X6q, {
        id: u,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: g.intl.string(g.t.zMUr6e)
      })]
    }), (0, r.jsx)(f.Z, {
      games: n,
      renderGame: e => {
        let {
          applicationId: n,
          gameName: i,
          imageSrc: o
        } = e;
        return (0, r.jsx)(y, {
          onClick: () => a(n, i, o),
          userId: t,
          applicationId: n,
          gameName: i,
          imageSrc: o
        })
      }
    })]
  })
}