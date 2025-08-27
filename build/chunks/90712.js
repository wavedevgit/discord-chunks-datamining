/** Chunk was on web.js **/
/** chunk id: 90712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk726542 = require("./726542.js"),
  Chunk394821 = require("./394821.js"),
  Chunk503438 = require("./503438.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk981631 = require("./981631.js");
let c = new Set([Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.YOUTUBE]);

function u(e) {
  if ((0, a.Z)(e)) return r.Z.get(l.ABu.SPOTIFY);
  if ((0, i.Z)(e)) return r.Z.get(l.ABu.CRUNCHYROLL);
  if ((0, s.Z)(e)) return r.Z.get(l.ABu.XBOX);
  if ((0, o.Z)(e)) return r.Z.get(l.ABu.PLAYSTATION);
  let t = r.Z.find(t => {
    let {
      name: n
    } = t;
    return n === e.name
  });
  return null != t && c.has(t.type) ? t : null
}