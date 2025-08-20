/** Chunk was on 79521 **/
/** chunk id: 637565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => o
}), require("./388685.js");
var Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk973542 = require("./973542.js"),
  Chunk790285 = require("./790285.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  let o = new Set;
  for (let e of Object.keys(n.permissionOverwrites)) {
    let l = t[e],
      i = n.permissionOverwrites[e];
    (0, r.Z)(l) && (0, u.TG)(n, i) && o.add(l)
  }
  let s = t[(0, l.lV)(e)],
    c = !(0, i.Fs)(s, a.Plq.VIEW_CHANNEL),
    d = (0, u.wB)(n, n.permissionOverwrites[e.id]);
  if (c && !d)
    for (let e of Object.values(t))(0, r.Z)(e) && (0, u.yt)(e) && o.add(e);
  return [...o]
}