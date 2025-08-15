/** Chunk was on 22646 **/
/** chunk id: 900683, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  e: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252073 = require("./252073.js"),
  Chunk531599 = require("./531599.js");

function u() {
  return (0, Chunk951288.jsxs)("div", {
    className: r()(Chunk252073.upsellFooter, Chunk252073.reverseTrialUpsellContainer),
    children: [(0, Chunk951288.jsx)("img", {
      src: Chunk531599.Z,
      alt: "reverse trial unlock",
      className: Chunk252073.unlockIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: Chunk252073.upsellText,
      children: Chunk388032.intl.format(Chunk388032.t.f5VHKi, {})
    })]
  })
}

function d(e) {
  let {
    text: n,
    color: t
  } = e;
  return (0, i.jsxs)("div", {
    className: c.upsellFooter,
    children: [(0, i.jsx)(a.SrA, {
      size: "md",
      className: c.upsellFooterIcon,
      color: t
    }), (0, i.jsx)("div", {
      children: n
    })]
  })
}