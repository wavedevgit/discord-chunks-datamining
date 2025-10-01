/** Chunk was on 82611 **/
/** chunk id: 438536, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  return (0, l.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, i.jsx)(r.sNh, {
    id: "leave-thread",
    label: e.isForumPost() ? u.intl.string(u.t["2LsZdX"]) : u.intl.string(u.t["fa/84u"]),
    action: () => o.Z.leaveThread(e, t)
  }) : (0, i.jsx)(r.sNh, {
    id: "join-thread",
    label: e.isForumPost() ? u.intl.string(u.t.ihLPiI) : u.intl.string(u.t["10kukZ"]),
    action: () => o.Z.joinThread(e, t)
  })
}