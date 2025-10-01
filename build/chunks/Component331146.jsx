/** Chunk was on 29679 **/
/** chunk id: 331146, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk723047 = require("./723047.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639337 = require("./639337.js");

function m(e) {
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
    className: l()(u.emojiRow, {
      [u.disabled]: i
    }),
    children: [(0, r.jsx)("img", {
      className: u.emojiImage,
      src: o,
      alt: t.name
    }), (0, r.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-md/medium",
      className: u.emojiAlias,
      children: t.name
    }), (0, r.jsx)("div", {
      className: u.deleteButton,
      children: (0, r.jsx)(s.hU, {
        variant: "secondary",
        icon: s.XHJ,
        onClick: () => n(t),
        "aria-label": d.intl.string(d.t.dVS92d),
        disabled: i
      })
    })]
  })
}

function g(e) {
  let {
    tierEmojiIds: t,
    guildId: n,
    onRemoveEmoji: i
  } = e, l = (0, c.Z)(n), s = null != t ? l.filter(e => t.has(e.id)) : [], a = (0, o.mY)();
  return (0, r.jsx)("div", {
    className: u.container,
    children: s.map(e => (0, r.jsx)(m, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: a
    }, e.id))
  })
}