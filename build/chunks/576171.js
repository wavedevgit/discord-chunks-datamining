/** Chunk was on 81985 **/
/** chunk id: 576171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk445384 = require("./445384.js"),
  Chunk420438 = require("./420438.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk440493 = require("./440493.js");

function p(e) {
  let t = (0, i.e7)([s.Z, a.Z, c.default, o.ZP], () => {
    let t = s.Z.getGuild(e);
    if ((null == t ? true : t.features.has(u.GuildFeatures.HUB)) !== true || true === a.Z.hasViewedPrompt(d.r.REAL_NAME_PROMPT, t.id)) return null;
    let n = c.default.getCurrentUser();
    if (null == n) return null;
    let r = o.ZP.getMember(t.id, null == n ? true : n.id);
    return (null == r ? true : r.nick) == null
  });
  return r.useEffect(() => {
    null != e && null != t && (t || l.Z.viewPrompt(d.r.REAL_NAME_PROMPT, e))
  }, [t, e]), true === t
}