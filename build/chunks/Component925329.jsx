/** Chunk was on web.js **/
/** chunk id: 925329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk829968 = require("./829968.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk235831 = require("./235831.js");
let f = {
  XXSMALL: Chunk235831.xxsmall,
  XSMALL: Chunk235831.xsmall,
  SMALL: Chunk235831.small,
  MEDIUM: Chunk235831.medium,
  LARGE: Chunk235831.large,
  XLARGE: Chunk235831.xlarge
};

function _(e) {
  switch (e) {
    case f.XXSMALL:
      return 16;
    case f.XSMALL:
      return 24;
    case f.SMALL:
      return 30;
    case f.MEDIUM:
      return 40;
    case f.LARGE:
      return 60;
    default:
      return 80
  }
}

function p(e) {
  if (null == e) return null;
  switch (e) {
    case c.Si.GUILD:
      return n(632342);
    case c.Si.TIER_0:
      return n(467596);
    case c.Si.TIER_1:
      return n(670957);
    case c.Si.TIER_2:
    case c.Si.LEGACY:
      return n(480768);
    default:
      return null
  }
}

function h(e) {
  switch (e) {
    case f.XSMALL:
      return l.Z.Sizes.SMALLER;
    case f.SMALL:
      return l.Z.Sizes.SMALL;
    case f.LARGE:
      return l.Z.Sizes.LARGE;
    default:
    case f.MEDIUM:
      return l.Z.Sizes.MEDIUM
  }
}
let m = e => {
  let t, {
    game: n,
    guild: i,
    skuId: c,
    pid: m,
    className: g,
    guildClassName: E,
    size: b = f.MEDIUM,
    allowUnknownGameIcon: y = true
  } = e;
  if (null != c && (t = p(c)), null != n && null == t && (t = n.getIconURL(_(b))), null == (t = (0, s.Z)(m, t)) && null != i) {
    let e = h(b);
    return (0, r.jsx)(l.Z, {
      className: o()(d.gameIcon, E, g),
      guild: i,
      size: e
    })
  }
  if (null == t) return y ? (0, r.jsx)(a.IMN, {
    size: "md",
    color: "currentColor",
    className: o()(d.gameIcon, b, g)
  }) : null;
  let O = null == n ? true : n.name,
    v = null != O && "" !== O ? u.intl.formatToPlainString(u.t.tiKyYm, {
      applicationName: O
    }) : u.intl.string(u.t["2B/phI"]);
  return (0, r.jsx)("img", {
    alt: v,
    src: t,
    className: o()(d.gameIcon, b, g)
  })
};
m.Sizes = f;
let g = m