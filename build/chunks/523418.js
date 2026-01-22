/** Chunk was on web.js **/
/** chunk id: 523418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f
});
var Chunk397927 = require("./397927.js"),
  Chunk723702 = require("./723702.js"),
  Chunk360619 = require("./360619.js"),
  Chunk682262 = require("./682262.js"),
  Chunk531525 = require("./531525.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  return [{
    id: l.J.MY_GAMES,
    title: c.intl.string(c.t["5DMgp9"]),
    icon: r.LVO,
    predicate: () => !i.isPlatformEmbedded,
    setting: o.H.GAMES_MY_GAMES
  }, {
    id: l.J.CLIPS,
    title: c.intl.string(c.t.z2jK6X),
    icon: r.xgA,
    setting: o.H.GAMES_CLIPS
  }, {
    id: l.J.OVERLAY,
    title: c.intl.string(c.t.bNqkD9),
    icon: r.vH5,
    predicate: () => !e,
    setting: o.H.GAMES_OVERLAY
  }, {
    id: l.J.ACTIVITY_PRIVACY,
    title: c.intl.string(c.t.Cq98yL),
    icon: r.gXB,
    setting: o.H.GAMES_ACTIVITY_PRIVACY
  }]
}

function d(e, t) {
  let n = u(e).filter(e => null == e.predicate || !e.predicate());
  if (null != t && t.size > 0) {
    let e = n.filter(e => t.has(e.setting));
    return e.length > 0 ? e : n
  }
  return n
}

function f() {
  return d((0, s.b_)(), (0, a.AC)(o.H.GAMES))
}