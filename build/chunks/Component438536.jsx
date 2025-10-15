/** Chunk was on 46154 **/
/** chunk id: 438536, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk388032 = require("./388032.jsx");

function d(t, n) {
  return (0, l.e7)([r.Z], () => r.Z.hasJoined(t.id)) ? (0, i.jsx)(a.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
    action: () => s.Z.leaveThread(t, n)
  }) : (0, i.jsx)(a.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
    action: () => s.Z.joinThread(t, n)
  })
}