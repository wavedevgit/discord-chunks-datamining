/** Chunk was on 80960 **/
/** chunk id: 724392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk226961 = require("./226961.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk388032 = require("./388032.jsx");
let s = Chunk442837.ZP.connectStores([Chunk226961.ZP], e => {
  let {
    context: t,
    index: n
  } = e, r = i.ZP.getAllStats(t)[n];
  return {
    outbound: null != r ? r.rtp.outbound : null
  }
})(function(e) {
  let {
    outbound: t,
    context: n,
    index: a
  } = e;
  return (0, r.jsx)(l.lV, {
    streams: t,
    context: n,
    index: a,
    title: o.intl.string(o.t["3u0gII"]),
    showUserInfo: false,
    showSimulcastOverride: false
  })
})