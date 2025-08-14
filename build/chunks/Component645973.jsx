/** Chunk was on 93886 **/
/** chunk id: 645973, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk90641 = require("./90641.js"),
  Chunk55989 = require("./55989.js"),
  Chunk451429 = require("./451429.js");

function u() {
  let e = Chunk73800.useRef(null);
  return (0, Chunk255367.jsx)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk55989.panel),
    children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: Chunk90641.Z.clearUploadedKeyVersions
    })
  })
}