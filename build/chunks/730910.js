/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => Z
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(642128),
  o = n(442837),
  c = n(692547),
  A = n(215569),
  d = n(780384),
  u = n(481060),
  g = n(410030),
  f = n(367907),
  m = n(768762),
  p = n(626135),
  h = n(585483),
  C = n(999382),
  b = n(743475),
  v = n(983135),
  x = n(8426),
  N = n(969632),
  j = n(570961),
  E = n(208665),
  I = n(359191),
  O = n(84658),
  y = n(142961),
  w = n(232764),
  P = n(729311),
  B = n(966301),
  D = n(976269),
  T = n(981631),
  S = n(388032),
  L = n(655044);

function R(e) {
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

function Q(e, t) {
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

function Z() {
  let e = (0, o.e7)([C.Z], () => C.Z.getGuild());
  return null == e ? null : (0, r.jsx)(W, {
    guild: e
  })
}

function W(e) {
  let {
    guild: t
  } = e, s = t.id, C = (0, o.e7)([I.Z], () => I.Z.getCurrentPage()), Z = (0, y.Z)(s), {
    hasChanges: W,
    hasConfiguredAnythingForCurrentStep: k,
    hasErrors: M
  } = (0, o.cj)([I.Z], () => ({
    hasChanges: I.Z.hasChanges(),
    hasConfiguredAnythingForCurrentStep: I.Z.hasConfiguredAnythingForCurrentStep(),
    hasErrors: I.Z.hasErrors()
  })), _ = (0, o.e7)([I.Z], () => {
    let e = (0, O.lg)(C);
    return null != e && !I.Z.isEducationUpsellDismissed(e)
  }), G = (0, g.ZP)(), F = i.useRef(null), [{
    spring: U
  }, H] = (0, u.q_F)(() => ({
    spring: 0
  }), "animate-always");
  i.useEffect(() => {
    function e() {
      H({
        spring: 1,
        config: l.config.gentle
      }), H({
        spring: 0,
        config: l.config.gentle,
        delay: 1e3
      })
    }
    return h.S.subscribe(T.CkL.EMPHASIZE_NOTICE, e), () => {
      h.S.unsubscribe(T.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [H]);
  let z = (0, u.dQu)(c.Z.colors.BACKGROUND_FLOATING).hex(),
    X = (0, u.dQu)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
    Y = (0, d.wj)(G) ? z : X,
    K = U.to({
      range: [0, 1],
      output: [(0, u.dQu)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, u.dQu)(c.Z.colors.TEXT_NORMAL).hex()]
    }),
    V = U.to({
      range: [0, 1],
      output: [Y, (0, u.dQu)(c.Z.colors.STATUS_DANGER).hex()]
    });
  if (Z) {
    if (C === O.PG.DEFAULT_CHANNELS) return (0, r.jsx)(P.j, {});
    if (C === O.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(B.Zm, {});
    if (C === O.PG.HOME_SETTINGS) return (0, r.jsx)(D.Z, {})
  }
  let J = C === O.xh[O.xh.length - 1],
    q = async () => {
      let e = E.Z.advancedMode;
      if (W) try {
        if (C === O.PG.DEFAULT_CHANNELS) await (0, b.DO)(t).then(() => e ? (0, j.rS)(t, {
          ignoreDefaultPrompt: !0
        }) : Promise.resolve());
        else if (C === O.PG.CUSTOMIZATION_QUESTIONS) await (0, j.rS)(t, {
          ignoreDefaultPrompt: !0
        });
        else if (C === O.PG.HOME_SETTINGS) {
          let e = N.Z.getSettings();
          await (0, x.oo)(t.id, e)
        }
      } catch (e) {
        return !1
      }
      return !0
    }, $ = async () => {
      p.default.track(T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, Q(R({}, (0, f.hH)(s)), {
        step: O.PG[C],
        back: !1,
        skip: !W
      })), (0, v.Nb)((0, O.lg)(C)), await q() && (0, v.IG)(s, C)
    }, ee = async () => {
      p.default.track(T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, Q(R({}, (0, f.hH)(s)), {
        step: O.PG[C],
        back: !0,
        skip: !1
      })), await q() && (0, v.Wy)(s, C)
    }, et = null;
  _ && (C === O.PG.SAFETY_CHECK ? et = (0, r.jsx)(w.j7, {}) : C === O.PG.DEFAULT_CHANNELS ? et = (0, r.jsx)(w.Io, {}) : C === O.PG.CUSTOMIZATION_QUESTIONS ? et = (0, r.jsx)(w.cZ, {}) : C === O.PG.HOME_SETTINGS && (et = (0, r.jsx)(w.g6, {})));
  let en = (0, r.jsx)(u.zxk, {
      className: a()(L.button, {
        [L.hidden]: _
      }),
      color: u.zxk.Colors.PRIMARY,
      look: u.zxk.Looks.OUTLINED,
      size: u.zxk.Sizes.SMALL,
      onClick: ee,
      disabled: _ || M,
      children: (0, r.jsxs)("span", {
        className: L.button,
        children: [(0, r.jsx)(m.Z, {
          className: L.arrow,
          direction: m.Z.Directions.LEFT
        }), S.NW.string(S.t["13/7kZ"])]
      })
    }),
    er = (0, r.jsx)(u.zxk, {
      className: L.button,
      color: k ? u.zxk.Colors.BRAND : u.zxk.Colors.PRIMARY,
      look: u.zxk.Looks.FILLED,
      size: u.zxk.Sizes.SMALL,
      onClick: $,
      disabled: _ || M,
      children: (0, r.jsxs)(l.animated.span, {
        className: L.button,
        style: {
          color: K
        },
        children: [k ? S.NW.string(S.t.PDTjLC) : S.NW.string(S.t["5WxrcX"]), (0, r.jsx)(m.Z, {
          className: L.arrow,
          direction: m.Z.Directions.RIGHT
        })]
      })
    });
  return (0, r.jsx)(A.W, {
    component: "div",
    children: (0, r.jsx)(u.oXn, {
      className: L.noticeRegion,
      children: (0, r.jsx)(l.animated.div, {
        className: L.container,
        style: {
          backgroundColor: V
        },
        children: (0, r.jsxs)("div", {
          className: L.flexContainer,
          ref: F,
          children: [_ ? (0, r.jsxs)("div", {
            className: L.educationUpsellRoot,
            children: [(0, r.jsx)("img", {
              className: L.wumpus,
              src: n(33631),
              alt: "wumpus"
            }), (0, r.jsxs)("div", {
              className: L.educationUpsell,
              children: [et, (0, r.jsx)("div", {
                className: L.educationUpsellArrow
              })]
            })]
          }) : null, (0, r.jsx)(u.JcV, {
            containerRef: F,
            children: (0, r.jsxs)("div", {
              className: L.actions,
              children: [en, (0, r.jsxs)("div", {
                className: L.next,
                children: [M ? (0, r.jsx)(u.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: S.NW.string(S.t.DhYsPD)
                }) : null, J ? null : er]
              })]
            })
          })]
        })
      })
    })
  })
}