/** Chunk was on 6043 **/
/** chunk id: 645973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk90641 = require("./90641.js"),
  Chunk886795 = require("./886795.js"),
  Chunk663618 = require("./663618.js");

function u() {
  let e = Chunk473749.useRef(null);
  return (0, Chunk54381.jsx)("div", {
    ref: module,
    className: l()(Chunk663618.panel, Chunk886795.panel),
    children: (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: Chunk90641.Z.clearUploadedKeyVersions
    })
  })
}