/** Chunk was on 28532 **/
/** chunk id: 645973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk90641 = require("./90641.js"),
  Chunk55989 = require("./55989.js"),
  Chunk451429 = require("./451429.js");

function u() {
  let e = Chunk647438.useRef(null);
  return (0, Chunk951288.jsx)("div", {
    ref: module,
    className: r()(Chunk451429.panel, Chunk55989.panel),
    children: (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: Chunk90641.Z.clearUploadedKeyVersions
    })
  })
}