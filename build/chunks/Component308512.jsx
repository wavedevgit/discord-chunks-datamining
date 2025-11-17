/** Chunk was on 2535 **/
/** chunk id: 308512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk223245 = require("./223245.js"),
  Chunk246946 = require("./246946.js"),
  Chunk388032 = require("./388032.jsx");

function c() {
  let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled, []);
  return (0, Chunk54381.jsx)(Chunk481060.S89, {
    id: "streamer-mode-toggle",
    label: Chunk388032.intl.string(Chunk388032.t.p9ZAJZ),
    action: () => {
      Chunk223245.Z.setEnabled(!module)
    },
    checked: module
  })
}