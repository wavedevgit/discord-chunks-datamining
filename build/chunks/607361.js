/** Chunk was on 73726 **/
/** chunk id: 607361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function p(e, t) {
  return (0, l.e7)([c.Z, a.Z, o.ZP, s.Z], () => {
    var n;
    let r = a.Z.getChannel(t);
    if (null == r) returnfalse;
    let l = c.Z.can(d.Plq.SEND_MESSAGES, r),
      p = o.ZP.getMember(r.guild_id, e),
      f = i().keyBy(s.Z.getManyRoles(r.guild_id, null != (n = null == p ? true : p.roles) ? n : []), "id"),
      h = u.BT({
        permission: d.Plq.STREAM,
        user: e,
        context: r,
        roles: f
      });
    return l && h
  })
}