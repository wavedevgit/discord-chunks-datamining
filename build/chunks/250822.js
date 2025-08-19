/** Chunk was on 99799 **/
/** chunk id: 250822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk621853 = require("./621853.js");
let l = [];

function a(e) {
  let t = (0, o.e7)([i.Z], () => i.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == t ? true : t.applicationRoleConnections) == null ? l : t.applicationRoleConnections, [null == t ? true : t.applicationRoleConnections])
}