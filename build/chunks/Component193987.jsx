/** Chunk was on 89250 **/
/** chunk id: 193987, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let n = (0, r.Xb)(t),
    e = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return e ? (0, i.jsx)(l.sNh, {
    id: "unlock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
    action: () => a.Z.unlockThread(t)
  }) : (0, i.jsx)(l.sNh, {
    id: "lock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
    action: () => a.Z.lockThread(t)
  })
}