/** Chunk was on 51711 **/
/** chunk id: 87454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk581883 = require("./581883.js"),
  Chunk428967 = require("./428967.js"),
  Chunk972118 = require("./972118.js"),
  Chunk764668 = require("./764668.js"),
  Chunk197571 = require("./197571.js");
let p = Chunk647438.memo(function(e) {
  let {
    className: t,
    content: n,
    onChange: i
  } = e, o = l.z[n], {
    isDismissed: m,
    handleToggleDismissState: p
  } = (0, d.Z)(o), [x, f] = r.useState(false), b = r.useCallback(() => {
    null == i || i(n), p()
  }, [i, p, n]), g = r.useCallback(e => {
    e.preventDefault(), f(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, a.jsx)(s.j7V, {
    value: m,
    onChange: b,
    className: t,
    children: (0, a.jsxs)("div", {
      className: u.container,
      children: [(0, a.jsxs)("div", {
        className: u.textContainer,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          className: u.text,
          children: "".concat(n.toLowerCase(), " (").concat(l.z[n], ")")
        }), (0, c.qh)(o) && (0, a.jsx)(h, {
          content: o
        })]
      }), (0, a.jsx)(s.hU, {
        size: "sm",
        variant: "icon-only",
        icon: x ? s.C2q : s.zTD,
        onClick: g,
        "aria-label": x ? "Copied" : "Copy"
      })]
    })
  })
});

function h(e) {
  let {
    content: t
  } = e, n = (0, i.e7)([o.Z], () => {
    var e, n;
    return null == (n = o.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? true : e[t]
  });
  if (null == n) return null;
  let r = [],
    {
      lastDismissedVersion: l,
      lastDismissedAtMs: c,
      lastDismissedObjectId: d
    } = n;
  if (true !== l && 0 !== l && r.push("last_dismissed_version: ".concat(l)), true !== c) {
    let e = Number(c),
      t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
    r.push("last_dismissed_at: ".concat(t))
  }
  return (true !== d && "0" !== d && r.push("last_dismissed_object_id: ".concat(d)), 0 === r.length) ? null : (0, a.jsx)(s.Text, {
    variant: "text-xs/normal",
    className: m.marginTop4,
    children: r.join(", ")
  })
}