/** Chunk was on 99905 **/
t.d(n, {
  C: () => l,
  Y: () => o
});
var r = t(442837),
  c = t(496675),
  i = t(981631);

function l(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Z;
  return null != e && null != e.linkedLobby && n.can(i.Plq.MANAGE_CHANNELS, e) && n.can(i.Plq.VIEW_CHANNEL, e) && n.can(i.Plq.SEND_MESSAGES, e)
}

function o(e) {
  return (0, r.e7)([c.Z], () => l(e, c.Z))
}