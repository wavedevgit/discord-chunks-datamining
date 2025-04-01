/** Chunk was on 13323 **/
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(584973),
  o = n(609523);

function l(e) {
  let {
    activity: t,
    className: n,
    emojiClassName: i,
    textClassName: l,
    placeholderText: c,
    soloEmojiClassName: d,
    animate: u = !0,
    hideTooltip: m = !1,
    hideEmoji: g = !1,
    children: p
  } = e;
  if (null == t) return null;
  let {
    emoji: h
  } = t, f = null != t.state && "" !== t.state ? t.state : c;
  return (0, r.jsxs)("div", {
    className: s()(o.__invalid_container, n),
    children: [g || null == h ? null : (0, r.jsx)(a.Z, {
      emoji: h,
      className: s()(o.emoji, i, null != d ? {
        [d]: null == f || "" === f
      } : null),
      animate: u,
      hideTooltip: m
    }), null != f && f.length > 0 ? (0, r.jsx)("span", {
      className: l,
      children: f
    }) : null, p]
  })
}