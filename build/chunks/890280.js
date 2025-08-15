/** Chunk was on 35755 **/
/** chunk id: 890280, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk317381 = require("./317381.js"),
  Chunk835473 = require("./835473.js"),
  Chunk813370 = require("./813370.js");

function c(e) {
  let {
    applicationId: t,
    context: n,
    launchingComponentId: c,
    onSubmissionComplete: u
  } = e, d = (0, o.q)(t), p = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), m = !(null != d && (0, s.g)(d)) && null != p && p.isLaunching && p.componentId === c, f = (0, r.Z)(m);
  return l.useEffect(() => {
    !m && f && (null == u || u())
  }, [m, f, u]), {
    submitting: m,
    wasSubmitting: null != f ? f : null
  }
}