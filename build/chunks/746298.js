/** Chunk was on 65354 **/
/** chunk id: 746298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk699955 = require("./699955.js"),
  Chunk582113 = require("./582113.js");

function l(e, t) {
  var n, l, o;
  if (!(0, r.c)({
      location: t
    }) || null == e) return null;
  if (i.Nx.has(e.id)) return null != (n = e.guildId) ? n : null;
  for (let t of null != (l = e.linkedGames) ? l : [])
    if (null != t.application && i.Nx.has(t.application.id)) return null != (o = t.application.guildId) ? o : null;
  return null
}