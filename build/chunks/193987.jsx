/** Chunk was on 46154 **/
/** chunk id: 193987, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.js");

function s(t) {
  let n = (0, r.Xb)(t),
    e = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return e ? <a.sNh id={"unlock-thread"} label={t.isForumPost() ? o.intl.string(o.t["/OKSxs"]) : o.intl.string(o.t["jeyb/f"])} action={() => l.Z.unlockThread(t)} /> : <a.sNh id={"lock-thread"} label={t.isForumPost() ? o.intl.string(o.t["Ur/0NT"]) : o.intl.string(o.t.HoCqm5)} action={() => l.Z.lockThread(t)} />
}