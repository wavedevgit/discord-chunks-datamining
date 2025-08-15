/** Chunk was on 93886 **/
/** chunk id: 88658, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  $6: () => x,
  YK: () => o,
  _o: () => d,
  bL: () => m,
  gl: () => c,
  rr: () => u
}), require("./388685.js");
var Chunk695346 = require("./695346.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js");
require("./626135.js");
var Chunk981631 = require("./981631.js");
require("./388032.jsx");
let s = 864e5 * Chunk981631.eBq;

function o() {
  let e = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != l.Z.getGuild(e))), new Set(module)
}

function c() {
  let e = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != l.Z.getGuild(e))), new Set(module)
}

function d() {
  let e = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != l.Z.getGuild(e))), new Set(module)
}

function u() {
  let e = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != l.Z.getGuild(e))), new Set(module)
}

function m(e) {
  return (e & i.HGf) === i.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & i.SOq.MUTUAL_FRIENDS) === i.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & i.SOq.MUTUAL_GUILDS) === i.SOq.MUTUAL_GUILDS
  }
}

function x(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && s > Date.now() - new Date(e.created_at).getTime()
}