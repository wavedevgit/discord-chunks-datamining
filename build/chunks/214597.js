/** Chunk was on 30243 **/
/** chunk id: 214597, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk902704 = require("./902704.js"),
  Chunk232567 = require("./232567.js"),
  Chunk720202 = require("./720202.js"),
  Chunk594174 = require("./594174.js");

function c(e) {
  let {
    entry: t,
    channel: r
  } = e, c = n.useRef([]);
  return n.useEffect(() => {
    (0, l.E)(c.current, t.participants) || (c.current = t.participants, t.participants.filter(e => null == a.default.getUser(e)).forEach(e => {
      null == r.guild_id ? (0, i.PR)(e) : o.Z.requestMember(r.guild_id, e)
    }))
  }, [t, r.guild_id]), {}
}