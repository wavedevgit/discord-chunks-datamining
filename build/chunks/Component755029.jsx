/** Chunk was on 84018 **/
/** chunk id: 755029, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk528772 = require("./528772.js"),
  Chunk944775 = require("./944775.js"),
  Chunk927421 = require("./927421.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk427603 = require("./427603.js"),
  Chunk980504 = require("./980504.js"),
  Chunk761121 = require("./761121.js");

function h() {
  let [e, t] = (0, r.yK)([s.A], () => [s.A.enabled, s.A.keepOpen]), n = (0, r.bG)([c.A], () => c.A.getVoiceChannelId()), h = (0, r.bG)([a.A], () => a.A.getChannel(n), [n]), f = null == h ? true : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: p.H,
    children: (0, i.jsx)(o.A, {
      width: u.ed.width,
      height: u.ed.height,
      guildId: f,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, d.A)();
        null != e && (0, l.Lk)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}