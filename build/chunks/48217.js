/** Chunk was on 77068 **/
n.d(e, {
  c: () => h
});
var i = n(255367);
n(73800);
var o = n(481060),
  a = n(269128),
  r = n(358555),
  l = n(267642),
  s = n(26323),
  d = n(30513),
  c = n(981631),
  u = n(388032),
  _ = n(825816);

function g(t) {
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
        isBannerVisible: !0
      }), (0, i.jsx)(o.X6q, {
        className: _.guildName,
        variant: "heading-md/semibold",
        children: e.toString()
      }), (0, i.jsx)(a.Z, {
        className: _.dropdown,
        open: !1
      })]
    })
  })
}

function h(t) {
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
      image: (0, i.jsx)(g, {
        guild: o,
        banner: r
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: a ? (0, d.zC)() : (0, d.XO)()
  })
}