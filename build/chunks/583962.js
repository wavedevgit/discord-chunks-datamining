/** Chunk was on 86029 **/
n.d(t, {
  PD: () => A,
  ZP: () => L,
  aR: () => D
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(91192),
  c = n(442837),
  u = n(477690),
  d = n(481060),
  p = n(239091),
  h = n(100527),
  f = n(367907),
  g = n(906732),
  m = n(540059),
  b = n(434404),
  y = n(496675),
  v = n(259580),
  O = n(267642),
  j = n(624138),
  _ = n(667815),
  C = n(531572),
  x = n(26323),
  P = n(30513),
  S = n(981631),
  N = n(388032),
  I = n(331972);

function Z(e) {
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

function w(e, t) {
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
let E = (0, j.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
  T = e => {
    let {
      guild: t,
      onSelect: n
    } = e, [l, o] = i.useState(t.premiumProgressBarEnabled), [a, s] = i.useState(!1), u = (0, c.e7)([y.Z], () => y.Z.can(S.Plq.MANAGE_GUILD, t)), h = async () => {
      u && (s(!0), await b.Z.saveGuild(t.id, {
        premiumProgressBarEnabled: !l
      }), o(!l), s(!1))
    };
    return (0, r.jsx)(d.v2r, {
      navId: "progress-bar-context",
      onClose: p.Zy,
      "aria-label": N.NW.string(N.t["m85s/v"]),
      onSelect: n,
      children: (0, r.jsx)(d.S89, {
        id: "progress-bar-enabled",
        label: N.NW.string(N.t["0CJWPz"]),
        checked: l,
        disabled: a,
        action: h
      })
    })
  },
  A = 57,
  D = 57 + E,
  R = {
    tension: 180,
    friction: 80
  },
  L = e => {
    let {
      guild: t,
      withMargin: n
    } = e, l = (0, m.Q3)("GuildBoostingSidebarDisplay"), {
      analyticsLocations: u
    } = (0, g.ZP)(h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
      premiumSubscriberCount: b,
      id: j
    } = t, E = (0, O.rF)(b, j), A = (0, O.FZ)(E, t.id), D = null == A, L = null != A ? A : E, k = (0, c.e7)([C.Z], () => {
      var e;
      return null !== (e = C.Z.getCountForGuild(j)) && void 0 !== e ? e : 0
    }), M = (0, c.e7)([y.Z], () => y.Z.can(S.Plq.MANAGE_GUILD, t));
    i.useEffect(() => {
      k !== b && (0, _.v)(j, b)
    }, [j, k, b]);
    let G = "".concat(Math.min(100, b / (0, O.vn)(t.id)[L] * 100), "%"),
      {
        current: U
      } = i.useRef(G),
      B = {
        from: {
          width: k === b ? U : "0%"
        },
        to: {
          width: G
        },
        config: R
      },
      [W, V] = (0, d.q_F)(() => B),
      F = () => {
        (0, f.yw)(S.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
          location: {
            section: S.jXE.PREMIUM_GUILD_PROGRESS_BAR
          },
          guild_id: j,
          location_stack: u
        }), (0, x.Z)({
          analyticsLocations: u,
          analyticsSourceLocation: {
            page: S.ZY5.GUILD_CHANNEL,
            section: S.jXE.PREMIUM_GUILD_PROGRESS_BAR,
            object: S.qAy.TOOLTIP
          },
          guild: t,
          perks: (0, P.VF)(),
          perkIntro: N.NW.string(N.t.ZhvSn5)
        })
      },
      H = N.NW.formatToPlainString(N.t["2oNfMT"], {
        levelName: (0, O.e9)(L)
      }),
      z = N.NW.format(N.t.dhKnYm, {
        numBoosts: b,
        numTotal: (0, O.vn)(t.id)[L]
      });
    D && (H = (0, O.e9)(L), z = N.NW.format(N.t.B2byER, {
      numBoosts: b
    })), l && (H = H.toLocaleLowerCase());
    let Y = (0, s.JA)("boosts-".concat(t.id));
    return (0, r.jsx)("li", {
      children: (0, r.jsx)(d.ua7, {
        text: D ? N.NW.string(N.t["Y+V9go"]) : N.NW.formatToPlainString(N.t.UyDKl5, {
          levelName: (0, O.nW)(L)
        }),
        color: d.ua7.Colors.BLACK,
        position: "top",
        delay: 200,
        hideOnClick: !0,
        children: e => (0, r.jsxs)(d.P3F, w(Z({}, Y, e), {
          "aria-label": void 0,
          role: "button",
          focusProps: {
            offset: {
              left: 10,
              right: 4
            }
          },
          onClick: F,
          onMouseEnter: () => {
            var t;
            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), V(B)
          },
          className: o()(I.container, {
            [I.containerWithMargin]: n
          }),
          onContextMenu: e => {
            M && (0, p.vq)(e, e => (0, r.jsx)(T, w(Z({}, e), {
              guild: t
            })))
          },
          children: [(0, r.jsx)(d.nn4, {
            children: e["aria-label"]
          }), (0, r.jsxs)("div", {
            className: I.textArea,
            children: [(0, r.jsx)("div", {
              className: I.goalTextContainer,
              children: (0, r.jsx)(d.Text, {
                className: I.goalText,
                color: l ? "none" : "interactive-active",
                variant: l ? "text-sm/medium" : "text-xs/bold",
                lineClamp: 1,
                children: H
              })
            }), (0, r.jsxs)("div", {
              className: I.progressFraction,
              children: [(0, r.jsx)(d.Text, {
                color: l ? "none" : "interactive-normal",
                variant: l ? "text-sm/medium" : "text-xs/normal",
                className: I.progressText,
                lineClamp: 1,
                children: z
              }), (0, r.jsx)(v.Z, {
                className: I.count,
                height: 16,
                width: 16,
                direction: v.Z.Directions.RIGHT
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: o()(I.progressBarContainer, {
              [I.progressBarContainerComplete]: D
            }),
            children: [(0, r.jsx)(a.animated.div, {
              className: I.progressBar,
              style: W
            }), D ? (0, r.jsx)("span", {
              "aria-label": N.NW.string(N.t["7iL1q6"]),
              role: "img",
              className: I.tadaIcon,
              children: "\uD83C\uDF89"
            }) : null]
          })]
        }))
      })
    })
  }