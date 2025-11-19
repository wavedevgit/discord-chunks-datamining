/** Chunk was on 72891 **/
/** chunk id: 48217, original params: e,t,n (module,exports,require) **/
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
  Chunk131115 = require("./131115.js");

function _(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, i.jsx)("div", {
    className: f.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, i.jsxs)("div", {
      className: f.guildHeader,
      children: [(0, i.jsx)(o.Z, {
        guild: t,
        isBannerVisible: true
      }), (0, i.jsx)(a.Heading, {
        className: f.guildName,
        variant: "heading-md/semibold",
        children: t.name
      }), (0, i.jsx)(r.Z, {
        className: f.dropdown,
        open: false
      })]
    })
  })
}

function g(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: a,
    isGIF: r,
    banner: o
  } = e, f = r ? (0, l._p)(d.GuildFeatures.ANIMATED_BANNER) : (0, l._p)(d.GuildFeatures.BANNER);
  null != f && (0, c.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+1"]),
      subtitle: function(e, t) {
        let n = (0, l.nW)(e);
        return t ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V6, {
          targetLevelOrPlan: n
        })
      }(f, r),
      image: (0, i.jsx)(_, {
        guild: a,
        banner: o
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcI),
    perks: r ? (0, s.zC)() : (0, s.XO)()
  })
}