/** Chunk was on 6043 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk584973 = require("./584973.jsx"),
  Chunk725562 = require("./725562.js");

function o(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: r,
    textClassName: o,
    placeholderText: c,
    soloEmojiClassName: d,
    animate: u = true,
    hideTooltip: m = false,
    hideEmoji: p = false,
    children: h
  } = e;
  if (null == t) return null;
  let {
    emoji: f
  } = t, x = null != t.state && "" !== t.state ? t.state : c;
  return (0, a.jsxs)("div", {
    className: l()(s.__invalid_container, n),
    children: [p || null == f ? null : (0, a.jsx)(i.Z, {
      emoji: f,
      className: l()(s.emoji, r, null != d ? {
        [d]: null == x || "" === x
      } : null),
      animate: u,
      hideTooltip: m
    }), null != x && x.length > 0 ? (0, a.jsx)("span", {
      className: o,
      children: x
    }) : null, h]
  })
}