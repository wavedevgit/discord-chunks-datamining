/** Chunk was on 1272 **/
/** chunk id: 257966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk51596 = require("./51596.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886190 = require("./886190.js");

function u(e) {
  var t, n;
  let {
    focusSectionProps: u
  } = e, d = i.useCallback(e => {
    (0, o.ZN)("fast-travel")
  }, []);
  return (0, r.jsx)(l.u, {
    "aria-label": s.intl.string(s.t["7P/+qz"]),
    asContainer: true,
    __unsupportedReactNodeAsText: (0, r.jsxs)(r.Fragment, {
      children: [s.intl.string(s.t["7P/+qz"]), (0, r.jsx)(a.M2$, {
        shortcut: ["mod", "k"]
      })]
    }),
    children: (0, r.jsxs)(a.P3F, (t = function(e) {
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
    }({}, u), n = n = {
      className: c.fastTravelButton,
      onClick: d,
      children: [(0, r.jsx)(a.acy, {
        size: "xs"
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        lineClamp: 1,
        children: s.intl.string(s.t.ZvKwYa)
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}