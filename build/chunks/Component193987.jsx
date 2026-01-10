/** Chunk was on 92091 **/
/** chunk id: 193987, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let n = (0, a.Xb)(t),
    i = t.isLockedThread();
  if (!(!n || t.isModeratorReportChannel())) return i ? (0, e.jsx)(l.sNh, {
    id: "unlock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
    action: () => r.Z.unlockThread(t)
  }) : (0, e.jsx)(l.sNh, {
    id: "lock-thread",
    label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
    action: () => r.Z.lockThread(t)
  })
}