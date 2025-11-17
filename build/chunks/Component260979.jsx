/** Chunk was on 91053 **/
/** chunk id: 260979, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk965288 = require("./965288.jsx"),
  Chunk461918 = require("./461918.js");
let s = Chunk473749.memo(function(e) {
  let {
    channel: t,
    participants: n,
    maxTiles: i
  } = e;
  if (0 === n.length) return null;
  let s = [];
  for (let e = 0; e < i; e++)
    if (e < n.length) {
      let i = n[e];
      s.push((0, r.jsx)(l.Z, {
        channel: t,
        participant: i
      }, i.id))
    } else s.push((0, r.jsx)(l.y, {}, e));
  return (0, r.jsx)("div", {
    className: a.participants,
    children: s
  })
})