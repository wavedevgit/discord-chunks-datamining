/** Chunk was on 64935 **/
/** chunk id: 901057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk956793 = require("./956793.js"),
  Chunk47167 = require("./47167.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk147036 = require("./147036.js"),
  Chunk449054 = require("./449054.js"),
  Chunk652215 = require("./652215.js");

function A(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: A,
    className: v,
    openChatWithoutConnecting: O
  } = e, x = (0, i.bG)([_.default, g.A], () => null == t ? "" : (0, c.m1)(t, _.default, g.A), [t]);
  return (0, r.jsx)(l.m, {
    "data-pending-richtooltip-migration": true,
    __unsupportedReactNodeAsText: x,
    position: "top",
    children: (0, r.jsx)(u.A, {
      role: "link",
      className: v,
      onClick: e => {
        e.stopPropagation(), null != n ? n() : (null != A && A(), (0, a.s7G)(), function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          if (null == e || null == t) return;
          let r = f.A.getGuild(e);
          if ((null == r ? true : r.joinedAt) == null) return b.Z2(e, {}, {
            channelId: t
          });
          let i = m.A.getChannel(t);
          if (null != i && (0, p.ay)(i.type)) {
            if (n) {
              s.A.updateChatOpen(i.id, true), (0, d.pX)(y.BVt.CHANNEL(e, t));
              return
            }
            o.default.selectVoiceChannel(i.id);
            return
          }(0, d.pX)(y.BVt.CHANNEL(e, t))
        }(null == t ? true : t.guild_id, null == t ? true : t.id, O))
      },
      iconType: (0, h.QG)(t),
      children: x
    })
  })
}