/** Chunk was on 70675 **/
/** chunk id: 712301, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk934415 = require("./934415.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, n) {
  let t = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]),
    v = (0, i.e7)([m.Z, d.Z], () => {
      let t = m.Z.getUserVoiceChannelId(n, e.id);
      return d.Z.getChannel(t)
    }, [n, e.id]);
  if ((0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, e.id), [n, e.id]) || null == v) return null;
  let N = e.id === s.default.getId();
  if (!N && !f.Z.can(P.Plq.MOVE_MEMBERS, v)) return null;
  let y = t.filter(n => {
    let {
      channel: t
    } = n;
    return t.id !== v.id && (N ? f.Z.can(P.Plq.CONNECT, t) && !(0, h.rY)(t, m.Z, Z.Z) : f.Z.can(P.Plq.MOVE_MEMBERS, t) && (f.Z.can(P.Plq.CONNECT, t) || p.BT({
      permission: P.Plq.CONNECT,
      user: e,
      context: t
    })) && !(0, h.rY)(t, m.Z, Z.Z))
  });
  return 0 === y.length ? null : (0, l.jsx)(r.sNh, {
    id: "voice-move",
    label: j.intl.string(j.t.FAplms),
    children: y.map(t => {
      let {
        channel: i
      } = t;
      return (0, l.jsx)(r.sNh, {
        id: i.id,
        action: () => {
          e.id === s.default.getId() ? o.default.selectVoiceChannel(i.id) : a.Z.setChannel(n, e.id, i.id)
        },
        label: (0, u.F6)(i, O.default, b.Z)
      }, i.id)
    })
  })
}