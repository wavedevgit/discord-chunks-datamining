/** Chunk was on web.js **/
/** chunk id: 420009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk52133 = require("./52133.js"),
  Chunk803306 = require("./803306.js"),
  Chunk256587 = require("./256587.js"),
  Chunk287809 = require("./287809.js");

function l(e) {
  let {
    entry: t,
    channel: n
  } = e, l = r.useRef([]);
  return r.useEffect(() => {
    (0, i.v)(l.current, t.participants) || (l.current = t.participants, t.participants.filter(e => null == o.default.getUser(e)).forEach(e => {
      null == n.guild_id ? (0, a.wz)(e) : s.A.requestMember(n.guild_id, e)
    }))
  }, [t, n.guild_id]), {}
}