/** Chunk was on 945 **/
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
  } = (0, c.Z)(u), [h, f] = r.useState(false), x = r.useCallback(() => {
    null == d || d(n), p()
  }, [d, p, n]), b = r.useCallback(e => {
    e.preventDefault(), f(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.Kqy, {
      className: t,
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)(l.hU, {
        size: "sm",
        variant: "icon-only",
        icon: h ? l.C2q : l.zTD,
        onClick: b,
        "aria-label": h ? "Copied" : "Copy"
      }), (0, a.jsx)(l.rsf, {
        label: "".concat(n.toLowerCase(), " (").concat(i.z[n], ")"),
        description: (0, o.qh)(u) ? function(e) {
          var t, n;
          let a = null == (n = s.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e];
          if (null == a) return null;
          let r = [],
            {
              lastDismissedVersion: i,
              lastDismissedAtMs: l,
              lastDismissedObjectId: o
            } = a;
          if (true !== i && 0 !== i && r.push("last_dismissed_version: ".concat(i)), true !== l) {
            let e = Number(l),
              t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
            r.push("last_dismissed_at: ".concat(t))
          }
          return (true !== o && "0" !== o && r.push("last_dismissed_object_id: ".concat(o)), 0 === r.length) ? null : r.join(", ")
        }(u) : null,
        checked: m,
        onChange: x
      })]
    }), (0, a.jsx)(l.izJ, {})]
  })
})