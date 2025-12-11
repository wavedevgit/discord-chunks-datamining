/** Chunk was on 93979 **/
/** chunk id: 250822, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk621853 = require("./621853.js");
let r = [];

function a(e) {
  let n = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e));
  return (0, l.useMemo)(() => (null == n ? true : n.applicationRoleConnections) == null ? r : n.applicationRoleConnections, [null == n ? true : n.applicationRoleConnections])
}