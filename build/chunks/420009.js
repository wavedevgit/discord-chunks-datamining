/** Chunk was on 20941 **/
/** chunk id: 420009, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk52133 = require("./52133.js"),
  Chunk803306 = require("./803306.js"),
  Chunk256587 = require("./256587.js"),
  Chunk287809 = require("./287809.js");

function o(e) {
  let {
    entry: t,
    channel: n
  } = e, o = r.useRef([]);
  return r.useEffect(() => {
    (0, l.v)(o.current, t.participants) || (o.current = t.participants, t.participants.filter(e => null == s.default.getUser(e)).forEach(e => {
      null == n.guild_id ? (0, a.wz)(e) : i.A.requestMember(n.guild_id, e)
    }))
  }, [t, n.guild_id]), {}
}