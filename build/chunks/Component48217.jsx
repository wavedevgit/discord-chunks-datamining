/** Chunk was on 88479 **/
/** chunk id: 48217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk269128 = require("./269128.jsx"),
  Chunk358555 = require("./358555.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk30513 = require("./30513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131115 = require("./131115.js");

function g(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, r.jsx)("div", {
    className: m.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, r.jsxs)("div", {
      className: m.guildHeader,
      children: [(0, r.jsx)(a.Z, {
        guild: t,
        isBannerVisible: true
      }), (0, r.jsx)(i.X6q, {
        className: m.guildName,
        variant: "heading-md/semibold",
        children: t.name
      }), (0, r.jsx)(l.Z, {
        className: m.dropdown,
        open: false
      })]
    })
  })
}

function p(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: i,
    isGIF: l,
    banner: a
  } = e, m = l ? (0, s._p)(d.oNc.ANIMATED_BANNER) : (0, s._p)(d.oNc.BANNER);
  null != m && (0, o.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: i,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(e, t) {
        let n = (0, s.nW)(e);
        return t ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(m, l),
      image: (0, r.jsx)(g, {
        guild: i,
        banner: a
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: l ? (0, c.zC)() : (0, c.XO)()
  })
}