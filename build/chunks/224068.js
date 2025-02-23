/** Chunk was on 2026 (61eedd5611521d75.js) **/
n.d(t, {
  Z: () => d
}), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
  a = n.n(r),
  l = n(278074),
  s = n(979554),
  o = n(481060),
  c = n(388032),
  u = n(548100);

function d(e) {
  var t;
  let {
    product: n,
    isDarkText: r = !1
  } = e, d = (t = n.type, (0, l.EQ)(t).with(s.Z.AVATAR_DECORATION, () => c.NW.string(c.t["7v0T9P"])).with(s.Z.PROFILE_EFFECT, () => c.NW.string(c.t.wR5wOj)).otherwise(() => null));
  return null === d ? null : (0, i.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: a()([u.container, r ? u.darkText : u.lightText]),
    children: d
  })
}