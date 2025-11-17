/** Chunk was on 23087 **/
/** chunk id: 29131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk151459 = require("./151459.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    onClose: t
  } = e, {
    showSuggestions: s,
    showActivityTicker: l,
    setShowSuggestions: u,
    setShowActivityTicker: b
  } = (0, o.Z)(), d = i.useCallback(() => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("24378").then(n.bind(n, 717756));
      return t => (0, r.jsx)(e, function(e) {
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
      }({}, t))
    }), t()
  }, [t]);
  return (0, r.jsxs)(c.v2r, {
    navId: "friends-popout-settings",
    onClose: t,
    "aria-label": a.intl.string(a.t["3D5yo/"]),
    onSelect: () => {},
    children: [(0, r.jsx)(c.sNh, {
      id: "create-group",
      label: "Create Group",
      action: d
    }), (0, r.jsx)(c.S89, {
      id: "show-suggestions",
      label: "Show Suggestions",
      checked: s,
      action: () => u(!s)
    }), (0, r.jsx)(c.S89, {
      id: "show-activity-ticker",
      label: "Show Activity Ticker",
      checked: l,
      action: () => b(!l)
    })]
  })
}