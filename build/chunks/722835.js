/** Chunk was on 1272 **/
/** chunk id: 722835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk209739 = require("./209739.js"),
  i = require.n(Chunk209739),
  Chunk872810 = require("./872810.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk102172 = require("./102172.js"),
  Chunk74299 = require("./74299.js"),
  Chunk299570 = require("./299570.js"),
  Chunk989941 = require("./989941.js"),
  Chunk70722 = require("./70722.js");

function v() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
  if (!(0, b.Z)(d.Z) || null != s.Z.getCurrentUserActiveStream()) returnfalse;
  let n = f.Z.getVoiceChannelId(),
    r = c.Z.getChannel(n);
  if (null == r) returnfalse;
  let v = r.getGuildId();
  if (!(0, m.JL)(r, u.Z, p.Z, false)) returnfalse;
  if (d.Z.getUseSystemScreensharePicker())(0, h.isMac)() && i().satisfies(null === a.Z || true === a.Z ? true : a.Z.os.release, O.jR) ? (0, _.T)() : (0, _.T)("window");
  else {
    let n = (0, E.Z)(o.ZP, g.Z);
    if (null == n || n.isLauncher && !e) returnfalse;
    (0, l.WH)(v, r.id, {
      pid: n.pid,
      analyticsLocations: t
    })
  }
  returntrue
}