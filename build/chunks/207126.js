/** Chunk was on 52272 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(422034),
  a = n(938475),
  l = n(626414);

function s(e) {
  let {
    channel: t
  } = e;
  if (null == t) return null;
  let n = a.ZP.getVoiceStatesForChannel(t).slice(0, 6),
    s = n.map((e, t) => {
      let {
        user: a
      } = e;
      return (0, r.jsx)(o.O, {
        affinity: a,
        applyMask: t !== n.length - 1,
        size: i.EFr.SIZE_20
      }, a.id)
    });
  return (0, r.jsx)("div", {
    className: l.avatars,
    children: s
  })
}