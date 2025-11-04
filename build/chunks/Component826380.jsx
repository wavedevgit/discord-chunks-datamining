/** Chunk was on 26494 **/
/** chunk id: 826380, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk462097 = require("./462097.js");

function r(e) {
  let {
    displayName: n,
    description: t,
    icon: r,
    isLoading: s,
    isConnected: u,
    canConnect: c,
    onConnect: d
  } = e;
  return (0, l.jsxs)("div", {
    className: o.card,
    children: [(0, l.jsxs)("div", {
      className: o.leftContent,
      children: [(0, l.jsx)("div", {
        className: o.icon,
        children: r
      }), (0, l.jsxs)("div", {
        className: o.textContent,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: n
        }), null != t && t.length > 0 && (0, l.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: t
        })]
      })]
    }), s ? (0, l.jsx)(i.$jN, {}) : u ? (0, l.jsxs)("div", {
      className: o.connectedStatus,
      children: [(0, l.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: a.intl.string(a.t["LV+CXH"])
      }), (0, l.jsx)(i.owK, {
        size: "custom",
        width: 20,
        height: 20,
        color: "var(--status-positive)"
      })]
    }) : (0, l.jsx)(i.Button, {
      variant: "primary",
      size: "sm",
      onClick: d,
      text: a.intl.string(a.t.S0W8Z5),
      disabled: !c
    })]
  })
}