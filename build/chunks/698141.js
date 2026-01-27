/** Chunk was on web.js **/
/** chunk id: 698141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk933958 = require("./933958.js"),
  Chunk429913 = require("./429913.js"),
  Chunk91242 = require("./91242.js"),
  Chunk207371 = require("./207371.js");

function u(e) {
  let {
    applicationId: t,
    context: n,
    launchingComponentId: u,
    onSubmissionComplete: d
  } = e, f = (0, s.h)(t), p = (0, i.bG)([o.Ay], () => o.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : true)), _ = (0, i.bG)([l.A], () => l.A.isLaunchingFrame(t)), h = null != f && (0, c.x)(f) ? _ : null != p && p.isLaunching && p.componentId === u, m = (0, a.A)(h);
  return r.useEffect(() => {
    !h && m && (null == d || d())
  }, [h, m, d]), {
    submitting: h,
    wasSubmitting: null != m ? m : null
  }
}