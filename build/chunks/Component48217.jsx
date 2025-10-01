/** Chunk was on 96033 **/
/** chunk id: 48217, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  c: () => g
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
      children: [(0, n.jsx)(r.Z, {
        guild: e,
        isBannerVisible: true
      }), (0, n.jsx)(a.X6q, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: e.name
      }), (0, n.jsx)(o.Z, {
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
    isGIF: o,
    banner: r
  } = t, _ = o ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
  null != _ && (0, s.Z)({
    analyticsLocations: e,
    analyticsSourceLocation: i,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(t, e) {
        let i = (0, l.nW)(t);
        return e ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: i
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: i
        })
      }(_, o),
      image: (0, n.jsx)(h, {
        guild: a,
        banner: r
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: o ? (0, c.zC)() : (0, c.XO)()
  })
}