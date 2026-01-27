/** Chunk was on web.js **/
/** chunk id: 129894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk573648 = require("./573648.js"),
  Chunk541806 = require("./541806.js"),
  Chunk90644 = require("./90644.js"),
  Chunk788733 = require("./788733.js"),
  Chunk765902 = require("./765902.js"),
  Chunk141639 = require("./141639.js"),
  Chunk61330 = require("./61330.js"),
  Chunk652215 = require("./652215.js");
let d = new Set([Chunk652215.fg2.LEAGUE_OF_LEGENDS, Chunk652215.fg2.ROBLOX, Chunk652215.fg2.TWITCH, Chunk652215.fg2.YOUTUBE]);

function f(e) {
  if ((0, a.A)(e)) return r.A.get(u.fg2.SPOTIFY);
  if ((0, i.A)(e)) return r.A.get(u.fg2.CRUNCHYROLL);
  if ((0, c.A)(e)) return r.A.get(u.fg2.XBOX);
  if ((0, l.A)(e)) return r.A.get(u.fg2.PLAYSTATION);
  if ((0, s.A)(e) || (0, o.A)(e)) return r.A.get(u.fg2.META_QUEST_OR_HORIZON);
  let t = r.A.find(t => {
    let {
      name: n
    } = t;
    return n === e.name
  });
  return null != t && d.has(t.type) ? t : null
}