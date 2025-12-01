/** Chunk was on web.js **/
/** chunk id: 890280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
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
  } = e, f = (0, s.q)(t), p = (0, i.e7)([o.ZP], () => o.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), _ = (0, i.e7)([l.Z], () => l.Z.isLaunchingFrame(t)), m = null != f && (0, c.g)(f) ? _ : null != p && p.isLaunching && p.componentId === u, h = (0, a.Z)(m);
  return r.useEffect(() => {
    !m && h && (null == d || d())
  }, [m, h, d]), {
    submitting: m,
    wasSubmitting: null != h ? h : null
  }
}