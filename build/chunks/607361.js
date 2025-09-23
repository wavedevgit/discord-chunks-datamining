/** Chunk was on 16975 **/
/** chunk id: 607361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function f(e, t) {
  return (0, i.e7)([c.Z, o.Z, a.ZP, u.Z], () => {
    var n;
    let r = o.Z.getChannel(t);
    if (null == r) returnfalse;
    let i = c.Z.can(d.Plq.SEND_MESSAGES, r),
      f = a.ZP.getMember(r.guild_id, e),
      b = l().keyBy(u.Z.getManyRoles(r.guild_id, null != (n = null == f ? true : f.roles) ? n : []), "id"),
      p = s.BT({
        permission: d.Plq.STREAM,
        user: e,
        context: r,
        roles: b
      });
    return i && p
  })
}