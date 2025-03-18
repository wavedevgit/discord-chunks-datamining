/** Chunk was on 86915 **/
"use strict";
n.d(t, {
  T: () => a
});
var i = n(526120),
  r = n(563534),
  l = n(734893),
  s = n(931261);
async function a(e, t) {
  if (null == e || !(0, s.s)(e)) return;
  let n = r.Z.getSettings(e);
  return (n === r.P && (await (0, i.cP)(e), n = r.Z.getSettings(e)), n === r.P || null == n) ? void 0 : null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t) ? l.j.TODO : null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t) ? l.j.RESOURCE : void 0
}