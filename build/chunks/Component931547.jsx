/** Chunk was on web.js **/
/** chunk id: 931547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk740313 = require("./740313.js");

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
    className: a()(s.container, c),
    children: [(0, r.jsxs)("div", {
      className: s.textContainer,
      children: [(0, r.jsx)(o.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: s.warningIcon
      }), (0, r.jsx)(o.LZC, {
        size: 10,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.LZC, {
          size: 1
        }), (0, r.jsx)(o.Text, {
          className: s.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, r.jsx)(o.Text, {
          className: a()(s.info, s.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, r.jsx)(o.LZC, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(o.Button, {
      variant: "critical-secondary",
      size: "sm",
      onClick: i,
      text: u,
      loading: l
    })]
  })
}