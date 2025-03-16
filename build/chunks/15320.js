/** Chunk was on 37709 **/
n.d(t, {
  Z: () => P
});
var r = n(200651),
  l = n(192379),
  o = n(399606),
  i = n(481060),
  s = n(367907),
  a = n(863249),
  c = n(944163),
  d = n(14263),
  u = n(768762),
  m = n(626135),
  h = n(823379),
  p = n(806223),
  x = n(45966),
  f = n(637853),
  g = n(968644),
  j = n(104265),
  v = n(588632),
  N = n(290511),
  b = n(981631),
  _ = n(388032),
  C = n(607639);

function O(e) {
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

function E(e, t) {
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

function I(e, t) {
  return (0, r.jsx)("span", {
    className: C.helpTextItem,
    children: e
  }, t)
}

function k(e, t) {
  return !(e.hasFeature(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.hasFeature(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t && p.Z.getCurrentConfig({
    location: "ba216b_1"
  }, {
    autoTrackExposure: !0
  }).includeRules
}

function Z(e) {
  let {
    headerId: t,
    guild: n,
    step: l,
    lastPrompt: s,
    questionCount: a,
    currentPrompt: c,
    selectOption: m,
    gotoPrevPrompt: h,
    gotoNextPrompt: p,
    completeOnboarding: j
  } = e, N = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)), b = 0 === N.length && (null == c ? void 0 : c.required), E = null == c ? void 0 : c.options.filter(e => N.includes(e.id)), k = (0, f.L6)(E), Z = (0, f.dX)(E), y = 0 === N.length, {
    helpText: P,
    helpTextAdditional: w
  } = (0, g.Z)({
    guild: n,
    prompt: c,
    selectedRoleIds: k,
    selectedChannelIds: Z,
    itemHook: I
  }), D = (0, d.Z)(n.id, 1e3), T = c.options.map(e => O({
    value: e.id
  }, e)), R = c.options.filter(e => N.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: C.prompt,
    children: (0, r.jsxs)("div", {
      className: C.promptContent,
      children: [(0, r.jsxs)(i.zJl, {
        className: C.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: C.questionHeader,
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.NW.format(_.t.isV0NT, {
              currentQuestion: l + 1,
              questionCount: a
            })
          }), c.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.Text, {
              variant: "text-xs/normal",
              className: C.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: _.NW.string(_.t.Ur8Vrq)
            })]
          }) : null]
        }), (0, r.jsx)(i.X6q, {
          className: C.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: c.title
        }), (0, r.jsx)(v.Z, {
          options: T,
          value: R,
          onChange: e => {
            let t = e.find(e => !N.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) m(c.id, t.id, !0);
            else {
              let e = N.filter(e => !n.includes(e));
              c.options.filter(t => e.includes(t.id)).forEach(e => {
                m(c.id, e.id, !1)
              })
            }
          },
          memberCounts: D
        })]
      }), (0, r.jsxs)("div", {
        className: C.navButtons,
        children: [(0, r.jsx)("div", {
          className: C.leftButtons,
          children: l > 0 && (0, r.jsxs)(i.zxk, {
            className: C.button,
            innerClassName: C.buttonInner,
            onClick: () => h(N.length),
            size: i.zxk.Sizes.MEDIUM,
            look: i.zxk.Looks.OUTLINED,
            grow: !1,
            color: i.zxk.Colors.PRIMARY,
            children: [(0, r.jsx)(u.Z, {
              className: C.arrow,
              direction: u.Z.Directions.LEFT
            }), _.NW.string(_.t["13/7kZ"])]
          })
        }), (0, r.jsxs)("div", {
          className: C.rightButtons,
          children: [(0, r.jsxs)(i.Text, {
            className: C.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [P, " ", w]
          }), (0, r.jsx)(i.ua7, {
            text: b ? _.NW.string(_.t.dA1dSU) : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(i.zxk, {
                className: C.button,
                innerClassName: C.buttonInner,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: () => s ? j() : p(N.length),
                disabled: b,
                size: i.zxk.Sizes.MEDIUM,
                look: i.zxk.Looks.FILLED,
                grow: !1,
                color: y ? i.zxk.Colors.PRIMARY : i.zxk.Colors.BRAND,
                children: s ? (0, r.jsxs)(r.Fragment, {
                  children: [_.NW.string(_.t["8SuVoK"]), (0, r.jsx)("span", {
                    className: C.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, r.jsxs)(r.Fragment, {
                  children: [y ? _.NW.string(_.t["5WxrcX"]) : _.NW.string(_.t.PDTjLC), (0, r.jsx)(u.Z, {
                    className: C.arrow,
                    direction: u.Z.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function y(e) {
  let {
    headerId: t,
    guild: n,
    step: l,
    lastPrompt: s,
    questionCount: a,
    currentPrompt: c,
    selectOption: d,
    gotoPrevPrompt: m,
    gotoNextPrompt: h,
    completeOnboarding: p
  } = e, v = (0, o.Wu)([x.Z], () => x.Z.getOnboardingResponsesForPrompt(n.id, c.id)), N = 0 === v.length && (null == c ? void 0 : c.required), b = null == c ? void 0 : c.options.filter(e => v.includes(e.id)), O = (0, f.L6)(b), E = (0, f.dX)(b), k = 0 === v.length, {
    helpText: Z,
    helpTextAdditional: y
  } = (0, g.Z)({
    guild: n,
    prompt: c,
    selectedRoleIds: O,
    selectedChannelIds: E,
    itemHook: I
  });
  return (0, r.jsx)("div", {
    className: C.prompt,
    children: (0, r.jsxs)("div", {
      className: C.promptContent,
      children: [(0, r.jsxs)(i.zJl, {
        className: C.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: C.questionHeader,
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.NW.format(_.t.isV0NT, {
              currentQuestion: l + 1,
              questionCount: a
            })
          }), c.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(i.Text, {
              variant: "text-xs/normal",
              className: C.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: _.NW.string(_.t.Ur8Vrq)
            })]
          }) : null]
        }), (0, r.jsx)(i.X6q, {
          className: C.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: c.title
        }), (0, r.jsx)("div", {
          className: C.promptOptions,
          children: c.options.map(e => (0, r.jsx)(j.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => d(c.id, e.id, null != t && t),
            selected: v.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: C.navButtons,
        children: [(0, r.jsx)("div", {
          className: C.leftButtons,
          children: l > 0 && (0, r.jsxs)(i.zxk, {
            className: C.button,
            innerClassName: C.buttonInner,
            onClick: () => m(v.length),
            size: i.zxk.Sizes.MEDIUM,
            look: i.zxk.Looks.OUTLINED,
            grow: !1,
            color: i.zxk.Colors.PRIMARY,
            children: [(0, r.jsx)(u.Z, {
              className: C.arrow,
              direction: u.Z.Directions.LEFT
            }), _.NW.string(_.t["13/7kZ"])]
          })
        }), (0, r.jsxs)("div", {
          className: C.rightButtons,
          children: [(0, r.jsxs)(i.Text, {
            className: C.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [Z, " ", y]
          }), (0, r.jsx)(i.ua7, {
            text: N ? _.NW.string(_.t.dA1dSU) : null,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(i.zxk, {
                className: C.button,
                innerClassName: C.buttonInner,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: () => s ? p() : h(v.length),
                disabled: N,
                size: i.zxk.Sizes.MEDIUM,
                look: i.zxk.Looks.FILLED,
                grow: !1,
                color: k ? i.zxk.Colors.PRIMARY : i.zxk.Colors.BRAND,
                children: s ? (0, r.jsxs)(r.Fragment, {
                  children: [_.NW.string(_.t["8SuVoK"]), (0, r.jsx)("span", {
                    className: C.finishEmoji,
                    role: "img",
                    "aria-hidden": !0,
                    children: "\uD83C\uDF89"
                  })]
                }) : (0, r.jsxs)(r.Fragment, {
                  children: [k ? _.NW.string(_.t["5WxrcX"]) : _.NW.string(_.t.PDTjLC), (0, r.jsx)(u.Z, {
                    className: C.arrow,
                    direction: u.Z.Directions.RIGHT
                  })]
                })
              })
            }
          })]
        })]
      })]
    })
  })
}

function P(e) {
  let {
    guild: t,
    prompts: n,
    step: i,
    selectOption: d,
    completeOnboarding: u,
    setCurrentStep: p,
    headerId: x,
    disableTracking: f
  } = e, g = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
  l.useEffect(() => {
    t.hasFeature(b.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.hasFeature(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && a.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let j = n[i],
    v = i + 1 >= n.length && !k(t, g),
    _ = n[0].required;
  l.useEffect(() => {
    !f && m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(O({}, (0, s.hH)(t.id)), {
      step: 0,
      required: _
    }))
  }, [t.id, _, f]);
  let C = e => {
      !f && (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, E(O({}, (0, s.hH)(t.id)), {
        step: i,
        options_selected: e,
        skipped: 0 === e,
        back: !1,
        in_onboarding: !0,
        is_final_step: !1
      })), i < n.length - 1 && m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(O({}, (0, s.hH)(t.id)), {
        step: i,
        required: n[i + 1].required
      }))), i + 1 < n.length ? p(i + 1) : k(t, g) && p("rules")
    },
    I = e => {
      !f && (m.default.track(b.rMx.GUILD_ONBOARDING_STEP_COMPLETED, E(O({}, (0, s.hH)(t.id)), {
        step: i,
        skipped: !1,
        back: !0,
        options_selected: e,
        in_onboarding: !0,
        is_final_step: !1
      })), i > 0 && m.default.track(b.rMx.GUILD_ONBOARDING_STEP_VIEWED, E(O({}, (0, s.hH)(t.id)), {
        step: i - 1,
        required: n[i - 1].required
      }))), p(Math.max(0, i - 1))
    };
  if (null == j) return null;
  switch (j.type) {
    case N.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(y, {
        guild: t,
        headerId: x,
        step: i,
        questionCount: n.length,
        currentPrompt: j,
        lastPrompt: v,
        selectOption: d,
        gotoPrevPrompt: I,
        gotoNextPrompt: C,
        completeOnboarding: u
      });
    case N.FN.DROPDOWN:
      return (0, r.jsx)(Z, {
        guild: t,
        headerId: x,
        step: i,
        questionCount: n.length,
        currentPrompt: j,
        lastPrompt: v,
        selectOption: d,
        gotoPrevPrompt: I,
        gotoNextPrompt: C,
        completeOnboarding: u
      });
    default:
      (0, h.vE)(j.type)
  }
}