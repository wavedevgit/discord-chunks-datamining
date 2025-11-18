/** Chunk was on 26494 **/
/** chunk id: 826380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851581 = require("./851581.js");

function a(e) {
  let {
    displayName: t,
    description: n,
    icon: a,
    isLoading: c,
    isConnected: s,
    canConnect: u,
    onConnect: d
  } = e;
  return (0, l.jsxs)("div", {
    className: o.card,
    children: [(0, l.jsxs)("div", {
      className: o.leftContent,
      children: [(0, l.jsx)("div", {
        className: o.icon,
        children: a
      }), (0, l.jsxs)("div", {
        className: o.textContent,
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "text-primary",
          children: t
        }), null != n && n.length > 0 && (0, l.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: n
        })]
      })]
    }), c ? (0, l.jsx)(i.$jN, {}) : s ? (0, l.jsxs)("div", {
      className: o.connectedStatus,
      children: [(0, l.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: r.intl.string(r.t["LV+CXH"])
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
      text: r.intl.string(r.t.S0W8Z5),
      disabled: !u
    })]
  })
}