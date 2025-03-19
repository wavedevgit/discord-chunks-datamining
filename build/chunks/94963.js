/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => w
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(688619),
  a = n.n(s),
  l = n(120356),
  o = n.n(l),
  c = n(97028),
  A = n(866442),
  d = n(442837),
  u = n(481060),
  g = n(650774),
  f = n(430824),
  m = n(900681),
  p = n(175557),
  h = n(688298),
  C = n(995119),
  b = n(116175),
  v = n(308083),
  x = n(388032),
  N = n(22418),
  j = n(154662);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = [{
    name: "Night Sky",
    bannerKind: v.qC.NIGHT_SKY,
    icon: u.Z6G
  }, {
    name: "Castle",
    bannerKind: v.qC.CASTLE,
    icon: u.CEn
  }, {
    name: "World Map",
    bannerKind: v.qC.WORLD_MAP,
    icon: u.enf
  }, {
    name: "Sea Foam",
    bannerKind: v.qC.SEA_FOAM,
    icon: u.Vkn
  }, {
    name: "Warp",
    bannerKind: v.qC.WARP_TUNNEL,
    icon: u.yMH
  }, {
    name: "House",
    bannerKind: v.qC.HOUSE,
    icon: u.WXD
  }, {
    name: "Pulsar",
    bannerKind: v.qC.HEIGHTMAP,
    icon: u.GHO
  }, {
    name: "Mesh",
    bannerKind: v.qC.MESH,
    icon: u.SVt
  }, {
    name: "Spatter",
    bannerKind: v.qC.SPATTER,
    icon: u.XKY
  }],
  y = e => {
    let {
      name: t,
      primaryColor: n,
      secondaryColor: i,
      isCustom: s
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [s ? (0, r.jsx)(u.V3v, {
        size: "md"
      }) : (0, r.jsx)("div", {
        className: N.brandItemCircle,
        style: {
          background: "linear-gradient(-45deg, ".concat(i, " 50%, ").concat(n, " 50% )")
        }
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "interactive-normal",
        className: N.noWrap,
        children: t
      })]
    })
  },
  w = e => {
    var t;
    let {
      handleUpdate: n,
      progress: s,
      guildId: l
    } = e, {
      banner: w,
      brandPrimaryColor: P,
      brandSecondaryColor: B,
      badgePrimaryColor: D,
      badgeSecondaryColor: T
    } = s, S = (0, d.e7)([f.Z], () => f.Z.getGuild(l)), L = null !== (t = (0, d.e7)([g.Z], () => g.Z.getMemberCount(l))) && void 0 !== t ? t : 0, R = i.useMemo(() => ({
      primary: null != P ? P : v.OH,
      secondary: null != B ? B : v.K_
    }), [P, B]), Q = i.useMemo(() => {
      if (P === D && B === T) return 1;
      for (let e = 0; e < v.ym.length; e++)
        if (v.ym[e].primary === s.brandPrimaryColor && v.ym[e].secondary === s.brandSecondaryColor) return 2 + e;
      return 0
    }, [P, B, D, T, s.brandPrimaryColor, s.brandSecondaryColor]), [Z, W] = i.useState(!1), k = 0 === Q, M = 1 === Q, _ = i.useMemo(() => {
      if (k) return R;
      if (M) return {
        primary: null != D ? D : b.Nh,
        secondary: null != T ? T : b.vY
      };
      {
        let e = v.ym[Q - 2];
        return {
          primary: e.primary,
          secondary: e.secondary
        }
      }
    }, [R, M, k, D, T, Q]), G = i.useCallback(() => {
      let e = O[Math.floor(Math.random() * O.length)].bannerKind;
      n({
        banner: e,
        brandPrimaryColor: a().random().hex(),
        brandSecondaryColor: a().random().hex()
      })
    }, [n]);
    i.useEffect(() => {
      n({
        banner: w,
        brandPrimaryColor: _.primary,
        brandSecondaryColor: _.secondary
      })
    }, [n, w, _.primary, _.secondary]);
    let F = i.useMemo(() => {
      var e, t, n;
      return I(E({}, s), {
        id: l,
        name: null !== (e = null == S ? void 0 : S.name) && void 0 !== e ? e : "",
        icon: null == S ? void 0 : S.icon,
        memberCount: L,
        games: Array.from(s.gameApplicationIds),
        traits: Array.from(s.interests),
        banner: w,
        badge: {
          badgeKind: s.badgeKind,
          primaryColor: null != D ? D : v.OH,
          secondaryColor: null != T ? T : v.K_
        },
        branding: {
          primaryColor: null !== (t = _.primary) && void 0 !== t ? t : v.OH,
          secondaryColor: null !== (n = _.secondary) && void 0 !== n ? n : v.K_
        },
        gameActivity: Array.from(s.gameApplicationIds).reduce((e, t) => (e[t] = {
          level: c.m.HIGH,
          score: 0
        }, e), {})
      })
    }, [s, l, S, L, w, D, T, _]);
    return (0, r.jsxs)("div", {
      className: j.slideContent,
      children: [(0, r.jsx)(u.X6q, {
        variant: "heading-xxl/medium",
        className: j.title,
        children: x.NW.string(x.t.kPwMOz)
      }), (0, r.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: j.subtitle,
        children: x.NW.string(x.t["E+KhDA"])
      }), (0, r.jsxs)("div", {
        className: N.content,
        children: [(0, r.jsx)("div", {
          className: N.leftColumn,
          children: (0, r.jsxs)("div", {
            className: N.colorsContainer,
            children: [(0, r.jsx)(C.Z, {
              onClick: G
            }), (0, r.jsxs)("div", {
              className: N.colorPickerContainer,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: x.NW.string(x.t.Ul1tIS)
              }), (0, r.jsxs)("div", {
                className: N.colorPickerGrid,
                children: [(0, r.jsx)(h.Z, {
                  showSecondaryColor: !0,
                  palette: R,
                  onPrimaryColorChange: e => {
                    n({
                      brandPrimaryColor: (0, A.Rf)(e)
                    })
                  },
                  onSecondaryColorChange: e => {
                    n({
                      brandSecondaryColor: (0, A.Rf)(e)
                    })
                  },
                  shouldShow: Z,
                  onRequestClose: () => W(!1),
                  children: e => (0, r.jsx)(u.P3F, I(E({}, e), {
                    onClick: () => {
                      W(e => !e)
                    },
                    className: o()(N.brandItemContainer, {
                      [N.brandItemContainerSelected]: 0 === Q
                    }),
                    children: (0, r.jsx)(y, {
                      name: x.NW.string(x.t.AemVoa),
                      isCustom: !0
                    })
                  }))
                }), (0, r.jsx)(u.P3F, {
                  onClick: () => {
                    n({
                      brandPrimaryColor: null != D ? D : v.OH,
                      brandSecondaryColor: null != T ? T : v.K_
                    })
                  },
                  className: o()(N.brandItemContainer, {
                    [N.brandItemContainerSelected]: 1 === Q
                  }),
                  children: (0, r.jsx)(y, {
                    name: x.NW.string(x.t["1Pvr/v"]),
                    primaryColor: D,
                    secondaryColor: T
                  })
                }), v.ym.map((e, t) => (0, r.jsx)(u.P3F, {
                  "aria-label": e.name,
                  onClick: () => {
                    n({
                      brandPrimaryColor: v.ym[t].primary,
                      brandSecondaryColor: v.ym[t].secondary
                    })
                  },
                  className: o()(N.brandItemContainer, {
                    [N.brandItemContainerSelected]: Q === t + 2
                  }),
                  children: (0, r.jsx)(y, {
                    name: e.name,
                    primaryColor: e.primary,
                    secondaryColor: e.secondary
                  })
                }, t))]
              })]
            }), (0, r.jsxs)("div", {
              className: N.bannerPickerContainer,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-xs/semibold",
                color: "text-muted",
                children: x.NW.string(x.t.nH6S2d)
              }), (0, r.jsx)("div", {
                className: N.bannerPickerGrid,
                children: O.map((e, t) => (0, r.jsxs)(u.P3F, {
                  "aria-label": e.name,
                  onClick: () => {
                    n({
                      banner: e.bannerKind
                    })
                  },
                  className: o()(N.bannerItemContainer, {
                    [N.bannerItemContainerSelected]: e.bannerKind === w
                  }),
                  children: [(0, r.jsx)(e.icon, {
                    size: "md"
                  }), (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "interactive-normal",
                    className: N.noWrap,
                    children: e.name
                  })]
                }, t))
              })]
            })]
          })
        }), (0, r.jsx)("div", {
          className: N.clanCardWrapper,
          children: (0, r.jsx)(m.x, {
            bannerComponent: (0, r.jsx)(p.Z, {
              banner: w,
              primaryTintColor: _.primary,
              secondaryTintColor: _.secondary,
              className: N.clanBannerPreview
            }),
            clan: F
          })
        })]
      })]
    })
  }