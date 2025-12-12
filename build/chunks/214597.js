/** Chunk was on web.js **/
/** chunk id: 214597, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk902704 = require("./902704.js"),
  Chunk232567 = require("./232567.js"),
  Chunk720202 = require("./720202.js"),
  Chunk594174 = require("./594174.js");

function l(e) {
  let {
    entry: t,
    channel: n
  } = e, l = r.useRef([]);
  return r.useEffect(() => {
    (0, i.E)(l.current, t.participants) || (l.current = t.participants, t.participants.filter(e => null == s.default.getUser(e)).forEach(e => {
      null == n.guild_id ? (0, a.PR)(e) : o.Z.requestMember(n.guild_id, e)
    }))
  }, [t, n.guild_id]), {}
}