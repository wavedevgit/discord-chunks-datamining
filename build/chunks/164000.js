/** Chunk was on 29679 **/
/** chunk id: 164000, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let t = (0, i.e7)([s.Z, a.Z], () => {
      let t = s.Z.getGuild(e);
      return null != t ? a.Z.getEveryoneRole(t) : true
    }),
    n = r.useMemo(() => null == t || (0, l.Fs)(t, c.Plq.VIEW_CHANNEL) ? o.e3.SOME_CHANNELS : o.e3.ALL_CHANNELS, [t]),
    d = n === o.e3.ALL_CHANNELS;
  return {
    format: n,
    isFullServerGating: d
  }
}