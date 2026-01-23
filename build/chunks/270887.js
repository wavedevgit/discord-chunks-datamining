/** Chunk was on web.js **/
/** chunk id: 270887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk181079 = require("./181079.js"),
  Chunk832275 = require("./832275.js"),
  Chunk366811 = require("./366811.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk711014 = require("./711014.js"),
  Chunk619921 = require("./619921.js"),
  Chunk265422 = require("./265422.js"),
  Chunk652215 = require("./652215.js");
let h = false,
  m = false,
  g = false;

function E(e) {
  let t = o.A.getState().guildId;
  if (null == t) return m;
  if (t === _.YYv) return g;
  let n = e.indexOf(t);
  return false === n ? m : n
}
let y = i().throttle(function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = d.Ay.getFlattenedGuildIds(),
    n = E(t);
  if ((n += e) !== g || (0, s.J)(a.A, l.A, c.A) || (n += e), n === h && (n = t.length - 1), n >= t.length || n === m) return void(0, p.a)(f.A.getHomeLink());
  let r = n === g ? _.YYv : t[n],
    i = u.A.getChannelId(r);
  (0, p.i)(r, i === r ? null : i, false)
}, Chunk652215.ugG)