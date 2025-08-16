/** Chunk was on 36499 **/
/** chunk id: 755515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk450369 = require("./450369.jsx"),
  Chunk62219 = require("./62219.js");
let o = Chunk647438.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: o
  } = e;
  return (0, r.jsx)("div", {
    className: a.rowContainer,
    children: n.map(e => e.id === (null == o ? true : o.id) ? null : (0, r.jsx)(l.Z, {
      channel: t,
      participant: e,
      width: i
    }, e.id))
  })
})