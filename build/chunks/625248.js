/** Chunk was on 92917 **/
/** chunk id: 625248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => c
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk134861 = require("./134861.js"),
  Chunk528767 = require("./528767.js"),
  Chunk723702 = require("./723702.js"),
  Chunk182892 = require("./182892.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  var t, n, c;
  if (null == e) return null;
  let u = e.application_id;
  if (null == u || !(0, r.Lt)(null != (t = e.flags) ? t : 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
  let d = l.A.getRemoteApplicationActivity(u);
  return null == d || function(e) {
    let {
      platform: t
    } = e;
    return !!(0, s.e)(e) || ((0, a.isAndroid)() ? t === o.yTV.ANDROID : (0, a.isIOS)() ? t === o.yTV.IOS : (0, a.isWeb)() ? t === o.yTV.DESKTOP : !!(0, a.isDesktop)() && null != e.application_id && i.A.isConnected(e.application_id) && t === o.yTV.DESKTOP)
  }(d) ? null : (0, r.Lt)(null != (n = d.flags) ? n : 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) && null != (c = d.platform) ? c : null
}