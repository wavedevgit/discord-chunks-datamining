/** Chunk was on 81288 **/
n.d(t, {
  c: () => m
});
var o = n(200651);
n(192379);
var i = n(481060),
  r = n(269128),
  a = n(358555),
  l = n(267642),
  c = n(26323),
  s = n(30513),
  d = n(981631),
  u = n(388032),
  _ = n(279788);

function g(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, o.jsx)("div", {
    className: _.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, o.jsxs)("div", {
      className: _.guildHeader,
      children: [(0, o.jsx)(a.Z, {
        guild: t,
        isBannerVisible: !0
      }), (0, o.jsx)(i.X6q, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: t.toString()
      }), (0, o.jsx)(r.Z, {
        className: _.dropdown,
        open: !1
      })]
    })
  })
}

function m(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: i,
    isGIF: r,
    banner: a
  } = e, _ = r ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
  null != _ && (0, c.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: i,
    headerProps: {
      title: u.NW.string(u.t["rv2H+/"]),
      subtitle: function(e, t) {
        let n = (0, l.nW)(e);
        return t ? u.NW.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.NW.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(_, r),
      image: (0, o.jsx)(g, {
        guild: i,
        banner: a
      })
    },
    perkIntro: u.NW.string(u.t.ZuItcH),
    perks: r ? (0, s.zC)() : (0, s.XO)()
  })
}