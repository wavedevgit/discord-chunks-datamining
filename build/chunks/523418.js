/** Chunk was on 82575 **/
/** chunk id: 523418, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => d
});
var Chunk397927 = require("./397927.js"),
  Chunk723702 = require("./723702.js"),
  Chunk360619 = require("./360619.js"),
  Chunk682262 = require("./682262.js"),
  Chunk531525 = require("./531525.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  let e = (0, r.b_)(),
    t = (0, l.AC)(a.H.GAMES),
    n = [{
      id: o.J.MY_GAMES,
      title: c.intl.string(c.t["5DMgp9"]),
      icon: i.LVO,
      predicate: () => !s.isPlatformEmbedded,
      setting: a.H.GAMES_MY_GAMES
    }, {
      id: o.J.OVERLAY,
      title: c.intl.string(c.t.bNqkD9),
      icon: i.vH5,
      predicate: () => !e,
      setting: a.H.GAMES_OVERLAY
    }, {
      id: o.J.ACTIVITY_PRIVACY,
      title: c.intl.string(c.t.Cq98yL),
      icon: i.gXB,
      setting: a.H.GAMES_ACTIVITY_PRIVACY
    }].filter(e => null == e.predicate || !e.predicate());
  if (null != t && t.size > 0) {
    let e = n.filter(e => t.has(e.setting));
    return e.length > 0 ? e : n
  }
  return n
}