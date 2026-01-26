/** Chunk was on web.js **/
/** chunk id: 845056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk290863 = require("./290863.js"),
  Chunk461213 = require("./461213.js"),
  Chunk765379 = require("./765379.js"),
  Chunk652215 = require("./652215.js");
let c = e => [l.$pd.PLAYING, l.$pd.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) || e.type === l.$pd.LISTENING;

function u(e, t) {
  return (0, r.bG)([s.A, a.A, i.default], () => (e.id === i.default.getId() ? s.A.getActivities() : a.A.getActivities(e.id)).filter(c).filter(e => !(0, o.A)(e) && (null == t || null == e.application_id || null == t.application_id || e.application_id !== t.application_id)), [e.id, t], r.My)
}