/** Chunk was on 384 **/
/** chunk id: 331146, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk723047 = require("./723047.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk562337 = require("./562337.js");

function g(e) {
  let {
    emoji: t,
    onRemoveEmoji: n,
    disabled: i = false
  } = e, o = a.ZP.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return (0, r.jsxs)("div", {
    className: l()(d.emojiRow, {
      [d.disabled]: i
    }),
    children: [(0, r.jsx)("img", {
      className: d.emojiImage,
      src: o,
      alt: t.name
    }), (0, r.jsx)(s.Text, {
      color: "text-strong",
      variant: "text-md/medium",
      className: d.emojiAlias,
      children: t.name
    }), (0, r.jsx)("div", {
      className: d.deleteButton,
      children: (0, r.jsx)(s.hU, {
        variant: "secondary",
        icon: s.XHJ,
        onClick: () => n(t),
        "aria-label": u.intl.string(u.t.dVS92c),
        disabled: i
      })
    })]
  })
}

function m(e) {
  let {
    tierEmojiIds: t,
    guildId: n,
    onRemoveEmoji: i
  } = e, l = (0, c.Z)(n), s = null != t ? l.filter(e => t.has(e.id)) : [], a = (0, o.mY)();
  return (0, r.jsx)("div", {
    className: d.container,
    children: s.map(e => (0, r.jsx)(g, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: a
    }, e.id))
  })
}