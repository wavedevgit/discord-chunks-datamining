/** Chunk was on 88474 **/
/** chunk id: 845056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk765379 = require("./765379.js"),
  Chunk652215 = require("./652215.js");
let c = e => [o.$pd.PLAYING, o.$pd.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) || e.type === o.$pd.LISTENING;

function u(e, t) {
  return (0, r.bG)([a.A, i.A, l.default], () => (e.id === l.default.getId() ? a.A.getActivities() : i.A.getActivities(e.id)).filter(c).filter(e => !(0, s.A)(e) && (null == t || null == e.application_id || null == t.application_id || e.application_id !== t.application_id)), [e.id, t], r.My)
}