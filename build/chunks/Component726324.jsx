/** Chunk was on 1272 **/
/** chunk id: 726324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk506071 = require("./506071.js"),
  Chunk353254 = require("./353254.js"),
  Chunk696118 = require("./696118.js");

function u(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: u,
    description: d,
    children: p
  } = e, f = a.QK.useSetting(), m = (0, s.n)(), [h, g] = (0, o.Z)(t, m && f);
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      ref: h,
      className: c.coverImageContainer,
      children: null != g && (0, r.jsx)("img", {
        src: g,
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
      color: "header-secondary",
      children: d
    }), p]
  })
}