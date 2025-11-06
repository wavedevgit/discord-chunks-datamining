/** Chunk was on 69283 **/
/** chunk id: 816906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./361932.js"), require("./187205.js");
var Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159299 = require("./159299.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk700785 = require("./700785.js"),
  Chunk233870 = require("./233870.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  return (0, a.Wu)([l.Z, s.ZP, u.default, i.Z, o.ZP, c.Z], () => {
    let t = l.Z.getChannel(e);
    if (null == t) return [];
    if (t.type === r.d.GUILD_VOICE) return s.ZP.getVoiceStatesForChannel(t).map(e => {
      let {
        user: t
      } = e;
      return t.id
    });
    if (t.type === r.d.GROUP_DM) {
      var n;
      return (0, _.T)(null != (n = t.recipients) ? n : [], u.default).map(e => e.id)
    }
    if (t.isThread()) {
      let t = i.Z.getMemberListSections(e);
      return null != t ? Object.values(t).flatMap(e => e.userIds) : []
    }
    return null != t.guild_id ? o.ZP.getMembers(t.guild_id).filter(e => {
      let n = c.Z.getStatus(e.userId, t.guild_id),
        r = n !== m.Skl.OFFLINE && n !== m.Skl.INVISIBLE && n !== m.Skl.UNKNOWN,
        a = d.BT({
          permission: m.Plq.VIEW_CHANNEL,
          user: e.userId,
          context: t
        });
      return r && a
    }).map(e => e.userId) : []
  }, [e])
}