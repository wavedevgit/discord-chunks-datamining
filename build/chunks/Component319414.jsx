/** Chunk was on 50751 **/
/** chunk id: 319414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
  Chunk333031 = require("./333031.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk295108 = require("./295108.js");

function f() {
  let [e, t] = (0, r.Wu)([l.Z], () => [l.Z.enabled, l.Z.keepOpen]), n = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId()), f = (0, r.e7)([s.Z], () => s.Z.getChannel(n), [n]), m = null == f ? true : f.getGuildId();
  return e && null != f ? (0, i.jsx)(d.Z, {
    className: p.container,
    children: (0, i.jsx)(a.Z, {
      width: h.FW.width,
      height: h.FW.height,
      guildId: m,
      channel: f,
      keepOpen: t,
      onClose: function() {
        let e = (0, c.Z)();
        null != e && (0, o.oZ)(e)
      },
      analyticsSource: "overlay"
    })
  }) : null
}