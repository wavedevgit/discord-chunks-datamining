/** Chunk was on 37709 **/
/** chunk id: 15320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk863249 = require("./863249.js"),
  Chunk944163 = require("./944163.js"),
  Chunk14263 = require("./14263.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk968644 = require("./968644.js"),
  Chunk104265 = require("./104265.jsx"),
  Chunk588632 = require("./588632.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802179 = require("./802179.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
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

function y(e, t) {
  return (0, r.jsx)("span", {
    className: b.helpTextItem,
    children: e
  }, t)
}

function N(e, t) {
  return !(e.features.has(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && e.features.has(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && null != t
}

function E(e) {
  let {
    headerId: t,
    guild: n,
    step: l,
    lastPrompt: a,
    questionCount: s,
    currentPrompt: c,
    selectOption: d,
    gotoPrevPrompt: m,
    gotoNextPrompt: x,
    completeOnboarding: v
  } = e, j = (0, i.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, c.id)), C = 0 === j.length && (null == c ? true : c.required), N = null == c ? true : c.options.filter(e => j.includes(e.id)), E = (0, p.L6)(N), P = (0, p.dX)(N), Z = 0 === j.length, {
    helpText: I,
    helpTextAdditional: T
  } = (0, h.Z)({
    guild: n,
    prompt: c,
    selectedRoleIds: E,
    selectedChannelIds: P,
    itemHook: y
  }), w = (0, u.Z)(n.id, 1e3), k = c.options.map(e => O({
    value: e.id
  }, e)), D = c.options.filter(e => j.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: b.prompt,
    children: (0, r.jsxs)("div", {
      className: b.promptContent,
      children: [(0, r.jsxs)(o.zJl, {
        className: b.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: b.questionHeader,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.intl.format(_.t.isV0NT, {
              currentQuestion: l + 1,
              questionCount: s
            })
          }), c.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: b.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: _.intl.string(_.t.Ur8Vrq)
            })]
          }) : null]
        }), (0, r.jsx)(o.X6q, {
          className: b.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: c.title
        }), (0, r.jsx)(g.Z, {
          options: k,
          value: D,
          onChange: e => {
            let t = e.find(e => !j.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) d(c.id, t.id, true);
            else {
              let e = j.filter(e => !n.includes(e));
              c.options.filter(t => e.includes(t.id)).forEach(e => {
                d(c.id, e.id, false)
              })
            }
          },
          memberCounts: w
        })]
      }), (0, r.jsxs)("div", {
        className: b.navButtons,
        children: [(0, r.jsx)("div", {
          className: b.leftButtons,
          children: l > 0 && (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "md",
            text: _.intl.string(_.t["13/7kZ"]),
            onClick: () => m(j.length),
            icon: o.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: b.rightButtons,
          children: [(0, r.jsxs)(o.Text, {
            className: b.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [I, " ", T]
          }), (0, r.jsx)(o.DY3, {
            text: C ? _.intl.string(_.t.dA1dSU) : null,
            children: (0, r.jsx)(o.zxk, {
              variant: Z ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(_.intl.string(_.t["8SuVoK"]), " \uD83C\uDF89") : Z ? _.intl.string(_.t["5WxrcX"]) : _.intl.string(_.t.PDTjLC),
              onClick: () => a ? v() : x(j.length),
              disabled: C,
              icon: a ? true : o.d4D,
              iconPosition: "end"
            })
          })]
        })]
      })]
    })
  })
}

function P(e) {
  let {
    headerId: t,
    guild: n,
    step: l,
    lastPrompt: a,
    questionCount: s,
    currentPrompt: c,
    selectOption: u,
    gotoPrevPrompt: d,
    gotoNextPrompt: m,
    completeOnboarding: g
  } = e, v = (0, i.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, c.id)), j = 0 === v.length && (null == c ? true : c.required), O = null == c ? true : c.options.filter(e => v.includes(e.id)), C = (0, p.L6)(O), N = (0, p.dX)(O), E = 0 === v.length, {
    helpText: P,
    helpTextAdditional: Z
  } = (0, h.Z)({
    guild: n,
    prompt: c,
    selectedRoleIds: C,
    selectedChannelIds: N,
    itemHook: y
  });
  return (0, r.jsx)("div", {
    className: b.prompt,
    children: (0, r.jsxs)("div", {
      className: b.promptContent,
      children: [(0, r.jsxs)(o.zJl, {
        className: b.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: b.questionHeader,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: _.intl.format(_.t.isV0NT, {
              currentQuestion: l + 1,
              questionCount: s
            })
          }), c.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: b.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: _.intl.string(_.t.Ur8Vrq)
            })]
          }) : null]
        }), (0, r.jsx)(o.X6q, {
          className: b.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: c.title
        }), (0, r.jsx)("div", {
          className: b.promptOptions,
          children: c.options.map(e => (0, r.jsx)(x.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => u(c.id, e.id, null != t && t),
            selected: v.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: b.navButtons,
        children: [(0, r.jsx)("div", {
          className: b.leftButtons,
          children: l > 0 && (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "md",
            text: _.intl.string(_.t["13/7kZ"]),
            onClick: () => d(v.length),
            icon: o.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: b.rightButtons,
          children: [(0, r.jsxs)(o.Text, {
            className: b.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [P, " ", Z]
          }), (0, r.jsx)(o.DY3, {
            text: j ? _.intl.string(_.t.dA1dSU) : null,
            children: (0, r.jsx)(o.zxk, {
              variant: E ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(_.intl.string(_.t["8SuVoK"]), " \uD83C\uDF89") : E ? _.intl.string(_.t["5WxrcX"]) : _.intl.string(_.t.PDTjLC),
              onClick: () => a ? g() : m(v.length),
              disabled: j,
              icon: a ? true : o.d4D,
              iconPosition: "end"
            })
          })]
        })]
      })]
    })
  })
}

function Z(e) {
  let {
    guild: t,
    prompts: n,
    step: o,
    selectOption: u,
    completeOnboarding: f,
    setCurrentStep: p,
    headerId: h,
    disableTracking: x
  } = e, g = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(t.id));
  l.useEffect(() => {
    t.features.has(j.oNc.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(j.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && s.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let _ = n[o],
    b = o + 1 >= n.length && !N(t, g),
    y = n[0].required;
  l.useEffect(() => {
    x || d.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, C(O({}, (0, a.hH)(t.id)), {
      step: 0,
      required: y
    }))
  }, [t.id, y, x]);
  let Z = e => {
      !x && (d.default.track(j.rMx.GUILD_ONBOARDING_STEP_COMPLETED, C(O({}, (0, a.hH)(t.id)), {
        step: o,
        options_selected: e,
        skipped: 0 === e,
        back: false,
        in_onboarding: true,
        is_final_step: false
      })), o < n.length - 1 && d.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, C(O({}, (0, a.hH)(t.id)), {
        step: o,
        required: n[o + 1].required
      }))), o + 1 < n.length ? p(o + 1) : N(t, g) && p("rules")
    },
    I = e => {
      !x && (d.default.track(j.rMx.GUILD_ONBOARDING_STEP_COMPLETED, C(O({}, (0, a.hH)(t.id)), {
        step: o,
        skipped: false,
        back: true,
        options_selected: e,
        in_onboarding: true,
        is_final_step: false
      })), o > 0 && d.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, C(O({}, (0, a.hH)(t.id)), {
        step: o - 1,
        required: n[o - 1].required
      }))), p(Math.max(0, o - 1))
    };
  if (null == _) return null;
  switch (_.type) {
    case v.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(P, {
        guild: t,
        headerId: h,
        step: o,
        questionCount: n.length,
        currentPrompt: _,
        lastPrompt: b,
        selectOption: u,
        gotoPrevPrompt: I,
        gotoNextPrompt: Z,
        completeOnboarding: f
      });
    case v.FN.DROPDOWN:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: h,
        step: o,
        questionCount: n.length,
        currentPrompt: _,
        lastPrompt: b,
        selectOption: u,
        gotoPrevPrompt: I,
        gotoNextPrompt: Z,
        completeOnboarding: f
      });
    default:
      (0, m.vE)(_.type)
  }
}