/** Chunk was on 39579 **/
/** chunk id: 912417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk408213 = require("./408213.js"),
  Chunk60175 = require("./60175.js"),
  Chunk386784 = require("./386784.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk218785 = require("./218785.js"),
  Chunk164048 = require("./164048.jsx"),
  Chunk839447 = require("./839447.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22941 = require("./22941.js");

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

function A(e, t) {
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

function N(e, t) {
  return (0, r.jsx)("span", {
    className: j.a1,
    children: e
  }, t)
}

function P(e) {
  let {
    headerId: t,
    guild: n,
    step: i,
    lastPrompt: a,
    questionCount: c,
    currentPrompt: d,
    hasConnections: p,
    isSubmitting: f,
    selectOption: _,
    gotoPrevPrompt: x,
    gotoNextPrompt: O,
    completeOnboarding: A
  } = e, P = (0, l.yK)([m.A], () => m.A.getOnboardingResponsesForPrompt(n.id, d.id)), E = 0 === P.length && (null == d ? true : d.required), w = null == d ? true : d.options.filter(e => P.includes(e.id)), D = (0, g.a)(w), C = (0, g.vV)(w), S = 0 === P.length, {
    helpText: I,
    helpTextAdditional: T
  } = (0, b.A)({
    guild: n,
    prompt: d,
    selectedRoleIds: D,
    selectedChannelIds: C,
    itemHook: N
  }), k = (0, u.A)(n.id, 1e3), R = d.options.map(e => y({
    value: e.id
  }, e)), L = d.options.filter(e => P.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: j.J1,
    children: (0, r.jsxs)("div", {
      className: j.mK,
      children: [(0, r.jsxs)(o.IpV, {
        className: j.gT,
        children: [(0, r.jsxs)("div", {
          className: j.q,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: v.intl.format(v.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: j.HE,
              children: "\xb7"
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: v.intl.string(v.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(o.Heading, {
          className: j.DD,
          variant: "heading-xl/semibold",
          color: "text-strong",
          id: t,
          children: d.title
        }), (0, r.jsx)(h.A, {
          options: R,
          value: L,
          onChange: e => {
            let t = e.find(e => !P.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) _(d.id, t.id, true);
            else {
              let e = P.filter(e => !n.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                _(d.id, e.id, false)
              })
            }
          },
          memberCounts: k
        })]
      }), (0, r.jsxs)("div", {
        className: j.N3,
        children: [(0, r.jsx)("div", {
          className: j.X1,
          children: (i > 0 || p) && (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: v.intl.string(v.t["13/7kX"]),
            onClick: () => x(P.length),
            icon: o.Zge,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: j.Oh,
          children: [(0, r.jsxs)(o.Text, {
            className: j.BK,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [I, " ", T]
          }), (0, r.jsx)(s.m, {
            asContainer: true,
            text: E ? v.intl.string(v.t.dA1dSf) : null,
            children: (0, r.jsx)(o.Button, {
              variant: S ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89") : S ? v.intl.string(v.t["5Wxrcd"]) : v.intl.string(v.t.PDTjLN),
              onClick: () => a ? A() : O(P.length),
              disabled: E || f,
              loading: f,
              icon: a ? true : o.KS6,
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
    isSubmitting: p,
    selectOption: f,
    gotoPrevPrompt: h,
    gotoNextPrompt: x,
    completeOnboarding: O
  } = e, y = (0, l.yK)([m.A], () => m.A.getOnboardingResponsesForPrompt(n.id, d.id)), A = 0 === y.length && (null == d ? true : d.required), P = null == d ? true : d.options.filter(e => y.includes(e.id)), E = (0, g.a)(P), w = (0, g.vV)(P), D = 0 === y.length, {
    helpText: C,
    helpTextAdditional: S
  } = (0, b.A)({
    guild: n,
    prompt: d,
    selectedRoleIds: E,
    selectedChannelIds: w,
    itemHook: N
  });
  return (0, r.jsx)("div", {
    className: j.J1,
    children: (0, r.jsxs)("div", {
      className: j.mK,
      children: [(0, r.jsxs)(o.IpV, {
        className: j.gT,
        children: [(0, r.jsxs)("div", {
          className: j.q,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: v.intl.format(v.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              className: j.HE,
              children: "\xb7"
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: v.intl.string(v.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(o.Heading, {
          className: j.DD,
          variant: "heading-xl/semibold",
          color: "text-strong",
          id: t,
          children: d.title
        }), (0, r.jsx)("div", {
          className: j.vS,
          children: d.options.map(e => (0, r.jsx)(_.A, {
            guildId: n.id,
            option: e,
            onSelect: t => f(d.id, e.id, null != t && t),
            selected: y.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: j.N3,
        children: [(0, r.jsx)("div", {
          className: j.X1,
          children: (i > 0 || u) && (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: v.intl.string(v.t["13/7kX"]),
            onClick: () => h(y.length),
            icon: o.Zge,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: j.Oh,
          children: [(0, r.jsxs)(o.Text, {
            className: j.BK,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [C, " ", S]
          }), (0, r.jsx)(s.m, {
            asContainer: true,
            text: A ? v.intl.string(v.t.dA1dSf) : null,
            children: (0, r.jsx)(o.Button, {
              variant: D ? "secondary" : "primary",
              size: "md",
              text: a ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89") : D ? v.intl.string(v.t["5Wxrcd"]) : v.intl.string(v.t.PDTjLN),
              onClick: () => a ? O() : x(y.length),
              disabled: A || p,
              loading: p,
              icon: a ? true : o.KS6,
              iconPosition: "end"
            })
          })]
        })]
      })]
    })
  })
}

function w(e) {
  let {
    guild: t,
    prompts: n,
    step: s,
    selectOption: o,
    completeOnboarding: u,
    setCurrentStep: b,
    headerId: _,
    disableTracking: h
  } = e, [v, j] = i.useState(false), N = (0, l.bG)([d.A], () => d.A.getRulesPrompt(t.id)), w = (0, l.bG)([m.A], () => m.A.getConnections(t.id)), D = i.useCallback(() => {
    j(true), u()
  }, [u]);
  i.useEffect(() => {
    t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.Ay.fetchVerificationForm(t.id)
  }, [t]);
  let C = n[s],
    S = s + 1 >= n.length && !(0, g.L1)(t, N),
    I = n[0].required;
  i.useEffect(() => {
    h || p.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, A(y({}, (0, a.H$)(t.id)), {
      step: 0,
      required: I
    }))
  }, [t.id, I, h]);
  let T = e => {
      !h && (p.default.track(O.HAw.GUILD_ONBOARDING_STEP_COMPLETED, A(y({}, (0, a.H$)(t.id)), {
        step: s,
        options_selected: e,
        skipped: 0 === e,
        back: false,
        in_onboarding: true,
        is_final_step: false
      })), s < n.length - 1 && p.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, A(y({}, (0, a.H$)(t.id)), {
        step: s,
        required: n[s + 1].required
      }))), s + 1 < n.length ? b(s + 1) : (0, g.L1)(t, N) && b("rules")
    },
    k = e => {
      !h && (p.default.track(O.HAw.GUILD_ONBOARDING_STEP_COMPLETED, A(y({}, (0, a.H$)(t.id)), {
        step: s,
        skipped: false,
        back: true,
        options_selected: e,
        in_onboarding: true,
        is_final_step: false
      })), s > 0 && p.default.track(O.HAw.GUILD_ONBOARDING_STEP_VIEWED, A(y({}, (0, a.H$)(t.id)), {
        step: s - 1,
        required: n[s - 1].required
      }))), 0 === s && w.length > 0 ? b("connections") : b(Math.max(0, s - 1))
    };
  if (null == C) return null;
  switch (C.type) {
    case x.ME.MULTIPLE_CHOICE:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: _,
        step: s,
        questionCount: n.length,
        currentPrompt: C,
        lastPrompt: S,
        hasConnections: w.length > 0,
        isSubmitting: v,
        selectOption: o,
        gotoPrevPrompt: k,
        gotoNextPrompt: T,
        completeOnboarding: D
      });
    case x.ME.DROPDOWN:
      return (0, r.jsx)(P, {
        guild: t,
        headerId: _,
        step: s,
        questionCount: n.length,
        currentPrompt: C,
        lastPrompt: S,
        hasConnections: w.length > 0,
        isSubmitting: v,
        selectOption: o,
        gotoPrevPrompt: k,
        gotoNextPrompt: T,
        completeOnboarding: D
      });
    default:
      (0, f.xb)(C.type)
  }
}