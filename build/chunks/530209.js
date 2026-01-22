/** Chunk was on 51354 **/
/** chunk id: 530209, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => c,
  e: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk488926 = require("./488926.js"),
  Chunk698441 = require("./698441.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");

function c(t, e) {
  return r.MJ(u.xBc.VIEW_CHANNEL, t) || e === a.Ps.EXTERNAL
}

function o(t, e) {
  return (0, l.bG)([i.A, s.Ay], () => {
    let n = i.A.getChannel(t),
      l = s.Ay.getGuildScheduledEvent(e);
    return c(n, null == l ? true : l.entity_type)
  }, [t, e])
}