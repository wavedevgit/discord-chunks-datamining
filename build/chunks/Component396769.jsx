/** Chunk was on 13873 **/
/** chunk id: 396769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk830677 = require("./830677.js");

function s(e) {
  let {
    icon: t,
    onClick: n,
    label: s
  } = e;
  return (0, r.jsx)(i.zx, {
    look: i.zx.Looks.BLANK,
    size: i.zx.Sizes.MIN,
    className: o.button,
    onClick: n,
    children: (0, r.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      children: [(0, r.jsx)("div", {
        className: o.buttonIcon,
        children: t
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "none",
        children: s
      })]
    })
  })
}