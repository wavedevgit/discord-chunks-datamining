/** Chunk was on 98775 **/
/** chunk id: 88658, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  $6: () => f,
  YK: () => u,
  _o: () => o,
  bL: () => g,
  gl: () => c,
  rr: () => d
}), require("./388685.js");
var Chunk695346 = require("./695346.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js");
require("./626135.js");
var Chunk981631 = require("./981631.js");
require("./388032.jsx");
let s = 864e5 * Chunk981631.eBq;

function u() {
  let t = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != a.Z.getGuild(t))), new Set(module)
}

function c() {
  let t = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != a.Z.getGuild(t))), new Set(module)
}

function o() {
  let t = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != a.Z.getGuild(t))), new Set(module)
}

function d() {
  let t = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (t = module.filter(t => null != a.Z.getGuild(t))), new Set(module)
}

function g(t) {
  return (t & r.HGf) === r.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (t & r.SOq.MUTUAL_FRIENDS) === r.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (t & r.SOq.MUTUAL_GUILDS) === r.SOq.MUTUAL_GUILDS
  }
}

function f(t, n) {
  return !!(!n.verified || n.isStaff()) || null != t && s > Date.now() - new Date(t.created_at).getTime()
}