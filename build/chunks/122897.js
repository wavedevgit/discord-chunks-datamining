/** Chunk was on 1815 **/
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(524437),
  s = n(481060),
  a = n(63063),
  l = n(78451),
  o = n(695346),
  c = n(838436),
  d = n(973005),
  u = n(726985),
  m = n(981631),
  p = n(388032),
  g = n(729794);

function h() {
  var e;
  let t = o.Xr.useSetting(),
    n = o.UP.useSetting(),
    h = t !== i.Xr.DEFAULT_UNSET ? t : null !== (e = d.O7.get(n)) && void 0 !== e ? e : i.Xr.NON_FRIENDS;
  return (0, r.jsxs)(c.U, {
    setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
    children: [(0, r.jsx)(c.H, {
      header: p.NW.string(p.t.tiCXaG),
      description: p.NW.format(p.t.RvjRRE, {
        appealLink: a.Z.getArticleURL(m.BhN.SAFE_DIRECT_MESSAGING)
      })
    }), (0, r.jsx)(s.FXm, {
      className: g.radioGroup,
      radioItemClassName: g.radioGroupItem,
      value: h,
      options: (0, l.c7)(),
      onChange: e => {
        let {
          value: t
        } = e;
        return o.Xr.updateSetting(t)
      }
    })]
  })
}