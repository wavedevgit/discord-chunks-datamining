/** Chunk was on 75548 **/
/** chunk id: 607361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function d(e, t) {
  return (0, o.e7)([u.Z, i.Z, l.ZP, c.Z], () => {
    var n;
    let r = i.Z.getChannel(t);
    if (null == r) returnfalse;
    let o = u.Z.can(s.Plq.SEND_MESSAGES, r),
      d = l.ZP.getMember(r.guild_id, e),
      f = a().keyBy(c.Z.getManyRoles(r.guild_id, null != (n = null == d ? true : d.roles) ? n : []), "id"),
      _ = b.BT({
        permission: s.Plq.STREAM,
        user: e,
        context: r,
        roles: f
      });
    return o && _
  })
}