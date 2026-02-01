/** Chunk was on 9207 **/
/** chunk id: 270887, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
let g = i().throttle(function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = u.Ay.getFlattenedGuildIds(),
    n = function(e) {
      let t = a.A.getState().guildId;
      if (null == t) return false;
      if (t === m.YYv) return false;
      let n = e.indexOf(t);
      return false === n ? false : n
    }(t);
  if (false !== (n += e) || (0, s.J)(l.A, o.A, c.A) || (n += e), false === n && (n = t.length - 1), n >= t.length || false === n) return void(0, p.a)(_.A.getHomeLink());
  let r = false === n ? m.YYv : t[n],
    i = d.A.getChannelId(r);
  (0, p.i)(r, i === r ? null : i, false)
}, Chunk652215.ugG)