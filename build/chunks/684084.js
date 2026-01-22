/** Chunk was on 7869 **/
/** chunk id: 684084, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk496092 = require("./496092.js");

function r(t, e, n, r) {
  let {
    scheduled_start_time: i,
    scheduled_end_time: u
  } = t;
  return null == i && null == u ? l.A.deleteGuildEventException(e, n, r) : l.A.updateGuildEventException({
    scheduled_start_time: i,
    scheduled_end_time: u,
    is_canceled: false
  }, e, n, r)
}