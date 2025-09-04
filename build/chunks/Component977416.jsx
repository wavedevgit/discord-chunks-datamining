/** Chunk was on 74449 **/
/** chunk id: 977416, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function O(e) {
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

function y(e, t) {
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

function j(e) {
  var {
    gameName: t,
    onClick: r
  } = e, i = function(e, t) {
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
  }(e, ["gameName", "onClick"]);
  let l = null != t ? t : b.intl.string(b.t.GIWFlJ),
    c = b.intl.formatToPlainString(b.t["3mb1s7"], {
      game: l
    }),
    f = (0, o.e7)([s.Z], () => s.Z.suggestedFetchIsLoading);
  return (0, u.kO)(i.applicationId) || f ? (0, n.jsx)("div", {
    className: p.loadingCover
  }) : (0, n.jsx)(a.ua7, {
    text: c,
    children: e => (0, n.jsxs)(a.P3F, y(O({
      className: g.addButton
    }, e), {
      onClick: r,
      children: [(0, n.jsx)(d.Z, y(O({
        className: g.cover,
        gameName: t
      }, i), {
        disableInteraction: true
      })), (0, n.jsx)(a.svS, {
        size: "md",
        className: g.addIcon,
        color: a.TVs.colors.WHITE
      })]
    }))
  })
}

function m(e) {
  let {
    userId: t,
    games: r,
    onDismiss: i,
    onClick: o,
    className: s
  } = e, u = (0, c.Dt)();
  return (0, n.jsxs)("aside", {
    className: l()(g.container, s),
    "aria-labelledby": u,
    children: [(0, n.jsxs)("div", {
      className: g.header,
      children: [(0, n.jsx)(a.P3F, {
        className: g.dismissButton,
        "aria-label": b.intl.string(b.t["pUR+3t"]),
        onClick: i,
        children: (0, n.jsx)(a.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, n.jsx)(a.X6q, {
        id: u,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: b.intl.string(b.t.zMUr6e)
      })]
    }), (0, n.jsx)(f.Z, {
      games: r,
      renderGame: e => {
        let {
          applicationId: r,
          gameName: i,
          imageSrc: l
        } = e;
        return (0, n.jsx)(j, {
          onClick: () => o(r, i, l),
          userId: t,
          applicationId: r,
          gameName: i,
          imageSrc: l
        })
      }
    })]
  })
}