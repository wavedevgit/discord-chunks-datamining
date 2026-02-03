/** Chunk was on 51444 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e, t) {
  return (0, l.bG)([u.A, o.A, a.Ay, c.A], () => {
    var n;
    let r = o.A.getChannel(t);
    if (null == r) returnfalse;
    let l = u.A.can(d.xBc.SEND_MESSAGES, r),
      b = a.Ay.getMember(r.guild_id, e),
      f = i().keyBy(c.A.getManyRoles(r.guild_id, null != (n = null == b ? true : b.roles) ? n : []), "id"),
      p = s.$3({
        permission: d.xBc.STREAM,
        user: e,
        context: r,
        roles: f
      });
    return l && p
  })
}