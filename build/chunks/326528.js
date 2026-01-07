/** Chunk was on web.js **/
/** chunk id: 326528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => f
});
var Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk991346 = require("./991346.js"),
  Chunk168308 = require("./168308.js"),
  Chunk726985 = require("./726985.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  return [{
    id: l.Z.MY_GAMES,
    title: c.intl.string(c.t["5DMgp9"]),
    icon: r.xoD,
    predicate: () => !i.isPlatformEmbedded,
    setting: s.s6.GAMES_MY_GAMES
  }, {
    id: l.Z.CLIPS,
    title: c.intl.string(c.t.z2jK6X),
    icon: r.AlX,
    setting: s.s6.GAMES_CLIPS
  }, {
    id: l.Z.OVERLAY,
    title: c.intl.string(c.t.bNqkD9),
    icon: r.n6r,
    predicate: () => !e,
    setting: s.s6.GAMES_OVERLAY
  }, {
    id: l.Z.ACTIVITY_PRIVACY,
    title: c.intl.string(c.t.Cq98yL),
    icon: r.qOE,
    setting: s.s6.GAMES_ACTIVITY_PRIVACY
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
  return d((0, o.bC)(), (0, a.Gj)(s.s6.GAMES))
}