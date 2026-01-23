/** Chunk was on 97492 **/
/** chunk id: 694257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk945777 = require("./945777.jsx"),
  Chunk58249 = require("./58249.js");
let a = Chunk64700.memo(function(e) {
  let {
    channel: t,
    participants: n,
    maxTiles: l
  } = e;
  if (0 === n.length) return null;
  let a = [];
  for (let e = 0; e < l; e++)
    if (e < n.length) {
      let l = n[e];
      a.push((0, r.jsx)(i.A, {
        channel: t,
        participant: l
      }, l.id))
    } else a.push((0, r.jsx)(i.S, {}, e));
  return (0, r.jsx)("div", {
    className: s.l,
    children: a
  })
})