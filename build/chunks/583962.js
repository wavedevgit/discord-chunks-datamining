/** Chunk was on 30829 **/
n.d(t, {
  PD: () => D,
  ZP: () => L,
  aR: () => A
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
  v = n(496675),
  y = n(259580),
  O = n(267642),
  j = n(624138),
  _ = n(667815),
  C = n(531572),
  x = n(26323),
  P = n(30513),
  N = n(981631),
  S = n(388032),
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
    } = e, [l, o] = i.useState(t.premiumProgressBarEnabled), [a, s] = i.useState(!1), u = (0, c.e7)([v.Z], () => v.Z.can(N.Plq.MANAGE_GUILD, t)), h = async () => {
      u && (s(!0), await b.Z.saveGuild(t.id, {
        premiumProgressBarEnabled: !l
      }), o(!l), s(!1))
    };
    return (0, r.jsx)(d.v2r, {
      navId: "progress-bar-context",
      onClose: p.Zy,
      "aria-label": S.NW.string(S.t["m85s/v"]),
      onSelect: n,
      children: (0, r.jsx)(d.S89, {
        id: "progress-bar-enabled",
        label: S.NW.string(S.t["0CJWPz"]),
        checked: l,
        disabled: a,
        action: h
      })
    })
  },
  D = 57,
  A = 57 + E,
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
    } = t, E = (0, O.rF)(b, j), D = (0, O.FZ)(E, t.id), A = null == D, L = null != D ? D : E, k = (0, c.e7)([C.Z], () => {
      var e;
      return null !== (e = C.Z.getCountForGuild(j)) && void 0 !== e ? e : 0
    }), M = (0, c.e7)([v.Z], () => v.Z.can(N.Plq.MANAGE_GUILD, t));
    i.useEffect(() => {
      k !== b && (0, _.v)(j, b)
    }, [j, k, b]);
    let G = "".concat(Math.min(100, b / (0, O.vn)(t.id)[L] * 100), "%"),
      {
        current: B
      } = i.useRef(G),
      U = {
        from: {
          width: k === b ? B : "0%"
        },
        to: {
          width: G
        },
        config: R
      },
      [W, V] = (0, d.q_F)(() => U),
      F = () => {
        (0, f.yw)(N.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
          location: {
            section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR
          },
          guild_id: j,
          location_stack: u
        }), (0, x.Z)({
          analyticsLocations: u,
          analyticsSourceLocation: {
            page: N.ZY5.GUILD_CHANNEL,
            section: N.jXE.PREMIUM_GUILD_PROGRESS_BAR,
            object: N.qAy.TOOLTIP
          },
          guild: t,
          perks: (0, P.VF)(),
          perkIntro: S.NW.string(S.t.ZhvSn5)
        })
      },
      H = S.NW.formatToPlainString(S.t["2oNfMT"], {
        levelName: (0, O.e9)(L)
      }),
      z = S.NW.format(S.t.dhKnYm, {
        numBoosts: b,
        numTotal: (0, O.vn)(t.id)[L]
      });
    A && (H = (0, O.e9)(L), z = S.NW.format(S.t.B2byER, {
      numBoosts: b
    })), l && (H = H.toLocaleLowerCase());
    let q = (0, s.JA)("boosts-".concat(t.id));
    return (0, r.jsx)("li", {
      children: (0, r.jsx)(d.ua7, {
        text: A ? S.NW.string(S.t["Y+V9go"]) : S.NW.formatToPlainString(S.t.UyDKl5, {
          levelName: (0, O.nW)(L)
        }),
        color: d.ua7.Colors.BLACK,
        position: "top",
        delay: 200,
        hideOnClick: !0,
        children: e => (0, r.jsxs)(d.P3F, w(Z({}, q, e), {
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
            null === (t = e.onMouseEnter) || void 0 === t || t.call(e), V(U)
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
              }), (0, r.jsx)(y.Z, {
                className: I.count,
                height: 16,
                width: 16,
                direction: y.Z.Directions.RIGHT
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: o()(I.progressBarContainer, {
              [I.progressBarContainerComplete]: A
            }),
            children: [(0, r.jsx)(a.animated.div, {
              className: I.progressBar,
              style: W
            }), A ? (0, r.jsx)("span", {
              "aria-label": S.NW.string(S.t["7iL1q6"]),
              role: "img",
              className: I.tadaIcon,
              children: "\uD83C\uDF89"
            }) : null]
          })]
        }))
      })
    })
  }