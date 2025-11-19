/** Chunk was on 65347 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk584973 = require("./584973.jsx"),
  Chunk822143 = require("./822143.js");

function o(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: l,
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
    className: i()(s.__invalid_container, n),
    children: [p || null == x ? null : (0, a.jsx)(r.Z, {
      emoji: x,
      className: i()(s.emoji, l, null != d ? {
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