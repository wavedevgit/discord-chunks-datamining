/** Chunk was on 27069 **/
/** chunk id: 977416, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk845859 = require("./845859.js");

function f(e) {
  var t, r, {
      onClick: a,
      loading: c = true
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var r, n, l = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
      }
      return l
    }(e, ["onClick", "loading"]);
  let g = l.useRef(null);
  return c ? (0, n.jsx)("div", {
    className: u.loadingCover
  }) : (0, n.jsxs)("div", {
    ref: g,
    className: d.addButtonWrapper,
    onClick: a,
    children: [(0, n.jsx)(o.Z, (t = function(e) {
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
    }({}, f), r = r = {
      className: d.cover,
      disableInteraction: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t)), (0, n.jsx)("div", {
      className: d.addButton,
      children: (0, n.jsx)(i.hU, {
        onClick: e => {
          e.stopPropagation(), a()
        },
        focusProps: {
          ringTarget: g
        },
        icon: i.svS,
        variant: "overlay-primary",
        size: "sm",
        "aria-label": s.intl.string(s.t.E3l3Z2)
      })
    })]
  })
}

function g(e) {
  let {
    userId: t,
    games: r,
    isGameFetching: l,
    isSuggestedGamesLoading: o,
    onDismiss: u,
    onClick: g
  } = e, p = (0, a.Dt)();
  return (0, n.jsxs)("aside", {
    className: d.container,
    "aria-labelledby": p,
    children: [(0, n.jsxs)("div", {
      className: d.header,
      children: [(0, n.jsx)(i.P3F, {
        className: d.dismissButton,
        "aria-label": s.intl.string(s.t["pUR+3t"]),
        onClick: u,
        children: (0, n.jsx)(i.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, n.jsx)(i.X6q, {
        id: p,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: s.intl.string(s.t.zMUr6e)
      })]
    }), (0, n.jsx)(c.Z, {
      games: r,
      renderGame: e => {
        let {
          applicationId: r,
          gameName: i,
          imageSrc: a
        } = e;
        return (0, n.jsx)(f, {
          onClick: () => g(r, i, a),
          userId: t,
          loading: o || l(r),
          applicationId: r,
          gameName: i,
          imageSrc: a
        })
      }
    })]
  })
}