/** Chunk was on 44669 **/
/** chunk id: 845056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => c,
  m: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk765379 = require("./765379.js"),
  Chunk652215 = require("./652215.js");
let c = e => [o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) && [e.name, e.application_id, e.assets, e.state, e.details, e.party].some(e => null != e) || e.type === o.$pd.LISTENING;

function u(e, t) {
  return (0, r.bG)([s.A, i.A, l.default], () => (e.id === l.default.getId() ? s.A.getActivities() : i.A.getActivities(e.id)).filter(c).filter(e => !(0, a.A)(e) && (null == t || null == e.application_id || null == t.application_id || e.application_id !== t.application_id)), [e.id, t], r.My)
}