/** Chunk was on 82124 **/
/** chunk id: 453879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk975984 = require("./975984.js"),
  Chunk486527 = require("./486527.js"),
  Chunk388032 = require("./388032.jsx");

function a(e, t) {
  if (t !== i.AR.ALL) return [{
    entries: (0, r.TR)(e),
    appendEndCard: true
  }];
  let n = [],
    a = (0, r.Lz)(e),
    o = new Set(a.map(e => e.guildId));
  a.length > 0 && n.push({
    header: l.intl.string(l.t.CbaapP),
    entries: a,
    appendEndCard: false
  });
  let s = e.filter(e => !o.has(e.guildId));
  return (s = (0, r.Th)(s)).length > 0 && n.push({
    header: l.intl.string(l.t.wxbhEe),
    entries: s,
    appendEndCard: true
  }), n
}