/** Chunk was on 26434 **/
/** chunk id: 779125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk287734 = require("./287734.js"),
  Chunk933557 = require("./933557.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk934415 = require("./934415.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: E,
    className: C,
    openChatWithoutConnecting: v
  } = e, O = (0, i.e7)([g.default, f.Z], () => null == t ? "" : (0, s.F6)(t, g.default, f.Z), [t]);
  return (0, r.jsx)(l.ua7, {
    text: O,
    position: "top",
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: s
      } = e;
      return (0, r.jsx)(c.Z, {
        role: "link",
        className: C,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != E && E(), (0, l.pTH)(), function(e, t) {
            let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
            if (null == e || null == t) return;
            let r = m.Z.getGuild(e);
            if ((null == r ? true : r.joinedAt) == null) return h.Ub(e, {}, {
              channelId: t
            });
            let i = p.Z.getChannel(t);
            if (null != i && (0, d.bw)(i.type)) {
              if (n) {
                o.Z.updateChatOpen(i.id, true), (0, u.uL)(b.Z5c.CHANNEL(e, t));
                return
              }
              a.default.selectVoiceChannel(i.id);
              return
            }(0, u.uL)(b.Z5c.CHANNEL(e, t))
          }(null == t ? true : t.guild_id, null == t ? true : t.id, v))
        },
        onMouseEnter: i,
        onMouseLeave: s,
        iconType: (0, _.wl)(t),
        children: O
      })
    }
  })
}