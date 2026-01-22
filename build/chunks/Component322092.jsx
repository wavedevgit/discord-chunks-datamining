/** Chunk was on web.js **/
/** chunk id: 322092, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk164974 = require("./164974.js");

function l(e) {
  let {
    message: t,
    error: n,
    onClick: i,
    submitting: l,
    className: c,
    ctaMessage: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(o.kL, c),
    children: [(0, r.jsxs)("div", {
      className: o.FS,
      children: [(0, r.jsx)(s.EpV, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: o.QW
      }), (0, r.jsx)(s.hKd, {
        size: 10,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.hKd, {
          size: 1
        }), (0, r.jsx)(s.Text, {
          className: o.pq,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, r.jsx)(s.Text, {
          className: a()(o.pq, o.z3),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, r.jsx)(s.hKd, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(s.Button, {
      variant: "critical-secondary",
      size: "sm",
      onClick: i,
      text: u,
      loading: l
    })]
  })
}