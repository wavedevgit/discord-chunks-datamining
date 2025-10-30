/** Chunk was on 87665 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk584973 = require("./584973.jsx"),
  Chunk822143 = require("./822143.js");

function s(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: r,
    textClassName: s,
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
    className: l()(o.__invalid_container, n),
    children: [p || null == x ? null : (0, a.jsx)(i.Z, {
      emoji: x,
      className: l()(o.emoji, r, null != d ? {
        [d]: null == g || "" === g
      } : null),
      animate: u,
      hideTooltip: m
    }), null != g && g.length > 0 ? (0, a.jsx)("span", {
      className: s,
      children: g
    }) : null, h]
  })
}