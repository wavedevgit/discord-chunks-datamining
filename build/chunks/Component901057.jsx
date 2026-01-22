/** Chunk was on web.js **/
/** chunk id: 901057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
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

function y(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null == e || null == t) return;
  let r = _.A.getGuild(e);
  if ((null == r ? true : r.joinedAt) == null) return void E.Z2(e, {}, {
    channelId: t
  });
  let i = p.A.getChannel(t);
  if (null != i && (0, f.ay)(i.type)) {
    if (n) {
      o.A.updateChatOpen(i.id, true), (0, d.pX)(b.BVt.CHANNEL(e, t));
      return
    }
    l.default.selectVoiceChannel(i.id);
    return
  }(0, d.pX)(b.BVt.CHANNEL(e, t))
}

function O(e) {
  let {
    channel: t,
    onClick: n,
    beforeTransition: o,
    className: l,
    openChatWithoutConnecting: d
  } = e, f = (0, i.bG)([m.default, h.A], () => null == t ? "" : (0, c.m1)(t, m.default, h.A), [t]);
  return (0, r.jsx)(a.m, {
    "data-pending-richtooltip-migration": true,
    __unsupportedReactNodeAsText: f,
    position: "top",
    children: (0, r.jsx)(u.A, {
      role: "link",
      className: l,
      onClick: e => {
        e.stopPropagation(), null != n ? n() : (null != o && o(), (0, s.s7G)(), y(null == t ? true : t.guild_id, null == t ? true : t.id, d))
      },
      iconType: (0, g.QG)(t),
      children: f
    })
  })
}