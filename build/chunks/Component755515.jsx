/** Chunk was on 54273 **/
/** chunk id: 755515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk450369 = require("./450369.jsx"),
  Chunk62219 = require("./62219.js");
let s = Chunk73800.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: s
  } = e;
  return (0, r.jsx)("div", {
    className: a.rowContainer,
    children: n.map(e => e.id === (null == s ? true : s.id) ? null : (0, r.jsx)(l.Z, {
      channel: t,
      participant: e,
      width: i
    }, e.id))
  })
})