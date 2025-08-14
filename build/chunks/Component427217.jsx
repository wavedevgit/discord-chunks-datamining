/** Chunk was on 7384 **/
/** chunk id: 427217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    children: g
  } = e;
  if (null == t) return null;
  let {
    emoji: h
  } = t, f = null != t.state && "" !== t.state ? t.state : c;
  return (0, i.jsxs)("div", {
    className: s()(l.__invalid_container, n),
    children: [p || null == h ? null : (0, i.jsx)(a.Z, {
      emoji: h,
      className: s()(l.emoji, r, null != d ? {
        [d]: null == f || "" === f
      } : null),
      animate: u,
      hideTooltip: m
    }), null != f && f.length > 0 ? (0, i.jsx)("span", {
      className: o,
      children: f
    }) : null, g]
  })
}