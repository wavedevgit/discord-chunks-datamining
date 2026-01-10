/** Chunk was on 81985 **/
/** chunk id: 755515, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk450369 = require("./450369.jsx"),
  Chunk213403 = require("./213403.js");
let o = Chunk473749.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: i,
    selectedParticipant: o,
    popoutType: s
  } = e;
  return (0, r.jsx)("div", {
    className: a.rowContainer,
    children: n.map(e => e.id === (null == o ? true : o.id) ? null : (0, r.jsx)(l.Z, {
      channel: t,
      participant: e,
      width: i,
      popoutType: s
    }, e.id))
  })
})