/** Chunk was on 63141 **/
/** chunk id: 107200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk352527 = require("./352527.js"),
  Chunk183584 = require("./183584.js"),
  Chunk487029 = require("./487029.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk554174 = require("./554174.js"),
  Chunk710111 = require("./710111.js"),
  Chunk774087 = require("./774087.js");

function p() {
  let [e, t] = (0, Chunk442837.Wu)([Chunk352527.Z], () => [Chunk352527.Z.enabled, Chunk352527.Z.keepOpen]), n = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getVoiceChannelId()), p = (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getChannel(require), [require]), f = null == p ? true : p.getGuildId();
  return module && null != p ? (0, Chunk951288.jsx)("div", {
    className: Chunk774087.widget,
    children: (0, Chunk951288.jsx)(Chunk487029.Z, {
      width: Chunk710111.FW.width,
      height: Chunk710111.FW.height,
      guildId: f,
      channel: p,
      keepOpen: exports,
      onClose: function() {
        let e = (0, Chunk554174.Z)();
        null != module && (0, Chunk183584.oZ)(module)
      },
      analyticsSource: "overlay"
    })
  }) : null
}