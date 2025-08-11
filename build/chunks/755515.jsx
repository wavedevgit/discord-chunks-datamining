/** Chunk was on 49152 **/
/** chunk id: 755515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk450369 = require("./450369.jsx"),
  Chunk172211 = require("./172211.js");
let s = Chunk73800.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: s
  } = e;
  return <div className={a.rowContainer}>{n.map(e => e.id === (null == s ? true : s.id) ? null : (0, r.jsx)(l.Z, {
      channel: t,
      participant: e,
      width: i
    }, e.id))}</div>
})