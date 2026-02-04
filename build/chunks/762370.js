/** Chunk was on 88474 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js");

function f(e, t) {
  return (0, l.bG)([c.A, a.A, o.Ay, s.A], () => {
    var n;
    if (null == t) returnfalse;
    let r = a.A.getChannel(t);
    if (null == r) returnfalse;
    let l = c.A.can(d.xBc.SEND_MESSAGES, r),
      f = o.Ay.getMember(r.guild_id, e),
      p = i().keyBy(s.A.getManyRoles(r.guild_id, null != (n = null == f ? true : f.roles) ? n : []), "id"),
      m = u.$3({
        permission: d.xBc.STREAM,
        user: e,
        context: r,
        roles: p
      });
    return l && m
  })
}