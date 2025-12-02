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
  if (!(0, Chunk74299.Z)(Chunk131951.Z) || null != Chunk199902.Z.getCurrentUserActiveStream()) returnfalse;
  let n = Chunk944486.Z.getVoiceChannelId(),
    r = Chunk592125.Z.getChannel(require);
  if (null == Chunk209739) returnfalse;
  let v = Chunk209739.getGuildId();
  if (!(0, Chunk102172.JL)(Chunk209739, Chunk430824.Z, Chunk496675.Z, false)) returnfalse;
  if (Chunk131951.Z.getUseSystemScreensharePicker())(0, Chunk358085.isMac)() && i().satisfies(null === Chunk579806.Z || true === Chunk579806.Z ? true : Chunk579806.Z.os.release, Chunk70722.jR) ? (0, Chunk299570.T)() : (0, Chunk299570.T)("window");
  else {
    let n = (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z);
    if (null == require || require.isLauncher && !module) returnfalse;
    (0, Chunk872810.WH)(v, Chunk209739.id, {
      pid: require.pid,
      analyticsLocations: exports
    })
  }
  returntrue
}