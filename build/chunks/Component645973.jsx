/** Chunk was on 84249 **/
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
  let e = r.useRef(null);
  return (0, a.jsx)("div", {
    ref: e,
    className: l()(d.panel, c.panel),
    children: (0, a.jsx)(s.Button, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: o.Z.clearUploadedKeyVersions
    })
  })
}