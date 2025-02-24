/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(978003),
  i = n(786761),
  o = n(901461),
  a = n(981631);

function s(e, t) {
  return !(null == t || e.author.id !== t || e.state !== a.yb.SENT || (0, o.Z)(e) || !(0, i.lp)(e) || e.hasFlag(a.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, r.Z)(e))
}