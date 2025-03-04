/** Chunk was on 53494 **/
n.d(t, {
  ZP: () => o
});
var r = n(829750),
  i = n(981631);

function o(e) {
  let {
    channel: t,
    locked: n,
    video: o,
    selected: l
  } = e;
  return function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: o = !0
    } = e, {
      limit: l
    } = (0, r.Z)(t), a = -1;
    return (t.userLimit > 0 && (a = t.userLimit), n && l > 0 && (a = a > 0 ? Math.min(a, l) : l), o && a === i.xGv) ? 0 : a
  }({
    channel: t,
    video: o
  }) > 0 && !n && !l
}