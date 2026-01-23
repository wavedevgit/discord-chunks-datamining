/** Chunk was on 65599 **/
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
  } = e, u = r.M[n], {
    isDismissed: m,
    handleToggleDismissState: p
  } = (0, c.A)(u), [h, x] = l.useState(false), g = l.useCallback(() => {
    null == d || d(n), p()
  }, [d, p, n]), f = l.useCallback(e => {
    e.preventDefault(), x(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.BJc, {
      className: t,
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)(i.K0, {
        size: "sm",
        variant: "icon-only",
        icon: h ? i.ODX : i.sjE,
        onClick: f,
        "aria-label": h ? "Copied" : "Copy"
      }), (0, a.jsx)(i.dOG, {
        label: "".concat(n.toLowerCase(), " (").concat(r.M[n], ")"),
        description: (0, o.Zm)(u) ? function(e) {
          var t, n;
          let a = null == (n = s.A.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e];
          if (null == a) return null;
          let l = [],
            {
              lastDismissedVersion: r,
              lastDismissedAtMs: i,
              lastDismissedObjectId: o
            } = a;
          if (true !== r && 0 !== r && l.push("last_dismissed_version: ".concat(r)), true !== i) {
            let e = Number(i),
              t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
            l.push("last_dismissed_at: ".concat(t))
          }
          return (true !== o && "0" !== o && l.push("last_dismissed_object_id: ".concat(o)), 0 === l.length) ? null : l.join(", ")
        }(u) : null,
        checked: m,
        onChange: g
      })]
    }), (0, a.jsx)(i.cGx, {})]
  })
})