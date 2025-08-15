/** Chunk was on 76708 **/
/** chunk id: 250822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk621853 = require("./621853.js");
let o = [];

function a(e) {
  let t = (0, i.e7)([l.Z], () => l.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == t ? true : t.applicationRoleConnections) == null ? o : t.applicationRoleConnections, [null == t ? true : t.applicationRoleConnections])
}