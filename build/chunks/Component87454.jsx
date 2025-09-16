/** Chunk was on web.js **/
/** chunk id: 87454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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
let _ = Chunk647438.memo(function(e) {
  let {
    className: t,
    content: n,
    onChange: a
  } = e, l = o.z[n], {
    isDismissed: f,
    handleToggleDismissState: _
  } = (0, u.Z)(l), [h, m] = i.useState(false), g = i.useCallback(() => {
    null == a || a(n), _()
  }, [a, _, n]), E = i.useCallback(e => {
    e.preventDefault(), m(true), navigator.clipboard.writeText(n.toLowerCase())
  }, [n]);
  return (0, r.jsx)(s.j7V, {
    value: f,
    onChange: g,
    className: t,
    children: (0, r.jsxs)("div", {
      className: d.container,
      children: [(0, r.jsxs)("div", {
        className: d.textContainer,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          className: d.text,
          children: "".concat(n.toLowerCase(), " (").concat(o.z[n], ")")
        }), (0, c.qh)(l) && (0, r.jsx)(p, {
          content: l
        })]
      }), (0, r.jsx)(s.hU, {
        size: "sm",
        variant: "icon-only",
        icon: h ? s.C2q : s.zTD,
        onClick: E,
        "aria-label": h ? "Copied" : "Copy"
      })]
    })
  })
});

function p(e) {
  let {
    content: t
  } = e, n = (0, a.e7)([l.Z], () => {
    var e, n;
    return null == (n = l.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? true : e[t]
  });
  if (null == n) return null;
  let i = [],
    {
      lastDismissedVersion: o,
      lastDismissedAtMs: c,
      lastDismissedObjectId: u
    } = n;
  if (true !== o && 0 !== o && i.push("last_dismissed_version: ".concat(o)), true !== c) {
    let e = Number(c),
      t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
    i.push("last_dismissed_at: ".concat(t))
  }
  return (true !== u && "0" !== u && i.push("last_dismissed_object_id: ".concat(u)), 0 === i.length) ? null : (0, r.jsx)(s.Text, {
    variant: "text-xs/normal",
    className: f.marginTop4,
    children: i.join(", ")
  })
}