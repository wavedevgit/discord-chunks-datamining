/** Chunk was on 2827 **/
/** chunk id: 318785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk685073 = require("./685073.js");

function a() {
  return (0, r.yK)([l.A, i.Ay], () => l.A.getGuildsArray().filter(e => {
    var t, n;
    return (0, s.Rg)(e) && (null == (t = i.Ay.getSelfMember(e.id)) ? true : t.joinedAt) != null && (null == (n = e.profile) ? true : n.tag) != null
  }))
}