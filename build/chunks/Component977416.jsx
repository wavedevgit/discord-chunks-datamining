/** Chunk was on 76708 **/
/** chunk id: 977416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk86419 = require("./86419.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk890814 = require("./890814.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk845859 = require("./845859.js");

function f(e) {
  var t, n, {
      onClick: i,
      loading: o
    } = e,
    c = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["onClick", "loading"]);
  return o ? (0, r.jsx)("div", {
    className: d.loadingCover
  }) : (0, r.jsxs)("div", {
    className: u.addButtonWrapper,
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
    }({}, c), n = n = {
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
        onClick: i,
        icon: l.svS,
        variant: "overlay-secondary",
        "aria-label": s.intl.string(s.t.E3l3Z2)
      })
    })]
  })
}

function p(e) {
  let {
    userId: t,
    widgetType: n,
    games: a,
    isGameFetching: d,
    onDismiss: p
  } = e, m = (0, i.Dt)();
  return (0, r.jsxs)("aside", {
    className: u.container,
    "aria-labelledby": m,
    children: [(0, r.jsxs)("div", {
      className: u.header,
      children: [(0, r.jsx)(l.P3F, {
        className: u.dismissButton,
        "aria-label": s.intl.string(s.t["pUR+3t"]),
        onClick: p,
        children: (0, r.jsx)(l.Dio, {
          size: "sm",
          color: "currentColor"
        })
      }), (0, r.jsx)(l.X6q, {
        id: m,
        variant: "text-sm/medium",
        color: "text-secondary",
        children: s.intl.string(s.t.zMUr6e)
      })]
    }), (0, r.jsx)(c.Z, {
      games: a,
      renderGame: e => {
        let {
          applicationId: l,
          gameName: i,
          imageSrc: a
        } = e;
        return (0, r.jsx)(f, {
          onClick: () => (0, o.ES)(n, {
            applicationId: l,
            gameName: i,
            imageSrc: a
          }),
          userId: t,
          loading: d(l),
          applicationId: l,
          gameName: i,
          imageSrc: a
        })
      }
    })]
  })
}