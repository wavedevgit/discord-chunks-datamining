/** Chunk was on 53494 **/
n.d(t, {
  Z: () => s
});
var r = n(442837),
  i = n(592125),
  o = n(938475),
  l = n(853856),
  a = n(981631);

function s(e) {
  return (0, r.cj)([o.ZP, i.Z, l.Z], () => {
    if (e !== a.I_8) return o.ZP.getVoiceStates(e);
    let t = l.Z.getFavoriteChannels(),
      n = {};
    for (let e in t) {
      let t = i.Z.getChannel(e);
      null != t && (n[e] = o.ZP.getVoiceStatesForChannel(t))
    }
    return n
  }, [e])
}