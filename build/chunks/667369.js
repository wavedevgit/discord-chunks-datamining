/** Chunk was on 97492 **/
/** chunk id: 667369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk370876 = require("./370876.js"),
  Chunk946116 = require("./946116.js"),
  Chunk985018 = require("./985018.jsx");

function a(e, t) {
  if (t !== l.mU.ALL) return [{
    entries: (0, r._t)(e),
    appendEndCard: true
  }];
  let n = [],
    a = (0, r.A3)(e),
    s = new Set(a.map(e => e.guildId));
  a.length > 0 && n.push({
    header: i.intl.string(i.t.CbaapP),
    entries: a,
    appendEndCard: false
  });
  let o = e.filter(e => !s.has(e.guildId));
  return (o = (0, r.DN)(o)).length > 0 && n.push({
    header: i.intl.string(i.t.wxbhEe),
    entries: o,
    appendEndCard: true
  }), n
}