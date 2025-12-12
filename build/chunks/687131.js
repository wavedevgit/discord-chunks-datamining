/** Chunk was on web.js **/
/** chunk id: 687131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => u
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk757266 = require("./757266.js"),
  Chunk797258 = require("./797258.js"),
  Chunk358085 = require("./358085.js"),
  Chunk212517 = require("./212517.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    platform: t
  } = e;
  return !!(0, s.D)(e) || ((0, a.isAndroid)() ? t === l.M7m.ANDROID : (0, a.isIOS)() ? t === l.M7m.IOS : (0, a.isWeb)() ? t === l.M7m.DESKTOP : !!(0, a.isDesktop)() && null != e.application_id && i.Z.isConnected(e.application_id) && t === l.M7m.DESKTOP)
}

function u(e) {
  var t, n, i;
  if (null == e) return null;
  let a = e.application_id;
  if (null == a || !(0, r.yE)(null != (t = e.flags) ? t : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
  let s = o.Z.getRemoteApplicationActivity(a);
  return null == s || c(s) ? null : (0, r.yE)(null != (n = s.flags) ? n : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) && null != (i = s.platform) ? i : null
}