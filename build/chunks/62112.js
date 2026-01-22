/** Chunk was on 21738 **/
/** chunk id: 62112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk287809 = require("./287809.js"),
  Chunk380335 = require("./380335.js"),
  Chunk180232 = require("./180232.js");

function c() {
  let e = (0, i.bG)([l.A], () => l.A.getPrivateChannelsVersion()),
    t = (0, i.yK)([l.A, s.A], () => {
      let e = l.A.getMutablePrivateChannels(),
        t = Array.from(s.A.getMessageRequestChannelIds()).map(t => e[t]).filter(e => null != e);
      return (0, o.g)(t)
    }, [e]),
    n = (0, i.cf)([a.default], () => {
      let e = {};
      return t.forEach(t => {
        let n = a.default.getUser(t.recipients[0]);
        null != n && (e[t.id] = n)
      }), e
    }, [t]);
  return r.useMemo(() => t.map(e => ({
    channel: e,
    user: n[e.id]
  })), [t, n])
}