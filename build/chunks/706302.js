/** Chunk was on 35755 **/
/** chunk id: 706302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk812236 = require("./812236.js"),
  Chunk989573 = require("./989573.js");

function r(e) {
  let {
    context: t,
    application: n,
    botUserId: r
  } = e, a = (0, l.ms)({
    context: t,
    applicationId: n.id,
    botUserId: r
  }), o = (0, i.Z)("channel" === t.type ? t.channel : true);
  return a && null != r && !o
}