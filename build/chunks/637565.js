/** Chunk was on 30557 **/
/** chunk id: 637565, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  T: () => s
}), require("./388685.js");
var Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk973542 = require("./973542.js"),
  Chunk790285 = require("./790285.js"),
  Chunk981631 = require("./981631.js");

function s(t, n, e) {
  let s = new Set;
  for (let t of Object.keys(e.permissionOverwrites)) {
    let i = n[t],
      l = e.permissionOverwrites[t];
    (0, r.Z)(i) && (0, a.TG)(e, l) && s.add(i)
  }
  let _ = n[(0, i.lV)(t)],
    o = !(0, l.Fs)(_, d.Plq.VIEW_CHANNEL),
    p = (0, a.wB)(e, e.permissionOverwrites[t.id]);
  if (o && !p)
    for (let t of Object.values(n))(0, r.Z)(t) && (0, a.yt)(t) && s.add(t);
  return [...s]
}