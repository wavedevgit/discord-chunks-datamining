/** Chunk was on 99534 **/
/** chunk id: 438536, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk388032 = require("./388032.jsx");

function s(t, n) {
  return (0, l.e7)([a.Z], () => a.Z.hasJoined(t.id)) ? (0, e.jsx)(r.sNh, {
    id: "leave-thread",
    label: t.isForumPost() ? o.intl.string(o.t["2LsZdX"]) : o.intl.string(o.t["fa/84u"]),
    action: () => d.Z.leaveThread(t, n)
  }) : (0, e.jsx)(r.sNh, {
    id: "join-thread",
    label: t.isForumPost() ? o.intl.string(o.t.ihLPiI) : o.intl.string(o.t["10kukZ"]),
    action: () => d.Z.joinThread(t, n)
  })
}