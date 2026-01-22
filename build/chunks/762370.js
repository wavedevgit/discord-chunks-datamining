/** Chunk was on 97492 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e, t) {
  return (0, i.bG)([c.A, a.A, s.Ay, o.A], () => {
    var n;
    let r = a.A.getChannel(t);
    if (null == r) returnfalse;
    let i = c.A.can(d.xBc.SEND_MESSAGES, r),
      f = s.Ay.getMember(r.guild_id, e),
      p = l().keyBy(o.A.getManyRoles(r.guild_id, null != (n = null == f ? true : f.roles) ? n : []), "id"),
      h = u.$3({
        permission: d.xBc.STREAM,
        user: e,
        context: r,
        roles: p
      });
    return i && h
  })
}