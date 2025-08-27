/** Chunk was on web.js **/
/** chunk id: 88658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $6: () => _,
  YK: () => l,
  _o: () => u,
  bL: () => f,
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

function l() {
  let e = Chunk695346.h2.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != a.Z.getGuild(e))), new Set(module)
}

function c() {
  let e = Chunk695346.zA.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != a.Z.getGuild(e))), new Set(module)
}

function u() {
  let e = Chunk695346.SE.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != a.Z.getGuild(e))), new Set(module)
}

function d() {
  let e = Chunk695346.iH.getSetting();
  return 0 === Chunk486472.Z.totalUnavailableGuilds && (e = module.filter(e => null != a.Z.getGuild(e))), new Set(module)
}

function f(e) {
  return (e & o.HGf) === o.HGf ? {
    all: true,
    mutualFriends: true,
    mutualGuilds: true
  } : {
    all: false,
    mutualFriends: (e & o.SOq.MUTUAL_FRIENDS) === o.SOq.MUTUAL_FRIENDS,
    mutualGuilds: (e & o.SOq.MUTUAL_GUILDS) === o.SOq.MUTUAL_GUILDS
  }
}

function _(e, t) {
  return !!(!t.verified || t.isStaff()) || null != e && s > Date.now() - new Date(e.created_at).getTime()
}