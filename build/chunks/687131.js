/** Chunk was on web.js **/
/** chunk id: 687131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => d
}), require("./997841.js");
var Chunk757266 = require("./757266.js"),
  Chunk797258 = require("./797258.js"),
  Chunk630388 = require("./630388.js"),
  Chunk358085 = require("./358085.js"),
  Chunk535246 = require("./535246.js"),
  Chunk212517 = require("./212517.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    platform: t
  } = e;
  return !!(0, l.D)(e) || ((0, o.isAndroid)() ? t === c.M7m.ANDROID : (0, o.isIOS)() ? t === c.M7m.IOS : (0, o.isWeb)() ? t === c.M7m.DESKTOP : !!(0, o.isDesktop)() && null != e.application_id && r.Z.isConnected(e.application_id) && t === c.M7m.DESKTOP)
}

function d(e) {
  var t, n, r;
  if (!(0, s.v)() || null == e) return null;
  let o = e.application_id;
  if (null == o || !(0, a.yE)(null != (t = e.flags) ? t : 0, c.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
  let l = i.Z.getRemoteApplicationActivity(o);
  return null == l || u(l) ? null : (0, a.yE)(null != (n = l.flags) ? n : 0, c.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) && null != (r = l.platform) ? r : null
}