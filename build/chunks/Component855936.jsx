/** Chunk was on 90228 **/
/** chunk id: 855936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk936388 = require("./936388.js"),
  Chunk195338 = require("./195338.js"),
  Chunk661251 = require("./661251.js");

function u() {
  let e = l.useRef(null);
  return (0, a.jsx)("div", {
    ref: e,
    className: i()(d.nd, c.n),
    children: (0, a.jsx)(s.Button, {
      variant: "primary",
      size: "sm",
      text: "Reset Uploaded Key Versions Cache",
      onClick: o.A.clearUploadedKeyVersions
    })
  })
}