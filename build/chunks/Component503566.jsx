/** Chunk was on 87916 **/
/** chunk id: 503566, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  _: () => _
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
    banner: a
  } = e;
  return (0, n.jsx)("div", {
    className: f.C1,
    style: {
      backgroundImage: "url(".concat(a)
    },
    children: (0, n.jsxs)("div", {
      className: f.F,
      children: [(0, n.jsx)(l.A, {
        guild: t,
        isBannerVisible: true
      }), (0, n.jsx)(s.Heading, {
        className: f.J5,
        variant: "heading-md/semibold",
        children: t.name
      }), (0, n.jsx)(i.A, {
        className: f.Wm,
        open: false
      })]
    })
  })
}

function _(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: a,
    guild: s,
    isGIF: i,
    banner: l
  } = e, f = i ? (0, r.Ys)(d.GuildFeatures.ANIMATED_BANNER) : (0, r.Ys)(d.GuildFeatures.BANNER);
  if (null != f) {
    let e;
    (0, c.A)({
      analyticsLocations: t,
      analyticsSourceLocation: a,
      guild: s,
      headerProps: {
        title: u.intl.string(u.t["rv2H+1"]),
        subtitle: (e = (0, r.gb)(f), i ? u.intl.formatToPlainString(u.t["TR/Uyt"], {
          targetLevelOrPlan: e
        }) : u.intl.formatToPlainString(u.t.B253V6, {
          targetLevelOrPlan: e
        })),
        image: (0, n.jsx)(A, {
          guild: s,
          banner: l
        })
      },
      perkIntro: u.intl.string(u.t.ZuItcI),
      perks: i ? (0, o.Pf)() : (0, o.QR)()
    })
  }
}