/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(442837),
  i = n(314897),
  o = n(317381),
  a = n(413458);

function s(e) {
  let t = i.default.getId(),
    {
      userActivity: n,
      inActivity: s
    } = (0, r.cj)([o.ZP], () => {
      let n = o.ZP.getSelfEmbeddedActivityForChannel(e),
        r = o.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == n ? void 0 : n.applicationId)),
        i = !1;
      if ((null == r ? void 0 : r.participants) != null) {
        var s;
        i = (null == r ? void 0 : null === (s = r.participants) || void 0 === s ? void 0 : s.find(e => (0, a.J)(e))) != null
      } else(null == r ? void 0 : r.userIds) != null && (i = r.userIds.has(t));
      return {
        userActivity: n,
        inActivity: null != i && i
      }
    });
  return {
    userActivity: n,
    inActivity: s
  }
}