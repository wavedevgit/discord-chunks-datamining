/** Chunk was on 87557 **/
/** chunk id: 302223, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk51183 = require("./51183.jsx"),
  Chunk802455 = require("./802455.js");

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
    className: r()(s.__invalid_container, n),
    children: [p || null == x ? null : (0, a.jsx)(i.A, {
      emoji: x,
      className: r()(s.Z, l, null != d ? {
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