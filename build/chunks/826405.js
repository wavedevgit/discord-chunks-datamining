/** Chunk was on 35755 **/
/** chunk id: 826405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk317381 = require("./317381.js"),
  Chunk835473 = require("./835473.js"),
  Chunk591472 = require("./591472.js"),
  Chunk813370 = require("./813370.js");

function u(e) {
  let {
    applicationId: t,
    context: n,
    launchingComponentId: u,
    onSubmissionComplete: d
  } = e, p = (0, o.q)(t), m = (0, l.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), f = (0, l.e7)([s.Z], () => s.Z.isLaunchingFrame(t)), h = null != p && (0, c.g)(p) ? f : null != m && m.isLaunching && m.componentId === u, v = (0, r.Z)(h);
  return i.useEffect(() => {
    !h && v && (null == d || d())
  }, [h, v, d]), {
    submitting: h,
    wasSubmitting: null != v ? v : null
  }
}