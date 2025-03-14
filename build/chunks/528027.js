/** Chunk was on 30806 **/
n.d(t, {
  Z: () => c
});
var i = n(200651);
n(192379);
var r = n(120356),
  l = n.n(r),
  s = n(596454),
  o = n(377171),
  a = n(403910),
  u = n(549631),
  d = n(630740);

function c(e) {
  var t;
  let {
    guildId: n,
    emojiId: r,
    emojiName: c,
    className: h
  } = e, p = (0, a.Z)(n, r);
  return null != p || null != c ? (0, i.jsx)(s.Z, {
    emojiId: null == p ? void 0 : p.id,
    emojiName: null != c ? c : null == p ? void 0 : p.name,
    animated: null !== (t = null == p ? void 0 : p.animated) && void 0 !== t && t,
    className: l()(d.emojiIcon, h)
  }) : (0, i.jsx)(u.Z, {
    className: l()(d.emojiIcon, h),
    color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}