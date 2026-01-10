/** Chunk was on 70675 **/
/** chunk id: 712301, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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

function y(e, t) {
  let n = (0, r.e7)([c.ZP], () => c.ZP.getChannels(t)[c.Zb], [t]),
    y = (0, r.e7)([h.Z, d.Z], () => {
      let n = h.Z.getUserVoiceChannelId(t, e.id);
      return d.Z.getChannel(n)
    }, [t, e.id]);
  if ((0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(t, e.id), [t, e.id]) || null == y) return null;
  let E = e.id === u.default.getId();
  if (!E && !f.Z.can(m.Plq.MOVE_MEMBERS, y)) return null;
  let N = n.filter(t => {
    let {
      channel: n
    } = t;
    return n.id !== y.id && (E ? f.Z.can(m.Plq.CONNECT, n) && !(0, p.rY)(n, h.Z, g.Z) : f.Z.can(m.Plq.MOVE_MEMBERS, n) && (f.Z.can(m.Plq.CONNECT, n) || P.BT({
      permission: m.Plq.CONNECT,
      user: e,
      context: n
    })) && !(0, p.rY)(n, h.Z, g.Z))
  });
  return 0 === N.length ? null : (0, l.jsx)(i.sNh, {
    id: "voice-move",
    label: j.intl.string(j.t.FAplms),
    children: N.map(n => {
      let {
        channel: r
      } = n;
      return (0, l.jsx)(i.sNh, {
        id: r.id,
        action: () => {
          e.id === u.default.getId() ? a.default.selectVoiceChannel(r.id) : o.Z.setChannel(t, e.id, r.id)
        },
        label: (0, s.F6)(r, O.default, b.Z)
      }, r.id)
    })
  })
}