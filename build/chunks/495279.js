/** Chunk was on 470 **/
/** chunk id: 495279, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk482241 = require("./482241.js");

function r(t, e, n, r) {
  let {
    scheduled_start_time: i,
    scheduled_end_time: o
  } = t;
  return null == i && null == o ? l.Z.deleteGuildEventException(e, n, r) : l.Z.updateGuildEventException({
    scheduled_start_time: i,
    scheduled_end_time: o,
    is_canceled: false
  }, e, n, r)
}