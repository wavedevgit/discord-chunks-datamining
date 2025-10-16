/** Chunk was on 89250 **/
/** chunk id: 193987, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, r.Xb)(t),
    e = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return e ? (0, i.jsx)(a.sNh, {
    id: "unlock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["/OKSxs"]) : s.intl.string(s.t["jeyb/f"]),
    action: () => l.Z.unlockThread(t)
  }) : (0, i.jsx)(a.sNh, {
    id: "lock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["Ur/0NT"]) : s.intl.string(s.t.HoCqm5),
    action: () => l.Z.lockThread(t)
  })
}