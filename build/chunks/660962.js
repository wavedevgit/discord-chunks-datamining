/** Chunk was on 94312 **/
"use strict";
n.d(t, {
  ZP: () => $
}), n(388685);
var r = n(255367),
  i = n(73800),
  l = n(120356),
  s = n.n(l),
  a = n(392711),
  o = n.n(a),
  c = n(866442),
  d = n(442837),
  u = n(704215),
  m = n(780384),
  g = n(481060),
  p = n(37234),
  f = n(410030),
  h = n(607070),
  x = n(100527),
  b = n(605436),
  j = n(663993),
  v = n(243778),
  _ = n(518738),
  O = n(753206),
  y = n(402235),
  C = n(441536),
  N = n(494620),
  I = n(496675),
  E = n(764260),
  S = n(946724),
  T = n(206950),
  P = n(95242),
  w = n(541575),
  R = n(420966),
  Z = n(337344),
  D = n(275296),
  A = n(203377),
  k = n(494831),
  L = n(981631),
  M = n(141006),
  G = n(388032),
  U = n(93841),
  B = n(275302),
  F = n(877248),
  H = n(179517),
  z = n(79829);
let W = (0, j.Un)({
    createPromise: () => n.e("4848").then(n.bind(n, 797967)),
    webpackId: 797967
  }),
  V = o().debounce((e, t) => (0, E.Uv)(e, t), 200);

function Y(e) {
  let {
    role: t,
    disabled: n
  } = e, [l, s] = i.useState(t.name);
  return i.useEffect(() => {
    s(t.name)
  }, [t.name]), (0, r.jsx)(g.xJW, {
    title: G.intl.string(G.t.dLbkBg),
    required: !0,
    children: (0, r.jsx)(g.oil, {
      type: "text",
      value: l,
      maxLength: L.VKK,
      onChange: function(e) {
        s(e), V(t.id, e)
      },
      disabled: n
    })
  })
}

function K(e) {
  let {
    role: t,
    guildId: n,
    selectedStyle: i,
    disabled: l,
    shouldShowUpsell: a
  } = e, o = e => l || a && [S.g.HOLOGRAPHIC, S.g.GRADIENT].includes(e), d = (0, T.F)(G.intl.string(G.t.Mi9KbW)), h = (0, f.ZP)(), b = (0, _.oC)(n, t), j = {
    dark: {
      src: H,
      name: t.name
    },
    light: {
      src: z,
      name: t.name
    }
  };
  return (0, r.jsxs)(g.xJW, {
    children: [(0, r.jsxs)(g.vwX, {
      className: B.roleStyleFormTitle,
      children: [(0, r.jsx)("div", {
        children: G.intl.string(G.t["9wVJRE"])
      }), (0, r.jsx)(v.ZP, {
        contentTypes: [u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE],
        children: e => {
          let {
            visibleContent: t
          } = e;
          return t === u.z.GUILD_SETTINGS_ROLE_STYLES_NEW_BADGE ? (0, r.jsx)(g.IGR, {
            text: G.intl.string(G.t.y2b7CA),
            className: B.newBadge
          }) : null
        }
      })]
    }), (0, r.jsx)("div", {
      className: B.roleStyleContainer,
      children: k.pM.map(e => {
        let {
          id: l,
          colors: a,
          labelString: u
        } = e;
        return (0, r.jsxs)("button", {
          className: s()(B.roleStylePreviewContainer, {
            [B.selected]: i === l,
            [B.disabled]: o(l)
          }),
          onClick: () => {
            (0, E.Jf)(t.id, l)
          },
          children: [(0, r.jsx)(g.Rny, {
            children: (0, r.jsx)("div", {
              className: B.roleStyleMessageContainer,
              children: (0, r.jsx)(O.Z, {
                author: {
                  nick: d.author.username,
                  guildId: n,
                  authorId: d.author.id,
                  colorRoleId: t.id,
                  colorStrings: {
                    primaryColor: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0,
                    secondaryColor: null != a.secondary_color ? (0, c.Rf)(a.secondary_color) : void 0,
                    tertiaryColor: null != a.tertiary_color ? (0, c.Rf)(a.tertiary_color) : void 0
                  },
                  colorString: null != a.primary_color ? (0, c.Rf)(a.primary_color) : void 0
                },
                message: d,
                preview: !0,
                roleIcon: null != b ? b : (0, m.ap)(h) ? j.light : j.dark,
                isGroupStart: !0,
                disableInteraction: !0,
                previewGuildId: n
              })
            })
          }), (0, r.jsx)("div", {
            className: B.roleStyleLabel,
            children: G.intl.string(u)
          })]
        }, l)
      })
    }), a && (0, r.jsxs)("div", {
      className: B.roleStyleUpsell,
      children: [(0, r.jsxs)("div", {
        className: B.roleStyleUpsellMesssages,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-sm/semibold",
          color: "button-outline-primary-text",
          children: G.intl.format(U.default.VpEDJS, {
            magical: (0, r.jsx)(X, {})
          })
        }), (0, r.jsx)(g.Text, {
          variant: "text-xs/medium",
          color: "button-outline-primary-text",
          children: G.intl.string(U.default.FJZeZG)
        })]
      }), (0, r.jsx)(g.zxk, {
        onClick: function() {
          (0, C.Z)(n, x.Z.GUILD_POWERUPS_GUILD_SETTINGS_ROLE_EDIT), (0, p.xf)()
        },
        variant: "expressive",
        icon: g.$Eu,
        text: G.intl.string(G.t["+7XY39"])
      })]
    })]
  })
}

