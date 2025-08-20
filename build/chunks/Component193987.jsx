/** Chunk was on 99534 **/
/** chunk id: 193987, original params: t,n,i (module,exports,require) **/
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
  let n = (0, a.Xb)(t),
    i = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return i ? (0, e.jsx)(l.sNh, {
    id: "unlock-thread",
    label: t.isForumPost() ? d.intl.string(d.t["/OKSxs"]) : d.intl.string(d.t["jeyb/f"]),
    action: () => r.Z.unlockThread(t)
  }) : (0, e.jsx)(l.sNh, {
    id: "lock-thread",
    label: t.isForumPost() ? d.intl.string(d.t["Ur/0NT"]) : d.intl.string(d.t.HoCqm5),
    action: () => r.Z.lockThread(t)
  })
}