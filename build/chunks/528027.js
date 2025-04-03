/** Chunk was on 76607 **/
r.d(t, {
  Z: () => c
});
var n = r(200651);
r(192379);
var h = r(120356),
  v = r.n(h),
  i = r(596454),
  l = r(377171),
  o = r(403910),
  a = r(549631),
  s = r(350715);

function c(e) {
  var t;
  let {
    guildId: r,
    emojiId: h,
    emojiName: c,
    className: f
  } = e, p = (0, o.Z)(r, h);
  return null != p || null != c ? (0, n.jsx)(i.Z, {
    emojiId: null == p ? void 0 : p.id,
    emojiName: null != c ? c : null == p ? void 0 : p.name,
    animated: null !== (t = null == p ? void 0 : p.animated) && void 0 !== t && t,
    className: v()(s.emojiIcon, f)
  }) : (0, n.jsx)(a.Z, {
    className: v()(s.emojiIcon, f),
    color: l.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}