function X() {
  let e = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
    {
      gradientStyle: t,
      gradientClassname: n
    } = (0, g.JUn)({
      primaryColor: (0, c.Rf)(M.SK.primary_color),
      secondaryColor: (0, c.Rf)(M.SK.secondary_color),
      tertiaryColor: (0, c.Rf)(M.SK.tertiary_color),
      useReducedMotion: e,
      roleStyle: "username",
      includeConvenienceGlow: !0,
      animateGradient: !0
    });
  return (0, r.jsx)("span", {
    style: function(e) {
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
    }({}, t),
    className: n,
    "data-text": G.intl.string(U.default["+/IHLi"]),
    children: G.intl.string(U.default["+/IHLi"])
  })
}

function q(e) {
  var t, n;
  let {
    role: i,
    disabled: l,
    currentStyle: s,
    hasEnhancedRoleColors: a
  } = e;
  return (0, r.jsxs)(g.xJW, {
    className: B.colorPicker,
    title: G.intl.string(G.t["1F6FzM"]),
    required: !0,
    children: [(0, r.jsx)(g.R94, {
      className: B.colorDescription,
      children: G.intl.string(G.t["9UCxlZ"])
    }), (0, r.jsx)(W, {
      defaultColor: L.p6O,
      colors: s === S.g.GRADIENT && a ? M.tl : L.pmI,
      value: i.color,
      disabled: l,
      onChange: e => {
        var t;
        return t = e, void(i.color !== t && (t !== L.p6O || 0 !== i.color) && (t === L.p6O && (t = 0), (0, E.OW)(i.id, t)))
      },
      secondaryValue: s === S.g.GRADIENT && a && (null == (t = i.colors) ? void 0 : t.secondary_color) != null ? null == (n = i.colors) ? void 0 : n.secondary_color : void 0,
      onChangeGradientColors: e => {
        let t = {
          primary_color: e[0],
          secondary_color: e[1],
          tertiary_color: void 0
        };
        (0, E.TW)(i.id, t, S.g.GRADIENT)
      },
      isGradient: s === S.g.GRADIENT,
      customPickerPosition: "right"
    })]
  })
}

function J(e) {
  var t, n, i, l;
  let {
    role: a,
    guildId: o,
    selectedStyle: c,
    disableInteraction: d
  } = e, u = (0, T.F)(G.intl.string(G.t.Mi9KbW)), p = {
    nick: u.author.username,
    guildId: o,
    authorId: u.author.id,
    colorRoleId: a.id,
    colorStrings: {
      primaryColor: null == (t = a.colorStrings) ? void 0 : t.primaryColor,
      secondaryColor: null == (n = a.colorStrings) ? void 0 : n.secondaryColor,
      tertiaryColor: null == (i = a.colorStrings) ? void 0 : i.tertiaryColor
    },
    colorString: null != (l = a.colorString) ? l : void 0
  }, f = {
    src: H,
    name: a.name
  }, h = {
    src: z,
    name: a.name
  }, x = (0, _.oC)(o, a), b = [L.BRd.DARK, L.BRd.DARKER, L.BRd.MIDNIGHT, L.BRd.LIGHT];
  return (0, r.jsx)(g.Rny, {
    children: (0, r.jsx)("div", {
      className: s()(B.previewContainer, {
        [B.disableInteraction]: d
      }),
      "aria-hidden": !0,
      children: b.map(e => (0, r.jsx)(g.f6W, {
        theme: e,
        disableAdaptiveTheme: !0,
        children: t => (0, r.jsxs)("div", {
          className: s()(t, B.messageWrapper),
          children: [(0, r.jsx)("div", {
            className: B.messageContainer,
            children: (0, r.jsx)(O.Z, {
              author: p,
              message: u,
              roleIcon: null != x ? x : (0, m.ap)(e) ? h : f,
              previewGuildId: o,
              isGroupStart: !0
            })
          }), e === L.BRd.LIGHT && c !== S.g.SOLID && (0, r.jsx)(g.Text, {
            variant: "text-xs/medium",
            color: "text-secondary",
            className: B.lightThemeNotice,
            children: G.intl.string(G.t.nxwm3N)
          })]
        })
      }, e))
    })
  })
}

