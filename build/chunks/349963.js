/** Chunk was on 21738 **/
/** chunk id: 349963, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk299855 = require("./299855.js"),
  i = require.n(Chunk299855),
  Chunk401843 = require("./401843.js"),
  Chunk77729 = require("./77729.js"),
  Chunk15285 = require("./15285.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk157257 = require("./157257.js"),
  Chunk723702 = require("./723702.js"),
  Chunk279250 = require("./279250.js"),
  Chunk880144 = require("./880144.js"),
  Chunk997630 = require("./997630.js"),
  Chunk905552 = require("./905552.js"),
  Chunk502075 = require("./502075.js");

function O() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (!(0, A.A)(d.A) || null != o.A.getCurrentUserActiveStream()) returnfalse;
  let n = h.A.getVoiceChannelId(),
    r = c.A.getChannel(n);
  if (null == r) returnfalse;
  let O = r.getGuildId();
  if (!(0, m.vz)(r, u.A, p.A, false)) returnfalse;
  if (d.A.getUseSystemScreensharePicker())(0, g.isMac)() && i().satisfies(null === a.A || true === a.A ? true : a.A.os.release, E.WZ) ? (0, _.a)() : (0, _.a)("window");
  else {
    let n = (0, b.A)(s.Ay, f.A);
    if (null == n || n.isLauncher && !e) returnfalse;
    (0, l.XI)(O, r.id, {
      pid: n.pid,
      analyticsLocations: t
    })
  }
  returntrue
}