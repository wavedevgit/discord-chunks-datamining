/** Chunk was on 1272 **/
/** chunk id: 726324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk506071 = require("./506071.js"),
  Chunk353254 = require("./353254.js"),
  Chunk64436 = require("./64436.js");

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: p
  } = e, f = a.QK.useSetting(), g = (0, o.n)(), [m, h] = (0, s.Z)(t, g && f);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      ref: m,
      className: c.coverImageContainer,
      children: null != h && (0, r.jsx)("img", {
        src: h,
        alt: "",
        className: c.coverImage
      })
    }), (0, r.jsx)("div", {
      className: c.guildIconContainer,
      children: (0, r.jsx)(l.Z, {
        guild: u,
        size: l.Z.Sizes.XLARGE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: c.ctaTitle,
      children: n
    }), (0, r.jsx)(i.Text, {
      className: c.ctaSubtitle,
      variant: "text-md/normal",
      color: "text-default",
      children: d
    }), p]
  })
}