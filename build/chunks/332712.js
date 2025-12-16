/** Chunk was on 1272 **/
/** chunk id: 332712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js");

function c(e) {
  let t = (0, i.e7)([s.default], () => s.default.getUser(e)),
    n = (0, i.Wu)([a.Z], () => {
      var t, n;
      return null != (n = null == (t = a.Z.getMutualGuilds(e)) ? true : t.map(e => e.guild)) ? n : []
    });
  return r.useEffect(() => {
    0 === n.length && null != t && null == a.Z.getMutualGuilds(e) && l.Z.wait(() => (0, o.Z)(e, true, {
      withMutualGuilds: true
    }))
  }, [n, t, e]), n
}