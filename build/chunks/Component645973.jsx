/** Chunk was on 65347 **/
/** chunk id: 645973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk90641 = require("./90641.js"),
  Chunk418472 = require("./418472.js"),
  Chunk866403 = require("./866403.js");

function u() {
  let e = Chunk473749.useRef(null);
  return (0, Chunk54381.jsx)("div", {
    ref: module,
    className: i()(Chunk866403.panel, Chunk418472.panel),
    children: (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: Chunk90641.Z.clearUploadedKeyVersions
    })
  })
}