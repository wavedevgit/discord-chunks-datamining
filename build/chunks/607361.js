/** Chunk was on 20037 **/
/** chunk id: 607361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function _(e, t) {
  return (0, a.e7)([c.Z, i.Z, l.ZP, u.Z], () => {
    var n;
    let r = i.Z.getChannel(t);
    if (null == r) returnfalse;
    let a = c.Z.can(b.Plq.SEND_MESSAGES, r),
      _ = l.ZP.getMember(r.guild_id, e),
      d = o().keyBy(u.Z.getManyRoles(r.guild_id, null != (n = null == _ ? true : _.roles) ? n : []), "id"),
      f = s.BT({
        permission: b.Plq.STREAM,
        user: e,
        context: r,
        roles: d
      });
    return a && f
  })
}