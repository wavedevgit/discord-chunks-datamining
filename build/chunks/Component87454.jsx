/** Chunk was on 42340 **/
/** chunk id: 87454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk581883 = require("./581883.js"),
  Chunk428967 = require("./428967.js"),
  Chunk972118 = require("./972118.js");
let d = Chunk647438.memo(function(e) {
  let {
    className: t,
    content: n,
    onChange: d
  } = e, u = l.z[n], {
    isDismissed: m,
    handleToggleDismissState: p
  } = (0, c.Z)(u), [h, x] = r.useState(false), g = r.useCallback(() => {
    null == d || d(n), p()
  }, [d, p, n]), f = r.useCallback(e => {
    e.preventDefault(), x(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.Kqy, {
      className: t,
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)(i.hU, {
        size: "sm",
        variant: "icon-only",
        icon: h ? i.C2q : i.zTD,
        onClick: f,
        "aria-label": h ? "Copied" : "Copy"
      }), (0, a.jsx)(i.rsf, {
        label: "".concat(n.toLowerCase(), " (").concat(l.z[n], ")"),
        description: (0, s.qh)(u) ? function(e) {
          var t, n;
          let a = null == (n = o.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e];
          if (null == a) return null;
          let r = [],
            {
              lastDismissedVersion: l,
              lastDismissedAtMs: i,
              lastDismissedObjectId: s
            } = a;
          if (true !== l && 0 !== l && r.push("last_dismissed_version: ".concat(l)), true !== i) {
            let e = Number(i),
              t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
            r.push("last_dismissed_at: ".concat(t))
          }
          return (true !== s && "0" !== s && r.push("last_dismissed_object_id: ".concat(s)), 0 === r.length) ? null : r.join(", ")
        }(u) : null,
        checked: m,
        onChange: g
      })]
    }), (0, a.jsx)(i.izJ, {})]
  })
})