/** Chunk was on web.js **/
/** chunk id: 625248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => u
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk134861 = require("./134861.js"),
  Chunk528767 = require("./528767.js"),
  Chunk723702 = require("./723702.js"),
  Chunk182892 = require("./182892.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    platform: t
  } = e;
  return !!(0, o.e)(e) || ((0, s.isAndroid)() ? t === l.yTV.ANDROID : (0, s.isIOS)() ? t === l.yTV.IOS : (0, s.isWeb)() ? t === l.yTV.DESKTOP : !!(0, s.isDesktop)() && null != e.application_id && i.A.isConnected(e.application_id) && t === l.yTV.DESKTOP)
}

function u(e) {
  var t, n, i;
  if (null == e) return null;
  let s = e.application_id;
  if (null == s || !(0, r.Lt)(null != (t = e.flags) ? t : 0, l.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
  let o = a.A.getRemoteApplicationActivity(s);
  return null == o || c(o) ? null : (0, r.Lt)(null != (n = o.flags) ? n : 0, l.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) && null != (i = o.platform) ? i : null
}