/** Chunk was on 81899 **/
/** chunk id: 530209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => d,
  e: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk488926 = require("./488926.js"),
  Chunk698441 = require("./698441.js"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js");

function d(e, t) {
  return c.MJ(s.xBc.VIEW_CHANNEL, e) || t === r.Ps.EXTERNAL
}

function o(e, t) {
  return (0, l.bG)([a.A, i.Ay], () => {
    let n = a.A.getChannel(e),
      l = i.Ay.getGuildScheduledEvent(t);
    return d(n, null == l ? true : l.entity_type)
  }, [e, t])
}