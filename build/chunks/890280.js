/** Chunk was on web.js **/
/** chunk id: 890280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk73800 = require("./73800.js"),
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
  } = e, d = (0, s.q)(t), f = (0, i.e7)([a.ZP], () => a.ZP.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), _ = !(null != d && (0, l.g)(d)) && null != f && f.isLaunching && f.componentId === c, p = (0, o.Z)(_);
  return r.useEffect(() => {
    !_ && p && (null == u || u())
  }, [_, p, u]), {
    submitting: _,
    wasSubmitting: null != p ? p : null
  }
}