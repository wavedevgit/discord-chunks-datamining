/** Chunk was on 52694 **/
/** chunk id: 302223, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk51183 = require("./51183.jsx"),
  Chunk802455 = require("./802455.js");

function s(e) {
  let {
    activity: t,
    className: r,
    emojiClassName: a,
    textClassName: s,
    placeholderText: i,
    soloEmojiClassName: o,
    animate: d = true,
    hideTooltip: f = false,
    hideEmoji: m = false,
    children: x
  } = e;
  if (null == t) return null;
  let {
    emoji: h
  } = t, b = null != t.state && "" !== t.state ? t.state : i;
  return (0, n.jsxs)("div", {
    className: c()(u.__invalid_container, r),
    children: [m || null == h ? null : (0, n.jsx)(l.A, {
      emoji: h,
      className: c()(u.Z, a, null != o ? {
        [o]: null == b || "" === b
      } : null),
      animate: d,
      hideTooltip: f
    }), null != b && b.length > 0 ? (0, n.jsx)("span", {
      className: s,
      children: b
    }) : null, x]
  })
}