/** Chunk was on 89250 **/
/** chunk id: 438536, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk388032 = require("./388032.jsx");

function d(t, n) {
  return (0, a.e7)([r.Z], () => r.Z.hasJoined(t.id)) ? (0, i.jsx)(l.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
    action: () => s.Z.leaveThread(t, n)
  }) : (0, i.jsx)(l.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
    action: () => s.Z.joinThread(t, n)
  })
}