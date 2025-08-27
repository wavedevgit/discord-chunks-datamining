/** Chunk was on web.js **/
/** chunk id: 427217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk584973 = require("./584973.jsx"),
  Chunk608007 = require("./608007.js");

function l(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: i,
    textClassName: l,
    placeholderText: c,
    soloEmojiClassName: u,
    animate: d = true,
    hideTooltip: f = false,
    hideEmoji: _ = false,
    children: p
  } = e;
  if (null == t) return null;
  let {
    emoji: h
  } = t, m = null != t.state && "" !== t.state ? t.state : c;
  return (0, r.jsxs)("div", {
    className: a()(s.__invalid_container, n),
    children: [_ || null == h ? null : (0, r.jsx)(o.Z, {
      emoji: h,
      className: a()(s.emoji, i, null != u ? {
        [u]: null == m || "" === m
      } : null),
      animate: d,
      hideTooltip: f
    }), null != m && m.length > 0 ? (0, r.jsx)("span", {
      className: l,
      children: m
    }) : null, p]
  })
}