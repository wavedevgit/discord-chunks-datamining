/** Chunk was on 12009 **/
/** chunk id: 231588, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk923029 = require("./923029.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk931261 = require("./931261.js"),
  Chunk333323 = require("./333323.jsx"),
  Chunk430824 = require("./430824.js");
let h = (0, Chunk112724.Z)(Chunk333323.Z),
  f = function(e) {
    let {
      guildId: n
    } = e, t = (0, r.e7)([m.Z], () => m.Z.getGuild(n), [n]), c = (0, r.e7)([d.Z], () => d.Z.hasLoadedExperiments), u = (0, o.g)(n);
    return (l.useEffect(() => {
      if (c && !u) return void i.Z.escapeToDefaultChannel(n)
    }, [n, c, u]), null != t && u) ? (0, a.jsx)(h, {
      guild: t
    }) : (0, a.jsx)(s.Z, {
      channelId: true
    })
  }