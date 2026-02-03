/** Chunk was on 44669 **/
/** chunk id: 523418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => u
});
var Chunk397927 = require("./397927.js"),
  Chunk723702 = require("./723702.js"),
  Chunk360619 = require("./360619.js"),
  Chunk682262 = require("./682262.js"),
  Chunk531525 = require("./531525.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = (0, s.b_)(),
    t = (0, i.AC)(a.H.GAMES),
    n = [{
      id: o.J.MY_GAMES,
      title: c.intl.string(c.t["5DMgp9"]),
      icon: r.LVO,
      predicate: () => !l.isPlatformEmbedded,
      setting: a.H.GAMES_MY_GAMES
    }, {
      id: o.J.OVERLAY,
      title: c.intl.string(c.t.bNqkD9),
      icon: r.vH5,
      predicate: () => !e,
      setting: a.H.GAMES_OVERLAY
    }, {
      id: o.J.ACTIVITY_PRIVACY,
      title: c.intl.string(c.t.Cq98yL),
      icon: r.gXB,
      setting: a.H.GAMES_ACTIVITY_PRIVACY
    }].filter(e => null == e.predicate || !e.predicate());
  if (null != t && t.size > 0) {
    let e = n.filter(e => t.has(e.setting));
    return e.length > 0 ? e : n
  }
  return n
}