/** Chunk was on 79521 **/
/** chunk id: 637565, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  T: () => o
}), require("./388685.js");
var Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk973542 = require("./973542.js"),
  Chunk790285 = require("./790285.js"),
  Chunk981631 = require("./981631.js");

function o(t, e, n) {
  let o = new Set;
  for (let t of Object.keys(n.permissionOverwrites)) {
    let i = e[t],
      l = n.permissionOverwrites[t];
    (0, r.Z)(i) && (0, a.TG)(n, l) && o.add(i)
  }
  let d = e[(0, i.lV)(t)],
    c = !(0, l.Fs)(d, s.Plq.VIEW_CHANNEL),
    u = (0, a.wB)(n, n.permissionOverwrites[t.id]);
  if (c && !u)
    for (let t of Object.values(e))(0, r.Z)(t) && (0, a.yt)(t) && o.add(t);
  return [...o]
}