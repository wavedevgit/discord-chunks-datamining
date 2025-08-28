/** Chunk was on 56011 **/
/** chunk id: 260979, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk965288 = require("./965288.jsx"),
  Chunk461918 = require("./461918.js");
let o = Chunk647438.memo(function(e) {
  let {
    channel: t,
    participants: n,
    maxTiles: i
  } = e;
  if (0 === n.length) return null;
  let o = [];
  for (let e = 0; e < i; e++)
    if (e < n.length) {
      let i = n[e];
      o.push((0, r.jsx)(l.Z, {
        channel: t,
        participant: i
      }, i.id))
    } else o.push((0, r.jsx)(l.y, {}, e));
  return (0, r.jsx)("div", {
    className: a.participants,
    children: o
  })
})