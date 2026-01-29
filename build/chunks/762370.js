/** Chunk was on 2016 **/
/** chunk id: 762370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e, t) {
  return (0, l.bG)([c.A, a.A, o.Ay, u.A], () => {
    var n;
    let r = a.A.getChannel(t);
    if (null == r) returnfalse;
    let l = c.A.can(s.xBc.SEND_MESSAGES, r),
      _ = o.Ay.getMember(r.guild_id, e),
      b = i().keyBy(u.A.getManyRoles(r.guild_id, null != (n = null == _ ? true : _.roles) ? n : []), "id"),
      h = d.$3({
        permission: s.xBc.STREAM,
        user: e,
        context: r,
        roles: b
      });
    return l && h
  })
}