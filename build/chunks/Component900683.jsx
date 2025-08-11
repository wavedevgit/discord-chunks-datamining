/** Chunk was on 72939 **/
/** chunk id: 900683, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  e: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978862 = require("./978862.js"),
  Chunk531599 = require("./531599.js");

function p() {
  return (0, Chunk255367.jsxs)("div", {
    className: i()(Chunk978862.upsellFooter, Chunk978862.reverseTrialUpsellContainer),
    children: [(0, Chunk255367.jsx)("img", {
      src: Chunk531599.Z,
      alt: "reverse trial unlock",
      className: Chunk978862.unlockIcon
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: Chunk978862.upsellText,
      children: Chunk388032.intl.format(Chunk388032.t.f5VHKi, {})
    })]
  })
}

function _(e) {
  let {
    text: n,
    color: t
  } = e;
  return (0, o.jsxs)("div", {
    className: c.upsellFooter,
    children: [(0, o.jsx)(a.SrA, {
      size: "md",
      className: c.upsellFooterIcon,
      color: t
    }), (0, o.jsx)("div", {
      children: n
    })]
  })
}