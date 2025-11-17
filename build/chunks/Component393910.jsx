/** Chunk was on 51064 **/
/** chunk id: 393910, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26732 = require("./26732.js"),
  Chunk406763 = require("./406763.js"),
  Chunk893642 = require("./893642.js"),
  Chunk388032 = require("./388032.jsx");

function s(t, e) {
  let n = (0, i.e7)([l.Z], () => l.Z.getMute(t)),
    s = !n;
  return (0, r.jsx)(o.S89, {
    id: "mute-game",
    label: u.intl.string(u.t["6EwEwp"]),
    checked: n,
    action: () => {
      (0, c.Eq)({
        gameName: e,
        applicationId: t,
        label: s ? c.$_.MUTED : c.$_.UNMUTED,
        source: c.UE.GAME_CONTEXT_MENU
      }), (0, a.X)(t, s)
    }
  })
}