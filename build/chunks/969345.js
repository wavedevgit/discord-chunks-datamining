/** Chunk was on web.js **/
/** chunk id: 969345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk812206 = require("./812206.js");

function i(e) {
  var t;
  let {
    applicationId: n,
    activityConfigs: i,
    applications: a
  } = e, o = null != (t = null == a ? true : a.find(e => e.id === n)) ? t : r.Z.getApplication(n), s = i.find(e => e.application_id === n);
  return null == s || null == o ? null : {
    activity: s,
    application: o
  }
}