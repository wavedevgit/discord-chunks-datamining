/** Chunk was on web.js **/
/** chunk id: 779125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function b(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null == e || null == t) return;
  let r = _.Z.getGuild(e);
  if ((null == r ? true : r.joinedAt) == null) return void g.Ub(e, {}, {
    channelId: t
  });
  let i = f.Z.getChannel(t);
  if (null != i && (0, d.bw)(i.type)) {
    if (n) {
      a.Z.updateChatOpen(i.id, true), (0, u.uL)(E.Z5c.CHANNEL(e, t));
      return
    }
    s.default.selectVoiceChannel(i.id);
    return
  }(0, u.uL)(E.Z5c.CHANNEL(e, t))
}

function y(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: a,
    className: s,
    openChatWithoutConnecting: u
  } = e, d = (0, i.e7)([h.default, p.Z], () => null == t ? "" : (0, l.F6)(t, h.default, p.Z), [t]);
  return (0, r.jsx)(o.ua7, {
    text: d,
    position: "top",
    children: e => {
      let {
        onMouseEnter: i,
        onMouseLeave: l
      } = e;
      return (0, r.jsx)(c.Z, {
        role: "link",
        className: s,
        onClick: e => {
          e.stopPropagation(), null != n ? n() : (null != a && a(), (0, o.pTH)(), b(null == t ? true : t.guild_id, null == t ? true : t.id, u))
        },
        onMouseEnter: i,
        onMouseLeave: l,
        iconType: (0, m.wl)(t),
        children: d
      })
    }
  })
}