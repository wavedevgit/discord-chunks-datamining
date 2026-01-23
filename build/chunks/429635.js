/** Chunk was on 14078 **/
/** chunk id: 429635, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk916023 = require("./916023.js");

function r(e) {
  let {
    guildId: l,
    location: t
  } = e, r = (0, d.kt)({
    location: t
  }), o = (0, s.bG)([i.A], () => null != l ? i.A.getStorefrontData(l) : true, [l]);
  return n.useEffect(() => {
    null != l && r && (0, a.Rw)(l, {
      eager: false
    })
  }, [l, o, r]), o
}