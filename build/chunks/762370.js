/** Chunk was on 78528 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function p(e, t) {
  return (0, i.bG)([c.A, s.A, a.Ay, o.A], () => {
    var n;
    let r = s.A.getChannel(t);
    if (null == r) returnfalse;
    let i = c.A.can(d.xBc.SEND_MESSAGES, r),
      p = a.Ay.getMember(r.guild_id, e),
      h = l().keyBy(o.A.getManyRoles(r.guild_id, null != (n = null == p ? true : p.roles) ? n : []), "id"),
      f = u.$3({
        permission: d.xBc.STREAM,
        user: e,
        context: r,
        roles: h
      });
    return i && f
  })
}