/** Chunk was on 83789 **/
/** chunk id: 977416, original params: e,t,r (module,exports,require) **/
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function b(e) {
  var {
    gameName: t,
    onClick: r,
    loading: i = true
  } = e, l = function(e, t) {
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
  }(e, ["gameName", "onClick", "loading"]);
  let o = null != t ? t : u.intl.string(u.t.GIWFlJ),
    s = u.intl.formatToPlainString(u.t["3mb1s7"], {
      game: o
    });
  return i ? (0, n.jsx)("div", {
    className: d.loadingCover
  }) : (0, n.jsx)(a.ua7, {
    text: s,
    children: e => (0, n.jsxs)(a.P3F, p(g({
      className: f.addButton
    }, e), {
      onClick: r,
      children: [(0, n.jsx)(c.Z, p(g({
        className: f.cover,
        gameName: t
      }, l), {
        disableInteraction: true
      })), (0, n.jsx)(a.svS, {
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
    games: r,
    isGameFetching: i,
    isSuggestedGamesLoading: c,
    onDismiss: d,
    onClick: g,
    className: p
  } = e, m = (0, o.Dt)();
  return (0, n.jsxs)("aside", {
    className: l()(f.container, p),
    "aria-labelledby": m,
    children: [(0, n.jsxs)("div", {
      className: f.header,
      children: [(0, n.jsx)(a.P3F, {
        className: f.dismissButton,
        "aria-label": u.intl.string(u.t["pUR+3t"]),
        onClick: d,
        children: (0, n.jsx)(a.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.X6q, {
        id: m,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: u.intl.string(u.t.zMUr6e)
      })]
    }), (0, n.jsx)(s.Z, {
      games: r,
      renderGame: e => {
        let {
          applicationId: r,
          gameName: l,
          imageSrc: a
        } = e;
        return (0, n.jsx)(b, {
          onClick: () => g(r, l, a),
          userId: t,
          loading: c || i(r),
          applicationId: r,
          gameName: l,
          imageSrc: a
        })
      }
    })]
  })
}