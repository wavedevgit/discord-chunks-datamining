/** Chunk was on web.js **/
/** chunk id: 331972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js"),
  Chunk937579 = require("./937579.js"),
  Chunk219673 = require("./219673.js"),
  Chunk66683 = require("./66683.js"),
  Chunk104494 = require("./104494.js"),
  Chunk474936 = require("./474936.js");

function d(e) {
  var t;
  let {
    enabled: n
  } = (0, l.k)({
    location: e
  }), {
    enabled: d
  } = s.b.useConfig({
    location: e
  }), f = (0, r.e7)([i.Z], () => i.Z.getPremiumTypeSubscription()), _ = a.Z.isFetchingOffer(), p = a.Z.hasFetchedOffer(), h = (0, c.qm)(u.dT), m = (0, c.qm)(u.dB), g = null != (t = null != h ? h : m) ? t : null;
  return (n || d) && (null == f ? true : f.canceledAt) != null ? null != g ? g : (_ || p || (0, o.Qe)(), null) : null
}