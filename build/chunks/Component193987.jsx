/** Chunk was on 78650 **/
/** chunk id: 193987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = (0, a.Xb)(e),
    n = e.isLockedThread();
  if (!(!t || e.isModeratorReportChannel())) return n ? (0, i.jsx)(r.sNh, {
    id: "unlock-thread",
    label: e.isForumPost() ? o.intl.string(o.t["/OKSxs"]) : o.intl.string(o.t["jeyb/f"]),
    action: () => l.Z.unlockThread(e)
  }) : (0, i.jsx)(r.sNh, {
    id: "lock-thread",
    label: e.isForumPost() ? o.intl.string(o.t["Ur/0NT"]) : o.intl.string(o.t.HoCqm5),
    action: () => l.Z.lockThread(e)
  })
}