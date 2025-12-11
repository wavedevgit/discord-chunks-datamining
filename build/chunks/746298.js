/** Chunk was on 17302 **/
/** chunk id: 746298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk164670 = require("./164670.js"),
  Chunk699955 = require("./699955.js");

function l(e, t) {
  var n, l, o;
  if (!(0, i.cZ)({
      location: t
    }) || null == e) return null;
  if ((0, r.$p)(e)) return null != (n = e.guildId) ? n : null;
  for (let t of null != (l = e.linkedGames) ? l : [])
    if (null != t.application && (0, r.$p)(t.application)) return null != (o = t.application.guildId) ? o : null;
  return null
}