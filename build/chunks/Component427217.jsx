/** Chunk was on 837 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk584973 = require("./584973.jsx"),
  Chunk608007 = require("./608007.js");

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
    emoji: x
  } = t, g = null != t.state && "" !== t.state ? t.state : c;
  return (0, a.jsxs)("div", {
    className: l()(s.__invalid_container, n),
    children: [p || null == x ? null : (0, a.jsx)(i.Z, {
      emoji: x,
      className: l()(s.emoji, r, null != d ? {
        [d]: null == g || "" === g
      } : null),
      animate: u,
      hideTooltip: m
    }), null != g && g.length > 0 ? (0, a.jsx)("span", {
      className: o,
      children: g
    }) : null, h]
  })
}