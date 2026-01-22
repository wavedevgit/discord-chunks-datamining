/** Chunk was on 71138 **/
/** chunk id: 820931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk412780 = require("./412780.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk985018 = require("./985018.jsx");
let o = Chunk311907.Ay.connectStores([Chunk412780.Ay], e => {
  let {
    context: t,
    index: n
  } = e, r = i.Ay.getAllStats(t)[n];
  return {
    outbound: null != r ? r.rtp.outbound : null
  }
})(function(e) {
  let {
    outbound: t,
    context: n,
    index: a
  } = e;
  return (0, r.jsx)(l.HI, {
    streams: t,
    context: n,
    index: a,
    title: s.intl.string(s.t["3u0gII"]),
    showUserInfo: false,
    showSimulcastOverride: false
  })
})