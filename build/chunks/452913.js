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
let h = false,
  m = false,
  g = false;

function E(e) {
  let t = s.Z.getState().guildId;
  if (null == t) return m;
  if (t === _.I_8) return g;
  let n = e.indexOf(t);
  return false === n ? m : n
}
let b = i().throttle(function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = d.ZP.getFlattenedGuildIds(),
    n = E(t);
  if ((n += e) !== g || (0, o.z)(a.Z, l.Z, c.Z) || (n += e), n === h && (n = t.length - 1), n >= t.length || n === m) return void(0, p.z)(f.Z.getHomeLink());
  let r = n === g ? _.I_8 : t[n],
    i = u.Z.getChannelId(r);
  (0, p.K)(r, i === r ? null : i, false)
}, Chunk981631.aZC)