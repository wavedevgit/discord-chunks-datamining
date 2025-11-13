/** Chunk was on 11788 **/
/** chunk id: 746298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk582113 = require("./582113.js");

function i(e) {
  var t, n, i;
  if (null == e) return null;
  if (r.Nx.has(e.id)) return null != (t = e.guildId) ? t : null;
  for (let t of null != (n = e.linkedGames) ? n : [])
    if (null != t.application && r.Nx.has(t.application.id)) return null != (i = t.application.guildId) ? i : null;
  return null
}