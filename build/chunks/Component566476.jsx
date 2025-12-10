/** Chunk was on 384 **/
/** chunk id: 566476, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk147721 = require("./147721.js");

function u(e) {
  let {
    className: t,
    avatarURL: n,
    name: i,
    bot: u,
    verifiedBot: g,
    userTag: m
  } = e, p = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation);
  return (0, r.jsxs)("div", {
    className: l()(d.container, t),
    children: [(0, r.jsx)(s.qEK, {
      className: d.avatar,
      src: n,
      size: s.EFr.SIZE_24,
      "aria-label": i
    }), (0, r.jsxs)("div", {
      className: d.textContainer,
      children: [(0, r.jsx)(s.Text, {
        tag: "span",
        className: d.name,
        color: "header-primary",
        variant: "text-sm/semibold",
        children: i
      }), u ? (0, r.jsx)(o.Z, {
        className: d.botTag,
        verified: g
      }) : null, p ? null : (0, r.jsx)(s.Text, {
        tag: "span",
        color: "interactive-text-default",
        className: d.userTag,
        variant: "text-sm/normal",
        children: m
      })]
    })]
  })
}