/** Chunk was on 46592 **/
/** chunk id: 977416, original params: e,t,r (module,exports,require) **/
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
  Chunk279280 = require("./279280.js"),
  Chunk101250 = require("./101250.js");

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

function m(e, t) {
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

function y(e) {
  var {
    gameName: t,
    onClick: r
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["gameName", "onClick"]);
  let o = null != t ? t : g.intl.string(g.t.GIWFlJ),
    c = g.intl.formatToPlainString(g.t["3mb1s7"], {
      game: o
    }),
    f = (0, a.e7)([s.Z], () => s.Z.suggestedFetchIsLoading);
  return (0, u.kO)(i.applicationId) || f ? (0, n.jsx)("div", {
    className: p.loadingCover
  }) : (0, n.jsx)(l.ua7, {
    text: c,
    children: e => (0, n.jsxs)(l.P3F, m(O({
      className: b.addButton
    }, e), {
      onClick: r,
      children: [(0, n.jsx)(d.Z, m(O({
        className: b.cover,
        gameName: t
      }, i), {
        disableInteraction: true
      })), (0, n.jsx)(l.svS, {
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
    games: r,
    onDismiss: i,
    onClick: a,
    className: s
  } = e, u = (0, c.Dt)();
  return (0, n.jsxs)("aside", {
    className: o()(b.container, s),
    "aria-labelledby": u,
    children: [(0, n.jsxs)("div", {
      className: b.header,
      children: [(0, n.jsx)(l.P3F, {
        className: b.dismissButton,
        "aria-label": g.intl.string(g.t["pUR+3t"]),
        onClick: i,
        children: (0, n.jsx)(l.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, n.jsx)(l.X6q, {
        id: u,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: g.intl.string(g.t.zMUr6e)
      })]
    }), (0, n.jsx)(f.Z, {
      games: r,
      renderGame: e => {
        let {
          applicationId: r,
          gameName: i,
          imageSrc: o
        } = e;
        return (0, n.jsx)(y, {
          onClick: () => a(r, i, o),
          userId: t,
          applicationId: r,
          gameName: i,
          imageSrc: o
        })
      }
    })]
  })
}