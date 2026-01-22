/** Chunk was on 86317 **/
/** chunk id: 272379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => c,
  Z: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk498642 = require("./498642.js"),
  Chunk576705 = require("./576705.js"),
  Chunk818348 = require("./818348.js");

function s(e) {
  return (0, l.bG)([i.A], () => null != e && i.A.can(a.xB.MENTION_EVERYONE, e), [e])
}

function c(e) {
  let t = null == e ? true : e.guild_id,
    n = (0, l.bG)([r.A], () => r.A.getMemberCount(t), [t]);
  return null == e || null != n && !(n > 5e4)
}