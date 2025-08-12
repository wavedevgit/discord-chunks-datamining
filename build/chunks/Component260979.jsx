/** Chunk was on 21087 **/
/** chunk id: 260979, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk965288 = require("./965288.jsx"),
  Chunk5519 = require("./5519.js");
let s = Chunk73800.memo(function(e) {
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