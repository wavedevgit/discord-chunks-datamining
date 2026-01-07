/** Chunk was on 63141 **/
/** chunk id: 107200, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk352527 = require("./352527.js"),
  Chunk183584 = require("./183584.js"),
  Chunk487029 = require("./487029.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk554174 = require("./554174.js"),
  Chunk710111 = require("./710111.js"),
  Chunk399794 = require("./399794.js");

function h() {
  let [e, t] = (0, r.Wu)([a.Z], () => [a.Z.enabled, a.Z.keepOpen]), n = (0, r.e7)([c.Z], () => c.Z.getVoiceChannelId()), h = (0, r.e7)([l.Z], () => l.Z.getChannel(n), [n]), p = null == h ? true : h.getGuildId();
  return e && null != h ? (0, i.jsx)("div", {
    className: f.widget,
    children: (0, i.jsx)(o.Z, {
      width: u.FW.width,
      height: u.FW.height,
      guildId: p,
      channel: h,
      keepOpen: t,
      onClose: function() {
        let e = (0, d.Z)();
        null != e && (0, s.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}