/** Chunk was on 12009 **/
/** chunk id: 231588, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk923029 = require("./923029.js"),
  Chunk353926 = require("./353926.js"),
  Chunk931261 = require("./931261.js"),
  Chunk333323 = require("./333323.js"),
  Chunk430824 = require("./430824.js");
let h = (0, Chunk112724.Z)(Chunk333323.Z),
  f = function(e) {
    let {
      guildId: n
    } = e, t = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]), s = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments), u = (0, d.g)(n);
    return (r.useEffect(() => {
      if (s && !u) return void i.Z.escapeToDefaultChannel(n)
    }, [n, s, u]), null != t && u) ? <h guild={t} /> : <c.Z channelId={true} />
  }