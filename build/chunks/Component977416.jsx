/** Chunk was on 27069 **/
/** chunk id: 977416, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk845859 = require("./845859.js");

function d(e) {
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

function f(e, t) {
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

function g(e) {
  var {
    gameName: t,
    onClick: r,
    loading: l = true
  } = e, o = function(e, t) {
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
  let g = null != t ? t : c.intl.string(c.t.GIWFlJ),
    b = c.intl.formatToPlainString(c.t["3mb1s7"], {
      game: g
    });
  return l ? (0, n.jsx)("div", {
    className: s.loadingCover
  }) : (0, n.jsx)(i.ua7, {
    text: b,
    children: e => (0, n.jsxs)(i.P3F, f(d({
      className: u.addButton
    }, e), {
      onClick: r,
      children: [(0, n.jsx)(a.Z, f(d({
        className: u.cover,
        gameName: t
      }, o), {
        disableInteraction: true
      })), (0, n.jsx)(i.svS, {
        size: "md",
        className: u.addIcon,
        color: i.TVs.colors.WHITE
      })]
    }))
  })
}

function b(e) {
  let {
    userId: t,
    games: r,
    isGameFetching: a,
    isSuggestedGamesLoading: s,
    onDismiss: d,
    onClick: f
  } = e, b = (0, l.Dt)();
  return (0, n.jsxs)("aside", {
    className: u.container,
    "aria-labelledby": b,
    children: [(0, n.jsxs)("div", {
      className: u.header,
      children: [(0, n.jsx)(i.P3F, {
        className: u.dismissButton,
        "aria-label": c.intl.string(c.t["pUR+3t"]),
        onClick: d,
        children: (0, n.jsx)(i.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, n.jsx)(i.X6q, {
        id: b,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: c.intl.string(c.t.zMUr6e)
      })]
    }), (0, n.jsx)(o.Z, {
      games: r,
      renderGame: e => {
        let {
          applicationId: r,
          gameName: i,
          imageSrc: l
        } = e;
        return (0, n.jsx)(g, {
          onClick: () => f(r, i, l),
          userId: t,
          loading: s || a(r),
          applicationId: r,
          gameName: i,
          imageSrc: l
        })
      }
    })]
  })
}