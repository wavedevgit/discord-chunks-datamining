/** Chunk was on 37709 **/
/** chunk id: 15320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk982653 = require("./982653.js");

function y(e) {
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

function N(e, t) {
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

function P(e, t) {
  return (0, r.jsx)("span", {
    className: j.helpTextItem,
    children: e
  }, t)
}

function C(e) {
  let {
    headerId: t,
    guild: n,
    step: i,
    lastPrompt: a,
    questionCount: c,
    currentPrompt: d,
    hasConnections: p,
    selectOption: m,
    gotoPrevPrompt: x,
    gotoNextPrompt: b,
    completeOnboarding: v
  } = e, N = (0, o.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, d.id)), C = 0 === N.length && (null == d ? true : d.required), E = null == d ? true : d.options.filter(e => N.includes(e.id)), D = (0, g.L6)(E), I = (0, g.dX)(E), Z = 0 === N.length, {
    helpText: T,
    helpTextAdditional: w
  } = (0, h.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: D,
    selectedChannelIds: I,
    itemHook: P
  }), S = (0, u.Z)(n.id, 1e3), k = d.options.map(e => y({
    value: e.id
  }, e)), A = d.options.filter(e => N.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: j.prompt,
    children: (0, r.jsxs)("div", {
      className: j.promptContent,
      children: [(0, r.jsxs)(s.zJl, {
        className: j.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: j.questionHeader,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.intl.format(O.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              className: j.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: O.intl.string(O.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(s.Heading, {
          className: j.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, r.jsx)(_.Z, {
          options: k,
          value: A,
          onChange: e => {
            let t = e.find(e => !N.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) m(d.id, t.id, true);
            else {
              let e = N.filter(e => !n.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                m(d.id, e.id, false)
              })
            }
          },
          memberCounts: S
        })]
      }), (0, r.jsxs)("div", {
        className: j.navButtons,
        children: [(0, r.jsx)("div", {
          className: j.leftButtons,
          children: (i > 0 || p) && (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: O.intl.string(O.t["13/7kX"]),
            onClick: () => x(N.length),
            icon: s.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, r.jsxs)(s.Text, {
            className: j.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [T, " ", w]
          }), (0, r.jsx)(l.u, {
            asContainer: true,
            text: C ? O.intl.string(O.t.dA1dSf) : null,
            children: (0, r.jsx)(s.Button, {
              variant: Z ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(O.intl.string(O.t["8SuVoE"]), " \uD83C\uDF89") : Z ? O.intl.string(O.t["5Wxrcd"]) : O.intl.string(O.t.PDTjLN),
              onClick: () => a ? v() : b(N.length),
              disabled: C,
              icon: a ? true : s.d4D,
              iconPosition: "end"
            })
          })]
        })]
      })]
    })
  })
}

function E(e) {
  let {
    headerId: t,
    guild: n,
    step: i,
    lastPrompt: a,
    questionCount: c,
    currentPrompt: d,
    hasConnections: u,
    selectOption: p,
    gotoPrevPrompt: m,
    gotoNextPrompt: _,
    completeOnboarding: b
  } = e, v = (0, o.Wu)([f.Z], () => f.Z.getOnboardingResponsesForPrompt(n.id, d.id)), y = 0 === v.length && (null == d ? true : d.required), N = null == d ? true : d.options.filter(e => v.includes(e.id)), C = (0, g.L6)(N), E = (0, g.dX)(N), D = 0 === v.length, {
    helpText: I,
    helpTextAdditional: Z
  } = (0, h.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: C,
    selectedChannelIds: E,
    itemHook: P
  });
  return (0, r.jsx)("div", {
    className: j.prompt,
    children: (0, r.jsxs)("div", {
      className: j.promptContent,
      children: [(0, r.jsxs)(s.zJl, {
        className: j.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: j.questionHeader,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: O.intl.format(O.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              className: j.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: O.intl.string(O.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(s.Heading, {
          className: j.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, r.jsx)("div", {
          className: j.promptOptions,
          children: d.options.map(e => (0, r.jsx)(x.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => p(d.id, e.id, null != t && t),
            selected: v.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: j.navButtons,
        children: [(0, r.jsx)("div", {
          className: j.leftButtons,
          children: (i > 0 || u) && (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: O.intl.string(O.t["13/7kX"]),
            onClick: () => m(v.length),
            icon: s.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, r.jsxs)(s.Text, {
            className: j.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [I, " ", Z]
          }), (0, r.jsx)(l.u, {
            asContainer: true,
            text: y ? O.intl.string(O.t.dA1dSf) : null,
            children: (0, r.jsx)(s.Button, {
              variant: D ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(O.intl.string(O.t["8SuVoE"]), " \uD83C\uDF89") : D ? O.intl.string(O.t["5Wxrcd"]) : O.intl.string(O.t.PDTjLN),
              onClick: () => a ? b() : _(v.length),
              disabled: y,
              icon: a ? true : s.d4D,
              iconPosition: "end"
            })
          })]
        })]
      })]
    })
  })
}

function D(e) {
  let {
    guild: t,
    prompts: n,
    step: l,
    selectOption: s,
    completeOnboarding: u,
    setCurrentStep: h,
    headerId: x,
    disableTracking: _
  } = e, O = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)), j = (0, o.e7)([f.Z], () => f.Z.getConnections(t.id));
  i.useEffect(() => {
    t.features.has(v.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let P = n[l],
    D = l + 1 >= n.length && !(0, g.O5)(t, O),
    I = n[0].required;
  i.useEffect(() => {
    _ || p.default.track(v.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, a.hH)(t.id)), {
      step: 0,
      required: I
    }))
  }, [t.id, I, _]);
  let Z = e => {
      !_ && (p.default.track(v.rMx.GUILD_ONBOARDING_STEP_COMPLETED, N(y({}, (0, a.hH)(t.id)), {
        step: l,
        options_selected: e,
        skipped: 0 === e,
        back: false,
        in_onboarding: true,
        is_final_step: false
      })), l < n.length - 1 && p.default.track(v.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, a.hH)(t.id)), {
        step: l,
        required: n[l + 1].required
      }))), l + 1 < n.length ? h(l + 1) : (0, g.O5)(t, O) && h("rules")
    },
    T = e => {
      !_ && (p.default.track(v.rMx.GUILD_ONBOARDING_STEP_COMPLETED, N(y({}, (0, a.hH)(t.id)), {
        step: l,
        skipped: false,
        back: true,
        options_selected: e,
        in_onboarding: true,
        is_final_step: false
      })), l > 0 && p.default.track(v.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, a.hH)(t.id)), {
        step: l - 1,
        required: n[l - 1].required
      }))), 0 === l && j.length > 0 ? h("connections") : h(Math.max(0, l - 1))
    };
  if (null == P) return null;
  switch (P.type) {
    case b.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: x,
        step: l,
        questionCount: n.length,
        currentPrompt: P,
        lastPrompt: D,
        hasConnections: j.length > 0,
        selectOption: s,
        gotoPrevPrompt: T,
        gotoNextPrompt: Z,
        completeOnboarding: u
      });
    case b.FN.DROPDOWN:
      return (0, r.jsx)(C, {
        guild: t,
        headerId: x,
        step: l,
        questionCount: n.length,
        currentPrompt: P,
        lastPrompt: D,
        hasConnections: j.length > 0,
        selectOption: s,
        gotoPrevPrompt: T,
        gotoNextPrompt: Z,
        completeOnboarding: u
      });
    default:
      (0, m.vE)(P.type)
  }
}