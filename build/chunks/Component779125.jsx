/** Chunk was on web.js **/
/** chunk id: 779125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function y(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null == e || null == t) return;
  let r = p.Z.getGuild(e);
  if ((null == r ? true : r.joinedAt) == null) return void E.Ub(e, {}, {
    channelId: t
  });
  let i = _.Z.getChannel(t);
  if (null != i && (0, f.bw)(i.type)) {
    if (n) {
      s.Z.updateChatOpen(i.id, true), (0, d.uL)(b.Z5c.CHANNEL(e, t));
      return
    }
    l.default.selectVoiceChannel(i.id);
    return
  }(0, d.uL)(b.Z5c.CHANNEL(e, t))
}

function O(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: s,
    className: l,
    openChatWithoutConnecting: d
  } = e, f = (0, i.e7)([m.default, h.Z], () => null == t ? "" : (0, c.F6)(t, m.default, h.Z), [t]);
  return (0, r.jsx)(a.u, {
    "data-pending-richtooltip-migration": true,
    __unsupportedReactNodeAsText: f,
    position: "top",
    children: (0, r.jsx)(u.Z, {
      role: "link",
      className: l,
      onClick: e => {
        e.stopPropagation(), null != n ? n() : (null != s && s(), (0, o.pTH)(), y(null == t ? true : t.guild_id, null == t ? true : t.id, d))
      },
      iconType: (0, g.wl)(t),
      children: f
    })
  })
}