/** Chunk was on 87916 **/
/** chunk id: 503566, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk551262 = require("./551262.jsx"),
  Chunk986268 = require("./986268.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk631305 = require("./631305.jsx"),
  Chunk874864 = require("./874864.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk227800 = require("./227800.js");

function A(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, a.jsx)("div", {
    className: _.C1,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, a.jsxs)("div", {
      className: _.F,
      children: [(0, a.jsx)(r.A, {
        guild: t,
        isBannerVisible: true
      }), (0, a.jsx)(i.Heading, {
        className: _.J5,
        variant: "heading-md/semibold",
        children: t.name
      }), (0, a.jsx)(l.A, {
        className: _.Wm,
        open: false
      })]
    })
  })
}

function f(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: i,
    isGIF: l,
    banner: r
  } = e, _ = l ? (0, s.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, s.Ys)(d.GuildFeatures.BANNER);
  if (null != _) {
    let e;
    (0, o.A)({
      analyticsLocations: t,
      analyticsSourceLocation: n,
      guild: i,
      headerProps: {
        title: u.intl.string(u.t["rv2H+1"]),
        subtitle: (e = (0, s.gb)(_), l ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
          targetLevelOrPlan: e
        }) : u.intl.formatToPlainString(u.t.B253V6, {
          targetLevelOrPlan: e
        })),
        image: (0, a.jsx)(A, {
          guild: i,
          banner: r
        })
      },
      perkIntro: u.intl.string(u.t.ZuItcI),
      perks: l ? (0, c.Pf)() : (0, c.QR)()
    })
  }
}