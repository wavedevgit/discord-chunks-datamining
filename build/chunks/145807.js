/** Chunk was on 52272 **/
n.d(t, {
  Z: () => s
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(699516),
  a = n(697451);

function l(e) {
  let {
    message: t,
    channel: n,
    compact: l
  } = e, s = (0, i.e7)([o.Z], () => null != t.interaction && o.Z.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, r.jsx)(a.Z, {
    message: t,
    channel: n,
    compact: l,
    isInteractionUserBlocked: s
  })
}

function s(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(l, {
    message: e,
    channel: t,
    compact: n
  }) : null
}