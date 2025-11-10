/** Chunk was on web.js **/
/** chunk id: 925329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk829968 = require("./829968.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520816 = require("./520816.js");
let _ = {
  XXSMALL: Chunk520816.xxsmall,
  XSMALL: Chunk520816.xsmall,
  SMALL: Chunk520816.small,
  MEDIUM: Chunk520816.medium,
  MEDIUM_LARGE: Chunk520816.mediumLarge,
  LARGE: Chunk520816.large,
  XLARGE: Chunk520816.xlarge
};

function p(e) {
  switch (e) {
    case _.XXSMALL:
      return 16;
    case _.XSMALL:
      return 24;
    case _.SMALL:
      return 30;
    case _.MEDIUM:
      return 40;
    case _.MEDIUM_LARGE:
      return 48;
    case _.LARGE:
      return 60;
    default:
      return 80
  }
}

function h(e) {
  if (null == e) return null;
  switch (e) {
    case u.Si.GUILD:
      return n(632342);
    case u.Si.TIER_0:
      return n(467596);
    case u.Si.TIER_1:
      return n(670957);
    case u.Si.TIER_2:
    case u.Si.LEGACY:
      return n(480768);
    default:
      return null
  }
}

function m(e) {
  switch (e) {
    case _.XSMALL:
      return c.Z.Sizes.SMALLER;
    case _.SMALL:
      return c.Z.Sizes.SMALL;
    case _.LARGE:
      return c.Z.Sizes.LARGE;
    default:
    case _.MEDIUM:
      return c.Z.Sizes.MEDIUM
  }
}
let g = Chunk647438.forwardRef(function(e, t) {
  let n, {
    game: i,
    guild: a,
    skuId: u,
    pid: g,
    className: E,
    guildClassName: b,
    size: y = _.MEDIUM,
    allowUnknownGameIcon: O = true
  } = e;
  if (null != u && (n = h(u)), null != i && null == n && (n = i.getIconURL(p(y))), true === (n = (0, l.Z)(g, n)) && null != a) {
    let e = m(y);
    return (0, r.jsx)(c.Z, {
      className: o()(f.gameIcon, b, E),
      guild: a,
      size: e
    })
  }
  if (true === n || "" === n) return O ? (0, r.jsx)(s.IMN, {
    size: "md",
    color: "currentColor",
    className: o()(f.gameIcon, y, E)
  }) : null;
  let v = null == i ? true : i.name,
    I = null != v && "" !== v ? d.intl.formatToPlainString(d.t.tiKyYg, {
      applicationName: v
    }) : d.intl.string(d.t["2B/phM"]);
  return (0, r.jsx)("img", {
    ref: t,
    alt: I,
    src: n,
    className: o()(f.gameIcon, y, E)
  })
})