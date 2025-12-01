/** Chunk was on web.js **/
/** chunk id: 452913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk853856 = require("./853856.js"),
  Chunk706590 = require("./706590.js"),
  Chunk905423 = require("./905423.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk771845 = require("./771845.js"),
  Chunk774343 = require("./774343.js"),
  Chunk475468 = require("./475468.js"),
  Chunk981631 = require("./981631.js");
let m = false,
  h = false,
  g = false;

function E(e) {
  let t = s.Z.getState().guildId;
  if (null == t) return h;
  if (t === _.I_8) return g;
  let n = e.indexOf(t);
  return false === n ? h : n
}
let b = i().throttle(function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = Chunk771845.ZP.getFlattenedGuildIds(),
    n = E(exports);
  if ((n += module) !== g || (0, Chunk706590.z)(Chunk853856.Z, Chunk592125.Z, Chunk496675.Z) || (n += module), require === m && (n = exports.length - 1), require >= exports.length || require === h) return void(0, Chunk475468.z)(Chunk774343.Z.getHomeLink());
  let r = require === g ? Chunk981631.I_8 : exports[require],
    i = Chunk944486.Z.getChannelId(Chunk392711);
  (0, Chunk475468.K)(Chunk392711, i === Chunk392711 ? null : i, false)
}, Chunk981631.aZC)