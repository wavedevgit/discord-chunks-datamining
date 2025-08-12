/** Chunk was on 99319 **/
/** chunk id: 88658, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $6: () => _,
  YK: () => o,
  _o: () => c,
  bL: () => g,
  gl: () => u,
  rr: () => d
}), require("./388685.js");
var Chunk695346 = require("./695346.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js");
require("./626135.js");
var Chunk981631 = require("./981631.js");
require("./388032.jsx");
let s = 864e5 * Chunk981631.eBq;

function o() {
  let t = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != r.Z.getGuild(t))), new Set(module)
}

function u() {
  let t = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != r.Z.getGuild(t))), new Set(module)
}

function c() {
  let t = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != r.Z.getGuild(t))), new Set(module)
}

function d() {
  let t = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != r.Z.getGuild(t))), new Set(module)
}

function g(t) {
  return (t & a.HGf) === a.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (t & a.SOq.MUTUAL_FRIENDS) === a.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (t & a.SOq.MUTUAL_GUILDS) === a.SOq.MUTUAL_GUILDS
  }
}

function _(t, e) {
  return !!(!e.verified || e.isStaff()) || null != t && s > Date.now() - new Date(t.created_at).getTime()
}