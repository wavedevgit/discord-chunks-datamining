/** Chunk was on 45476 **/
/** chunk id: 87454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk581883 = require("./581883.js"),
  Chunk428967 = require("./428967.js"),
  Chunk972118 = require("./972118.js");
let d = Chunk473749.memo(function(e) {
  let {
    className: t,
    content: n,
    onChange: d
  } = e, u = i.z[n], {
    isDismissed: m,
    handleToggleDismissState: p
  } = (0, c.Z)(u), [h, x] = l.useState(false), g = l.useCallback(() => {
    null == d || d(n), p()
  }, [d, p, n]), f = l.useCallback(e => {
    e.preventDefault(), x(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(r.Kqy, {
      className: t,
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)(r.hU, {
        size: "sm",
        variant: "icon-only",
        icon: h ? r.C2q : r.zTD,
        onClick: f,
        "aria-label": h ? "Copied" : "Copy"
      }), (0, a.jsx)(r.rsf, {
        label: "".concat(n.toLowerCase(), " (").concat(i.z[n], ")"),
        description: (0, o.qh)(u) ? function(e) {
          var t, n;
          let a = null == (n = s.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e];
          if (null == a) return null;
          let l = [],
            {
              lastDismissedVersion: i,
              lastDismissedAtMs: r,
              lastDismissedObjectId: o
            } = a;
          if (true !== i && 0 !== i && l.push("last_dismissed_version: ".concat(i)), true !== r) {
            let e = Number(r),
              t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
            l.push("last_dismissed_at: ".concat(t))
          }
          return (true !== o && "0" !== o && l.push("last_dismissed_object_id: ".concat(o)), 0 === l.length) ? null : l.join(", ")
        }(u) : null,
        checked: m,
        onChange: g
      })]
    }), (0, a.jsx)(r.izJ, {})]
  })
})