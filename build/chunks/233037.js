/** Chunk was on 79477 **/
n.d(t, {
  Z: () => p
});
var l = n(200651);
n(192379);
var r = n(442837),
  s = n(481060),
  i = n(984933),
  a = n(430824),
  o = n(496675),
  c = n(594174),
  u = n(938475),
  d = n(102172),
  m = n(499596),
  g = n(148381),
  h = n(388032),
  x = n(454778);

function p(e) {
  let {
    selectedChannelId: t,
    guildId: n,
    onChangeSelectedChannelId: p
  } = e, v = (0, r.e7)([c.default], () => c.default.getCurrentUser()), f = (0, r.e7)([a.Z, i.ZP, o.Z], () => (0, d.h_)(i.ZP.getChannels(n), a.Z, o.Z)), j = (0, r.e7)([u.ZP], () => u.ZP.getVoiceStates(n)), S = f.map(e => {
    var n;
    return {
      name: (0, l.jsx)(m.Z, {
        channel: e,
        users: null === (n = j[e.id]) || void 0 === n ? void 0 : n.filter(e => {
          let {
            user: t
          } = e;
          return t.id !== (null == v ? void 0 : v.id)
        }).map(e => {
          let {
            user: t
          } = e;
          return t
        }),
        selected: e.id === t
      }),
      value: e.id
    }
  });
  return (0, l.jsx)(g.Z, {
    title: h.NW.string(h.t["eg7R/v"]),
    scrollerInnerClassName: x.channelSelectScrollerInner,
    children: (0, l.jsx)(s.FXm, {
      options: S,
      value: t,
      itemInfoClassName: x.channelInfoWrapper,
      itemTitleClassName: x.channelTitleWrapper,
      onChange: e => {
        let {
          value: t
        } = e;
        return p(t)
      }
    })
  })
}