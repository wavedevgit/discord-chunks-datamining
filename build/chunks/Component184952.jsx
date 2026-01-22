/** Chunk was on 16939 **/
/** chunk id: 184952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk137898 = require("./137898.js");

function o(e) {
  let {
    displayName: t,
    description: n,
    icon: o,
    isLoading: c,
    isConnected: s,
    canConnect: u,
    onConnect: d
  } = e;
  return (0, l.jsxs)("div", {
    className: a.Nr,
    children: [(0, l.jsxs)("div", {
      className: a.hu,
      children: [(0, l.jsx)("div", {
        className: a.Kk,
        children: o
      }), (0, l.jsxs)("div", {
        className: a.P_,
        children: [(0, l.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: t
        }), null != n && n.length > 0 && (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: n
        })]
      })]
    }), c ? (0, l.jsx)(r.y$y, {}) : s ? (0, l.jsxs)("div", {
      className: a.ul,
      children: [(0, l.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: i.intl.string(i.t["LV+CXH"])
      }), (0, l.jsx)(r.yr3, {
        size: "custom",
        width: 20,
        height: 20,
        color: "var(--status-positive)"
      })]
    }) : (0, l.jsx)(r.Button, {
      variant: "primary",
      size: "sm",
      onClick: d,
      text: i.intl.string(i.t.S0W8Z5),
      disabled: !u
    })]
  })
}