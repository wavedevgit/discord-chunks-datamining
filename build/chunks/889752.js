/** Chunk was on 97492 **/
/** chunk id: 889752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk211059 = require("./211059.js"),
  Chunk609511 = require("./609511.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk957173 = require("./957173.js");

function f(e) {
  let t = (0, l.bG)([o.A, a.A, c.default, s.Ay], () => {
    let t = o.A.getGuild(e);
    if ((null == t ? true : t.features.has(u.GuildFeatures.HUB)) !== true || true === a.A.hasViewedPrompt(d.X.REAL_NAME_PROMPT, t.id)) return null;
    let n = c.default.getCurrentUser();
    if (null == n) return null;
    let r = s.Ay.getMember(t.id, null == n ? true : n.id);
    return (null == r ? true : r.nick) == null
  });
  return r.useEffect(() => {
    null != e && null != t && (t || i.A.viewPrompt(d.X.REAL_NAME_PROMPT, e))
  }, [t, e]), true === t
}