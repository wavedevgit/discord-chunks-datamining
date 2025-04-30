/** Chunk was on 72891 **/
n.d(t, {
  c: () => g
});
var i = n(200651);
n(192379);
var a = n(481060),
  o = n(269128),
  l = n(358555),
  r = n(267642),
  c = n(26323),
  s = n(30513),
  d = n(981631),
  u = n(388032),
  _ = n(309818);

function f(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, i.jsx)("div", {
    className: _.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, i.jsxs)("div", {
      className: _.guildHeader,
      children: [(0, i.jsx)(l.Z, {
        guild: t,
        isBannerVisible: !0
      }), (0, i.jsx)(a.X6q, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: t.toString()
      }), (0, i.jsx)(o.Z, {
        className: _.dropdown,
        open: !1
      })]
    })
  })
}

function g(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: a,
    isGIF: o,
    banner: l
  } = e, _ = o ? (0, r._p)(d.oNc.ANIMATED_BANNER) : (0, r._p)(d.oNc.BANNER);
  null != _ && (0, c.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(e, t) {
        let n = (0, r.nW)(e);
        return t ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(_, o),
      image: (0, i.jsx)(f, {
        guild: a,
        banner: l
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: o ? (0, s.zC)() : (0, s.XO)()
  })
}