/** Chunk was on 99120 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(596454),
  a = n(377171),
  s = n(403910),
  c = n(549631),
  u = n(182828);

function d(e) {
  var t;
  let {
    guildId: n,
    emojiId: i,
    emojiName: d,
    className: p
  } = e, f = (0, s.Z)(n, i);
  return null != f || null != d ? (0, r.jsx)(l.Z, {
    emojiId: null == f ? void 0 : f.id,
    emojiName: null != d ? d : null == f ? void 0 : f.name,
    animated: null !== (t = null == f ? void 0 : f.animated) && void 0 !== t && t,
    className: o()(u.emojiIcon, p)
  }) : (0, r.jsx)(c.Z, {
    className: o()(u.emojiIcon, p),
    color: a.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}