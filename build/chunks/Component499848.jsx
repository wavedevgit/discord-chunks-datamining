/** Chunk was on 80960 **/
/** chunk id: 499848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk226961 = require("./226961.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk388032 = require("./388032.jsx");
let s = Chunk442837.ZP.connectStores([Chunk226961.ZP], e => {
  let {
    context: t,
    index: n,
    videoStreams: r
  } = e, a = i.ZP.getAllStats(t)[n], {
    section: l
  } = (0, i.fZ)(i.ZP.getSection());
  if (null == l) throw Error("Unrecognized section format");
  let o = null;
  if (null != a && null != a.rtp.inbound) {
    var s;
    o = null != (s = a.rtp.inbound[l]) ? s : []
  }
  return {
    mediaEngineConnectionId: null == a ? true : a.mediaEngineConnectionId,
    userId: l,
    streams: o,
    videoStreams: r
  }
})(function(e) {
  let {
    streams: t,
    context: n,
    index: a,
    userId: i,
    mediaEngineConnectionId: s,
    videoStreams: c
  } = e;
  return (0, r.jsx)(l.lV, {
    streams: t,
    context: n,
    index: a,
    mediaEngineConnectionId: s,
    userId: i,
    videoStreams: c,
    title: o.intl.string(o.t.SJmZaq),
    showUserInfo: true
  })
})