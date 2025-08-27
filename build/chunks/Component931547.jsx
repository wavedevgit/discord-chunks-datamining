/** Chunk was on web.js **/
/** chunk id: 931547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740313 = require("./740313.js");

function c(e) {
  let {
    message: t,
    error: n,
    onClick: i,
    submitting: c,
    className: u,
    ctaMessage: d
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.container, u),
    children: [(0, r.jsxs)("div", {
      className: l.textContainer,
      children: [(0, r.jsx)(s.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: l.warningIcon
      }), (0, r.jsx)(s.LZC, {
        size: 10,
        horizontal: true
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.LZC, {
          size: 1
        }), (0, r.jsx)(s.Text, {
          className: l.info,
          variant: "text-sm/normal",
          children: t
        }), null != n && (0, r.jsx)(s.Text, {
          className: a()(l.info, l.error),
          variant: "text-sm/normal",
          children: n
        })]
      })]
    }), (0, r.jsx)(s.LZC, {
      size: 16,
      horizontal: true
    }), (0, r.jsx)(o.zx, {
      className: l.undoButton,
      color: o.zx.Colors.LINK,
      look: o.zx.Looks.LINK,
      size: o.zx.Sizes.ICON,
      onClick: i,
      submitting: c,
      children: d
    })]
  })
}