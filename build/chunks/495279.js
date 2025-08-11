/** Chunk was on 27434 **/
/** chunk id: 495279, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk482241 = require("./482241.js");

function i(t, n, e, i) {
  let {
    scheduled_start_time: r,
    scheduled_end_time: o
  } = t;
  return null == r && null == o ? l.Z.deleteGuildEventException(n, e, i) : l.Z.updateGuildEventException({
    scheduled_start_time: r,
    scheduled_end_time: o,
    is_canceled: false
  }, n, e, i)
}