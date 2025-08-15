/** Chunk was on 12756 **/
/** chunk id: 977416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  var t, n, {
      onClick: o,
      loading: c = true
    } = e,
    f = function(e, t) {
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
    }(e, ["onClick", "loading"]);
  let p = i.useRef(null);
  return c ? (0, r.jsx)("div", {
    className: d.loadingCover
  }) : (0, r.jsxs)("div", {
    ref: p,
    className: u.addButtonWrapper,
    onClick: o,
    children: [(0, r.jsx)(a.Z, (t = function(e) {
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
    }({}, f), n = n = {
      className: u.cover,
      disableInteraction: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), (0, r.jsx)("div", {
      className: u.addButton,
      children: (0, r.jsx)(l.hU, {
        onClick: e => {
          e.stopPropagation(), o()
        },
        focusProps: {
          ringTarget: p
        },
        icon: l.svS,
        variant: "overlay-primary",
        size: "sm",
        "aria-label": s.intl.string(s.t.E3l3Z2)
      })
    })]
  })
}

function p(e) {
  let {
    userId: t,
    games: n,
    isGameFetching: i,
    isSuggestedGamesLoading: a,
    onDismiss: d,
    onClick: p
  } = e, m = (0, o.Dt)();
  return (0, r.jsxs)("aside", {
    className: u.container,
    "aria-labelledby": m,
    children: [(0, r.jsxs)("div", {
      className: u.header,
      children: [(0, r.jsx)(l.P3F, {
        className: u.dismissButton,
        "aria-label": s.intl.string(s.t["pUR+3t"]),
        onClick: d,
        children: (0, r.jsx)(l.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(l.X6q, {
        id: m,
        variant: "text-xs/medium",
        color: "text-secondary",
        children: s.intl.string(s.t.zMUr6e)
      })]
    }), (0, r.jsx)(c.Z, {
      games: n,
      renderGame: e => {
        let {
          applicationId: n,
          gameName: l,
          imageSrc: o
        } = e;
        return (0, r.jsx)(f, {
          onClick: () => p(n, l, o),
          userId: t,
          loading: a || i(n),
          applicationId: n,
          gameName: l,
          imageSrc: o
        })
      }
    })]
  })
}