/** Chunk was on 13323 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(695346),
  s = n(682578),
  a = n(838436),
  o = n(51331),
  l = n(726985),
  c = n(388032);

function d() {
  var e;
  let t = null === (e = (0, s.J)()) || void 0 === e || e,
    n = i.DC.useSetting();
  return (0, r.jsx)(a.U, {
    setting: l.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2,
    children: (0, r.jsx)(o.Z, {
      title: c.NW.string(c.t["L+yTsb"]),
      value: n,
      onChange: i.DC.updateSetting,
      disabled: !t,
      note: c.NW.string(c.t.hiM8pa)
    })
  })
}