/** Chunk was on 470 **/
/** chunk id: 495279, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk482241 = require("./482241.js");

function i(t, e, n, i) {
  let {
    scheduled_start_time: r,
    scheduled_end_time: u
  } = t;
  return null == r && null == u ? l.Z.deleteGuildEventException(e, n, i) : l.Z.updateGuildEventException({
    scheduled_start_time: r,
    scheduled_end_time: u,
    is_canceled: false
  }, e, n, i)
}