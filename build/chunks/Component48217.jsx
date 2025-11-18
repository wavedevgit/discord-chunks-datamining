/** Chunk was on 96033 **/
/** chunk id: 48217, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  c: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk269128 = require("./269128.jsx"),
  Chunk358555 = require("./358555.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk30513 = require("./30513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124437 = require("./124437.js");

function h(t) {
  let {
    guild: e,
    banner: i
  } = t;
  return (0, n.jsx)("div", {
    className: _.guildBanner,
    style: {
      backgroundImage: "url(".concat(i)
    },
    children: (0, n.jsxs)("div", {
      className: _.guildHeader,
      children: [(0, n.jsx)(o.Z, {
        guild: e,
        isBannerVisible: true
      }), (0, n.jsx)(a.Heading, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: e.name
      }), (0, n.jsx)(r.Z, {
        className: _.dropdown,
        open: false
      })]
    })
  })
}

function g(t) {
  let {
    analyticsLocations: e,
    analyticsLocation: i,
    guild: a,
    isGIF: r,
    banner: o
  } = t, _ = r ? (0, l._p)(c.GuildFeatures.ANIMATED_BANNER) : (0, l._p)(c.GuildFeatures.BANNER);
  null != _ && (0, s.Z)({
    analyticsLocations: e,
    analyticsSourceLocation: i,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+1"]),
      subtitle: function(t, e) {
        let i = (0, l.nW)(t);
        return e ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
          targetLevelOrPlan: i
        }) : u.intl.formatToPlainString(u.t.B253V6, {
          targetLevelOrPlan: i
        })
      }(_, r),
      image: (0, n.jsx)(h, {
        guild: a,
        banner: o
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcI),
    perks: r ? (0, d.zC)() : (0, d.XO)()
  })
}