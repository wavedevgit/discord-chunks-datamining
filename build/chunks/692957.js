/** Chunk was on web.js **/
/** chunk id: 692957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk587895 = require("./587895.js");

function i(e) {
  var t;
  let {
    applicationId: n,
    activityConfigs: i,
    applications: a
  } = e, s = null != (t = null == a ? true : a.find(e => e.id === n)) ? t : r.A.getApplication(n), o = i.find(e => e.application_id === n);
  return null == o || null == s ? null : {
    activity: o,
    application: s
  }
}