/** Chunk was on 51064 **/
/** chunk id: 393910, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk406763 = require("./406763.js"),
  Chunk893642 = require("./893642.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let e = (0, i.e7)([a.Z], () => a.Z.getMute(t));
  return (0, r.jsx)(c.S89, {
    id: "mute-game",
    label: l.intl.string(l.t["6EwEws"]),
    checked: e,
    action: () => {
      (0, o.X)(t, !e)
    }
  })
}