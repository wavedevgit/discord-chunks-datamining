/** Chunk was on 97492 **/
/** chunk id: 120017, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk763793 = require("./763793.jsx"),
  Chunk532485 = require("./532485.js");
let s = Chunk64700.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: l,
    selectedParticipant: s,
    popoutType: o
  } = e;
  return (0, r.jsx)("div", {
    className: a.q,
    children: n.map(e => e.id === (null == s ? true : s.id) ? null : (0, r.jsx)(i.A, {
      channel: t,
      participant: e,
      width: l,
      popoutType: o
    }, e.id))
  })
})