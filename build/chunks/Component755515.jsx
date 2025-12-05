/** Chunk was on 89522 **/
/** chunk id: 755515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk450369 = require("./450369.jsx"),
  Chunk62219 = require("./62219.js");
let s = Chunk473749.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: s,
    popoutType: o
  } = e;
  return (0, r.jsx)("div", {
    className: a.rowContainer,
    children: n.map(e => e.id === (null == s ? true : s.id) ? null : (0, r.jsx)(l.Z, {
      channel: t,
      participant: e,
      width: i,
      popoutType: o
    }, e.id))
  })
})