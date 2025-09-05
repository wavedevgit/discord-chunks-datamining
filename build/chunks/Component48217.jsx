/** Chunk was on 96033 **/
/** chunk id: 48217, original params: t,e,n (module,exports,require) **/
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
    banner: n
  } = t;
  return (0, i.jsx)("div", {
    className: _.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, i.jsxs)("div", {
      className: _.guildHeader,
      children: [(0, i.jsx)(r.Z, {
        guild: e,
        isBannerVisible: true
      }), (0, i.jsx)(o.X6q, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: e.name
      }), (0, i.jsx)(a.Z, {
        className: _.dropdown,
        open: false
      })]
    })
  })
}

function g(t) {
  let {
    analyticsLocations: e,
    analyticsLocation: n,
    guild: o,
    isGIF: a,
    banner: r
  } = t, _ = a ? (0, l._p)(c.oNc.ANIMATED_BANNER) : (0, l._p)(c.oNc.BANNER);
  null != _ && (0, s.Z)({
    analyticsLocations: e,
    analyticsSourceLocation: n,
    guild: o,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(t, e) {
        let n = (0, l.nW)(t);
        return e ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(_, a),
      image: (0, i.jsx)(h, {
        guild: o,
        banner: r
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: a ? (0, d.zC)() : (0, d.XO)()
  })
}