function Q(e) {
  let {
    role: t,
    disabled: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.j7V, {
      disabled: n,
      value: t.hoist,
      onChange: e => (0, E.we)(t.id, e, t.mentionable),
      hideBorder: !0,
      children: G.intl.string(G.t.vceJPj)
    }), (0, r.jsx)(g.$i$, {
      className: B.divider
    }), (0, r.jsx)(g.j7V, {
      disabled: n,
      value: t.mentionable,
      onChange: e => (0, E.we)(t.id, t.hoist, e),
      note: G.intl.string(G.t.kRg5W1),
      hideBorder: !0,
      children: G.intl.format(G.t.DTXoJS, {})
    })]
  })
}

function $(e) {
  let {
    guild: t,
    role: n,
    locked: i,
    setSelectedSection: l
  } = e, a = (0, y.yH)(t.id, n), o = (0, d.e7)([S.Z], () => S.Z.getRoleStyleData(n.id)), c = !a, u = null != o && a ? o.currentStyle : S.g.SOLID, m = (0, b.pM)(null == t ? void 0 : t.id, n.id), p = i || m, f = (0, d.e7)([I.Z], () => I.Z.canImpersonateRole(t, n)), {
    headerHeight: h,
    headerRef: x
  } = (0, P.Z)(0), {
    scrolledToTop: j,
    handleScroll: v
  } = (0, R.V)();
  return (0, r.jsx)(g.yWw, {
    className: B.scroller,
    style: {
      scrollPaddingTop: h
    },
    onScroll: v,
    children: (0, r.jsxs)("div", {
      className: F.contentWidth,
      children: [(0, r.jsx)("div", {
        className: s()(F.header, F.stickyHeader, {
          [F.stickyHeaderElevated]: !j
        }),
        ref: x,
        children: (0, r.jsx)(R.Z, {
          guild: t,
          role: n,
          selectedSection: A.ZI.DISPLAY,
          setSelectedSection: l
        })
      }), (0, r.jsx)(Y, {
        role: n,
        disabled: p
      }), (0, r.jsx)("div", {
        className: B.noticeContainer,
        children: (0, r.jsx)(D.Z, {
          role: n
        })
      }), (0, r.jsx)(g.$i$, {
        className: B.divider
      }), (a || c) && null != u && (0, r.jsx)(K, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disabled: p,
        shouldShowUpsell: c
      }), u !== S.g.HOLOGRAPHIC && null != u && (0, r.jsx)(q, {
        role: n,
        disabled: p,
        currentStyle: u,
        hasEnhancedRoleColors: a
      }), u === S.g.HOLOGRAPHIC && (0, r.jsx)(N.Z, {
        className: B.holographicInfoBox,
        children: (0, r.jsx)(g.Text, {
          variant: "text-xs/medium",
          children: G.intl.string(U.default.tBhCys)
        })
      }), (0, r.jsx)(w.Z, {
        guild: t,
        disabled: p,
        role: n
      }), (0, r.jsx)(J, {
        role: n,
        guildId: t.id,
        selectedStyle: u,
        disableInteraction: !a
      }), (0, r.jsx)(g.$i$, {
        className: B.divider
      }), (0, r.jsx)(Q, {
        role: n,
        disabled: p
      }), f ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.$i$, {
          className: B.divider
        }), (0, r.jsx)(Z.L, {
          guildId: t.id,
          role: n
        })]
      }) : null]
    })
  })
}