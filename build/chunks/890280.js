/** Chunk was on web.js **/
/** chunk id: 890280, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, f = (0, s.q)(t), _ = (0, i.e7)([o.ZP], () => o.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), p = (0, i.e7)([l.Z], () => l.Z.isLaunchingFrame(t)), h = null != f && (0, c.g)(f) ? p : null != _ && _.isLaunching && _.componentId === u, m = (0, a.Z)(h);
  return r.useEffect(() => {
    !h && m && (null == d || d())
  }, [h, m, d]), {
    submitting: h,
    wasSubmitting: null != m ? m : null
  }
}