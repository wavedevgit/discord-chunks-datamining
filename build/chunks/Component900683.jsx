/** Chunk was on 98098 **/
/** chunk id: 900683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  e: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882789 = require("./882789.js"),
  Chunk531599 = require("./531599.js");

function d() {
  return (0, Chunk255367.jsxs)("div", {
    className: r()(Chunk882789.upsellFooter, Chunk882789.reverseTrialUpsellContainer),
    children: [(0, Chunk255367.jsx)("img", {
      src: Chunk531599.Z,
      alt: "reverse trial unlock",
      className: Chunk882789.unlockIcon
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      className: Chunk882789.upsellText,
      children: Chunk388032.intl.format(Chunk388032.t.f5VHKi, {})
    })]
  })
}

function s(e) {
  let {
    text: t,
    color: n
  } = e;
  return (0, l.jsxs)("div", {
    className: c.upsellFooter,
    children: [(0, l.jsx)(i.SrA, {
      size: "md",
      className: c.upsellFooterIcon,
      color: n
    }), (0, l.jsx)("div", {
      children: t
    })]
  })
}