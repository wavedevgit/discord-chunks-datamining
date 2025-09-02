/** Chunk was on 8188 **/
/** chunk id: 977416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk845859 = require("./845859.js");

function g(e) {
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

function b(e, t) {
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

function p(e) {
  var {
    gameName: t,
    onClick: n,
    loading: i = true
  } = e, l = function(e, t) {
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
  }(e, ["gameName", "onClick", "loading"]);
  let o = null != t ? t : u.intl.string(u.t.GIWFlJ),
    s = u.intl.formatToPlainString(u.t["3mb1s7"], {
      game: o
    });
  return i ? (0, r.jsx)("div", {
    className: d.loadingCover
  }) : (0, r.jsx)(a.ua7, {
    text: s,
    children: e => (0, r.jsxs)(a.P3F, b(g({
      className: f.addButton
    }, e), {
      onClick: n,
      children: [(0, r.jsx)(c.Z, b(g({
        className: f.cover,
        gameName: t
      }, l), {
        disableInteraction: true
      })), (0, r.jsx)(a.svS, {
        size: "md",
        className: f.addIcon,
        color: a.TVs.colors.WHITE
      })]
    }))
  })
}

function m(e) {
  let {
    userId: t,
    games: n,
    isGameFetching: i,
    isSuggestedGamesLoading: c,
    onDismiss: d,
    onClick: g,
    className: b
  } = e, m = (0, o.Dt)();
  return (0, r.jsxs)("aside", {
    className: l()(f.container, b),
    "aria-labelledby": m,
    children: [(0, r.jsxs)("div", {
      className: f.header,
      children: [(0, r.jsx)(a.P3F, {
        className: f.dismissButton,
        "aria-label": u.intl.string(u.t["pUR+3t"]),
        onClick: d,
        children: (0, r.jsx)(a.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(a.X6q, {
        id: m,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: u.intl.string(u.t.zMUr6e)
      })]
    }), (0, r.jsx)(s.Z, {
      games: n,
      renderGame: e => {
        let {
          applicationId: n,
          gameName: l,
          imageSrc: a
        } = e;
        return (0, r.jsx)(p, {
          onClick: () => g(n, l, a),
          userId: t,
          loading: c || i(n),
          applicationId: n,
          gameName: l,
          imageSrc: a
        })
      }
    })]
  })
}