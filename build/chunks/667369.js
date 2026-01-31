/** Chunk was on 17534 **/
/** chunk id: 667369, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk370876 = require("./370876.js"),
  Chunk946116 = require("./946116.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  if (t !== l.mU.ALL) return [{
    entries: (0, r._t)(e),
    appendEndCard: true
  }];
  let n = [],
    s = (0, r.A3)(e),
    a = new Set(s.map(e => e.guildId));
  s.length > 0 && n.push({
    header: i.intl.string(i.t.CbaapP),
    entries: s,
    appendEndCard: false
  });
  let o = e.filter(e => !a.has(e.guildId));
  return (o = (0, r.DN)(o)).length > 0 && n.push({
    header: i.intl.string(i.t.wxbhEe),
    entries: o,
    appendEndCard: true
  }), n
}