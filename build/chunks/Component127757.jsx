/** Chunk was on 47841 **/
/** chunk id: 127757, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  d: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk486020 = require("./486020.js"),
  Chunk11351 = require("./11351.js"),
  Chunk320137 = require("./320137.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86045 = require("./86045.js");

function f(e) {
  let {
    emoji: t,
    onRemoveEmoji: n,
    disabled: i = false
  } = e, c = a.Ay.getEmojiURL({
    id: t.id,
    animated: t.animated,
    size: 32
  });
  return (0, r.jsxs)("div", {
    className: l()(u.nI, {
      [u.r9]: i
    }),
    children: [(0, r.jsx)("img", {
      className: u.mp,
      src: c,
      alt: t.name
    }), (0, r.jsx)(s.Text, {
      color: "text-strong",
      variant: "text-md/medium",
      className: u.JN,
      children: t.name
    }), (0, r.jsx)("div", {
      className: u.G5,
      children: (0, r.jsx)(s.K0, {
        variant: "secondary",
        icon: s.ucK,
        onClick: () => n(t),
        "aria-label": d.intl.string(d.t.dVS92c),
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
  } = e, l = (0, o.A)(n), s = null != t ? l.filter(e => t.has(e.id)) : [], a = (0, c.gN)();
  return (0, r.jsx)("div", {
    className: u.kL,
    children: s.map(e => (0, r.jsx)(f, {
      emoji: e,
      onRemoveEmoji: () => i(e),
      disabled: a
    }, e.id))
  })
}