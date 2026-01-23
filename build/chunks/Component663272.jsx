/** Chunk was on 71138 **/
/** chunk id: 663272, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk412780 = require("./412780.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk985018 = require("./985018.jsx");
let o = Chunk311907.Ay.connectStores([Chunk412780.Ay], e => {
  let {
    context: t,
    index: r,
    videoStreams: n
  } = e, a = i.Ay.getAllStats(t)[r], {
    section: l
  } = (0, i.Bz)(i.Ay.getSection());
  if (null == l) throw Error("Unrecognized section format");
  let s = null;
  if (null != a && null != a.rtp.inbound) {
    var o;
    s = null != (o = a.rtp.inbound[l]) ? o : []
  }
  return {
    mediaEngineConnectionId: null == a ? true : a.mediaEngineConnectionId,
    userId: l,
    streams: s,
    videoStreams: n
  }
})(function(e) {
  let {
    streams: t,
    context: r,
    index: a,
    userId: i,
    mediaEngineConnectionId: o,
    videoStreams: d
  } = e;
  return (0, n.jsx)(l.HI, {
    streams: t,
    context: r,
    index: a,
    mediaEngineConnectionId: o,
    userId: i,
    videoStreams: d,
    title: s.intl.string(s.t.SJmZaq),
    showUserInfo: true
  })
})