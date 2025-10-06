/** Chunk was on 50118 **/
/** chunk id: 396769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk906067 = require("./906067.js");

function s(e) {
  let {
    icon: t,
    onClick: n,
    label: s
  } = e;
  return (0, i.jsx)(r.zx, {
    look: r.zx.Looks.BLANK,
    size: r.zx.Sizes.MIN,
    className: o.button,
    onClick: n,
    children: (0, i.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: o.buttonIcon,
        children: t
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "none",
        children: s
      })]
    })
  })
}