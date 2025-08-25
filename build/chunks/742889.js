/** Chunk was on web.js **/
/** chunk id: 742889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
}), require("./997841.js");
var Chunk797258 = require("./797258.js"),
  Chunk630388 = require("./630388.js"),
  Chunk535246 = require("./535246.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  var t, n;
  if (!o.l.getConfig({
      location: "isActivityRemoteJoinable"
    }).enableRemoteJoin) returnfalse;
  let s = e.application_id;
  if (null == s || !(0, i.yE)(null != (t = e.flags) ? t : 0, a.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) returnfalse;
  let l = r.Z.getRemoteApplicationActivity(s);
  return null != l && (0, i.yE)(null != (n = l.flags) ? n : 0, a.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)
}