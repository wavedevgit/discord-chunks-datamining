/** Chunk was on 77033 **/
/** chunk id: 417317, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk699955 = require("./699955.js");

function r(e) {
  let {
    guildId: n,
    location: t
  } = e, r = (0, s.cZ)({
    location: t
  }), d = (0, i.e7)([o.Z], () => null != n ? o.Z.getStorefrontData(n) : true, [n]);
  return l.useEffect(() => {
    null != n && r && (0, a.YL)(n, {
      eager: false
    })
  }, [n, d, r]), d
}