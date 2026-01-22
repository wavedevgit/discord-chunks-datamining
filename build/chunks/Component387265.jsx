/** Chunk was on 22477 **/
/** chunk id: 387265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk617617 = require("./617617.js"),
  Chunk256787 = require("./256787.js"),
  Chunk20439 = require("./20439.js");
let d = Chunk64700.memo(function(e) {
  let {
    className: t,
    content: n,
    onChange: d
  } = e, u = i.M[n], {
    isDismissed: m,
    handleToggleDismissState: p
  } = (0, c.A)(u), [h, f] = l.useState(false), x = l.useCallback(() => {
    null == d || d(n), p()
  }, [d, p, n]), b = l.useCallback(e => {
    e.preventDefault(), f(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(r.BJc, {
      className: t,
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)(r.K0, {
        size: "sm",
        variant: "icon-only",
        icon: h ? r.ODX : r.sjE,
        onClick: b,
        "aria-label": h ? "Copied" : "Copy"
      }), (0, a.jsx)(r.dOG, {
        label: "".concat(n.toLowerCase(), " (").concat(i.M[n], ")"),
        description: (0, o.Zm)(u) ? function(e) {
          var t, n;
          let a = null == (n = s.A.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e];
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
        onChange: x
      })]
    }), (0, a.jsx)(r.cGx, {})]
  })
})