/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(812206);

function i(e) {
  var t;
  let {
    applicationId: n,
    activityConfigs: i,
    applications: o
  } = e, a = null !== (t = null == o ? void 0 : o.find(e => e.id === n)) && void 0 !== t ? t : r.Z.getApplication(n), s = i.find(e => e.application_id === n);
  return null == s || null == a ? null : {
    activity: s,
    application: a
  }
}