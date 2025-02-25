/** Chunk was on 79477 **/
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var l = n(442837),
  s = n(481060),
  i = n(314897),
  a = n(938475),
  o = n(499596),
  c = n(537135),
  u = n(388032),
  d = n(382840);

function m(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([i.default], () => i.default.getId()), m = (0, l.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(t), [t]);
  return (0, r.jsx)(s.xJW, {
    title: u.NW.string(u.t.KPuWsr),
    className: d.modalContent,
    titleClassName: d.formItemTitle,
    children: (0, r.jsx)(c.Z, {
      children: (0, r.jsx)(o.Z, {
        channel: t,
        users: m.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== n
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        })
      })
    })
  })
}