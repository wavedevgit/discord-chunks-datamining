/** Chunk was on 86029 **/
n.d(t, {
  ZP: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(873546),
  c = n(481060),
  u = n(540059),
  d = n(666188),
  p = n(695346),
  h = n(768581),
  f = n(358555),
  g = n(981631),
  m = n(647086),
  b = n(388032),
  y = n(252189);

function v(e) {
  var t;
  let {
    guild: n,
    controller: i,
    guildBanner: l,
    animate: c
  } = e, {
    value: d
  } = i.springs, f = p.QK.getSetting(), g = (0, u.Q3)("AnimatedBanner") ? 150 : 90;
  return (0, r.jsx)(a.animated.div, {
    className: y.animatedContainer,
    style: {
      opacity: d,
      transform: d.to(e => "translateY(-".concat((1 - e) * g, "px)"))
    },
    children: (0, r.jsx)(a.animated.div, {
      className: o()(y.bannerImage, {
        [y.bannerImgFullWidth]: s.tq
      }),
      style: {
        transform: d.to(e => f ? "translateY(".concat((1 - e) * g * (2 / 3), "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * g, "px)"))
      },
      children: (0, r.jsx)("img", {
        className: o()(y.bannerImg, {
          [y.bannerImgFullWidth]: s.tq
        }),
        src: null !== (t = h.ZP.getGuildBannerURL({
          id: n.id,
          banner: l
        }, c)) && void 0 !== t ? t : "",
        alt: "",
        "aria-hidden": !0
      })
    })
  })
}

function O(e) {
  let {
    guild: t,
    controller: n,
    hasBanner: i,
    hasSubheader: l
  } = e, {
    value: s
  } = n.springs, u = t.hasFeature(g.oNc.DISCOVERABLE), d = (0, r.jsx)("div", {
    className: y.communityInfo,
    children: u && (0, r.jsx)(c.ua7, {
      text: b.NW.string(b.t.O8lDIy),
      position: "right",
      children: e => {
        var t, n;
        return (0, r.jsxs)("div", (t = function(e) {
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
        }({
          className: y.communityInfoPill
        }, e), n = n = {
          children: [(0, r.jsx)(c.enf, {
            size: "custom",
            color: "currentColor",
            width: 12,
            height: 12,
            className: y.communityIcon
          }), (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "none",
            children: b.NW.string(b.t["B/vjCg"])
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  });
  return l ? (0, r.jsx)("div", {
    className: o()(y.communityInfoContainer, y.hasSubheader),
    children: d
  }) : (0, r.jsx)(a.animated.div, {
    className: y.communityInfoContainer,
    style: i ? {
      opacity: s
    } : {
      height: s.to(e => "".concat(20 * e, "px"))
    },
    children: d
  })
}

function j() {
  return (0, r.jsx)(c.r7p, {
    size: "custom",
    color: "currentColor",
    className: y.favoritesIcon,
    height: 20,
    width: 20
  })
}
let _ = i.memo(function(e) {
  let {
    bannerVisible: t,
    controller: n,
    className: l,
    onClick: a,
    onContextMenu: _,
    onMouseDown: C,
    disableBannerAnimation: x,
    "aria-expanded": P,
    "aria-controls": N,
    guild: S,
    guildBanner: I,
    animationOverlayHeight: Z,
    children: w,
    headerClassName: E,
    communityInfoVisible: T,
    hasSubheader: A
  } = e, D = S.hasFeature(g.oNc.ANIMATED_BANNER), R = (0, d.Z)(S), L = !R && S.hasCommunityInfoSubheader(), M = !R && T, k = (0, h.xR)(I) && D && !x, [G, U] = i.useState(!1), B = i.useRef(), W = i.useRef(null), V = i.useRef(), F = p.QK.getSetting();
  i.useEffect(() => {
    if (k && t && !B.current && F) return U(!0), V.current = setTimeout(() => {
      U(!1)
    }, 5e3), () => {
      clearTimeout(V.current)
    }
  }, [k, t, F]), i.useEffect(() => {
    B.current = t
  }, [t]);
  let H = () => {
      let {
        renderBanner: t,
        guildBanner: n
      } = e;
      return null != n && !t
    },
    z = (0, u.Q3)("GuildHeader");
  return (0, r.jsx)(c.f6W, {
    theme: t ? g.BRd.DARK : void 0,
    children: e => {
      var i;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          ref: W,
          className: o()(l, {
            [y.container]: !0,
            [y.clickable]: null != a,
            [y.selected]: null != a && P,
            [y.hasBanner]: H(),
            [y.bannerVisible]: t,
            [e]: !z && t,
            [y.communityInfoVisible]: M || A && L
          }),
          onMouseDown: C,
          onContextMenu: _,
          onClick: a,
          children: [(0, r.jsxs)("header", {
            className: o()(y.header, E, {
              [y.themedHeaderMobile]: s.tq
            }),
            children: [(0, r.jsxs)("div", {
              className: o()(y.headerContent, y.primaryInfo),
              children: [(0, r.jsx)(f.Z, {
                guild: S,
                isBannerVisible: t
              }), S.id === m._ && (0, r.jsx)(j, {}), (0, r.jsx)(c.X6q, {
                variant: "text-md/semibold",
                lineClamp: 1,
                className: y.name,
                children: S.toString()
              }), null != a && (0, r.jsx)(c.P3F, {
                className: y.headerButton,
                "aria-controls": N,
                "aria-expanded": P,
                focusProps: {
                  ringTarget: W,
                  offset: 4
                },
                onClick: a,
                onContextMenu: _,
                "aria-label": b.NW.formatToPlainString(b.t.xMXpl5, {
                  guildName: null !== (i = null == S ? void 0 : S.toString()) && void 0 !== i ? i : ""
                })
              }), (0, r.jsx)("div", {
                className: y.headerChildren,
                children: w
              })]
            }), L && (0, r.jsx)(O, {
              guild: S,
              controller: n,
              hasBanner: null != I,
              hasSubheader: null != A && A
            })]
          }), null != I ? (0, r.jsx)(v, {
            guild: S,
            controller: n,
            guildBanner: I,
            animate: G
          }) : null]
        }), k && H() ? (0, r.jsx)("div", {
          className: y.animatedBannerHoverLayer,
          onMouseEnter: () => {
            U(!0), clearTimeout(V.current)
          },
          onMouseLeave: () => U(!1),
          style: {
            height: Z
          }
        }) : null]
      })
    }
  })
})