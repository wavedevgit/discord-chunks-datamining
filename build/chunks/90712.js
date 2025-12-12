/** Chunk was on web.js **/
/** chunk id: 90712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk726542 = require("./726542.js"),
  Chunk394821 = require("./394821.js"),
  Chunk503438 = require("./503438.js"),
  Chunk177267 = require("./177267.js"),
  Chunk297196 = require("./297196.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk981631 = require("./981631.js");
let d = new Set([Chunk981631.ABu.LEAGUE_OF_LEGENDS, Chunk981631.ABu.ROBLOX, Chunk981631.ABu.TWITCH, Chunk981631.ABu.YOUTUBE]);

function f(e) {
  if ((0, o.Z)(e)) return r.Z.get(u.ABu.SPOTIFY);
  if ((0, i.Z)(e)) return r.Z.get(u.ABu.CRUNCHYROLL);
  if ((0, c.Z)(e)) return r.Z.get(u.ABu.XBOX);
  if ((0, l.Z)(e)) return r.Z.get(u.ABu.PLAYSTATION);
  if ((0, s.Z)(e) || (0, a.Z)(e)) return r.Z.get(u.ABu.META_QUEST_OR_HORIZON);
  let t = r.Z.find(t => {
    let {
      name: n
    } = t;
    return n === e.name
  });
  return null != t && d.has(t.type) ? t : null
}