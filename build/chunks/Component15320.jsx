/** Chunk was on 6841 **/
/** chunk id: 15320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk613438 = require("./613438.js");

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
    className: _.helpTextItem,
    children: e
  }, t)
}

function C(e) {
  let {
    headerId: t,
    guild: n,
    step: i,
    lastPrompt: s,
    questionCount: c,
    currentPrompt: d,
    hasConnections: p,
    selectOption: f,
    gotoPrevPrompt: h,
    gotoNextPrompt: v,
    completeOnboarding: O
  } = e, N = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), C = 0 === N.length && (null == d ? true : d.required), E = null == d ? true : d.options.filter(e => N.includes(e.id)), D = (0, b.L6)(E), I = (0, b.dX)(E), Z = 0 === N.length, {
    helpText: T,
    helpTextAdditional: w
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: D,
    selectedChannelIds: I,
    itemHook: P
  }), S = (0, u.Z)(n.id, 1e3), k = d.options.map(e => y({
    value: e.id
  }, e)), A = d.options.filter(e => N.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: _.prompt,
    children: (0, r.jsxs)("div", {
      className: _.promptContent,
      children: [(0, r.jsxs)(l.zJl, {
        className: _.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: _.questionHeader,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: j.intl.format(j.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-xs/normal",
              className: _.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: j.intl.string(j.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(l.Heading, {
          className: _.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, r.jsx)(x.Z, {
          options: k,
          value: A,
          onChange: e => {
            let t = e.find(e => !N.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) f(d.id, t.id, true);
            else {
              let e = N.filter(e => !n.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                f(d.id, e.id, false)
              })
            }
          },
          memberCounts: S
        })]
      }), (0, r.jsxs)("div", {
        className: _.navButtons,
        children: [(0, r.jsx)("div", {
          className: _.leftButtons,
          children: (i > 0 || p) && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: j.intl.string(j.t["13/7kX"]),
            onClick: () => h(N.length),
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: _.rightButtons,
          children: [(0, r.jsxs)(l.Text, {
            className: _.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [T, " ", w]
          }), (0, r.jsx)(a.u, {
            asContainer: true,
            text: C ? j.intl.string(j.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: Z ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89") : Z ? j.intl.string(j.t["5Wxrcd"]) : j.intl.string(j.t.PDTjLN),
              onClick: () => s ? O() : v(N.length),
              disabled: C,
              icon: s ? true : l.d4D,
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
    lastPrompt: s,
    questionCount: c,
    currentPrompt: d,
    hasConnections: u,
    selectOption: p,
    gotoPrevPrompt: f,
    gotoNextPrompt: x,
    completeOnboarding: v
  } = e, O = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), y = 0 === O.length && (null == d ? true : d.required), N = null == d ? true : d.options.filter(e => O.includes(e.id)), C = (0, b.L6)(N), E = (0, b.dX)(N), D = 0 === O.length, {
    helpText: I,
    helpTextAdditional: Z
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: C,
    selectedChannelIds: E,
    itemHook: P
  });
  return (0, r.jsx)("div", {
    className: _.prompt,
    children: (0, r.jsxs)("div", {
      className: _.promptContent,
      children: [(0, r.jsxs)(l.zJl, {
        className: _.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: _.questionHeader,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: j.intl.format(j.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-xs/normal",
              className: _.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: j.intl.string(j.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(l.Heading, {
          className: _.title,
          variant: "heading-xl/semibold",
          color: "header-primary",
          id: t,
          children: d.title
        }), (0, r.jsx)("div", {
          className: _.promptOptions,
          children: d.options.map(e => (0, r.jsx)(h.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => p(d.id, e.id, null != t && t),
            selected: O.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: _.navButtons,
        children: [(0, r.jsx)("div", {
          className: _.leftButtons,
          children: (i > 0 || u) && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: j.intl.string(j.t["13/7kX"]),
            onClick: () => f(O.length),
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: _.rightButtons,
          children: [(0, r.jsxs)(l.Text, {
            className: _.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [I, " ", Z]
          }), (0, r.jsx)(a.u, {
            asContainer: true,
            text: y ? j.intl.string(j.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: D ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89") : D ? j.intl.string(j.t["5Wxrcd"]) : j.intl.string(j.t.PDTjLN),
              onClick: () => s ? v() : x(O.length),
              disabled: y,
              icon: s ? true : l.d4D,
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
    step: a,
    selectOption: l,
    completeOnboarding: u,
    setCurrentStep: g,
    headerId: h,
    disableTracking: x
  } = e, j = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)), _ = (0, o.e7)([m.Z], () => m.Z.getConnections(t.id));
  i.useEffect(() => {
    t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let P = n[a],
    D = a + 1 >= n.length && !(0, b.O5)(t, j),
    I = n[0].required;
  i.useEffect(() => {
    x || p.default.track(O.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, s.hH)(t.id)), {
      step: 0,
      required: I
    }))
  }, [t.id, I, x]);
  let Z = e => {
      !x && (p.default.track(O.rMx.GUILD_ONBOARDING_STEP_COMPLETED, N(y({}, (0, s.hH)(t.id)), {
        step: a,
        options_selected: e,
        skipped: 0 === e,
        back: false,
        in_onboarding: true,
        is_final_step: false
      })), a < n.length - 1 && p.default.track(O.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, s.hH)(t.id)), {
        step: a,
        required: n[a + 1].required
      }))), a + 1 < n.length ? g(a + 1) : (0, b.O5)(t, j) && g("rules")
    },
    T = e => {
      !x && (p.default.track(O.rMx.GUILD_ONBOARDING_STEP_COMPLETED, N(y({}, (0, s.hH)(t.id)), {
        step: a,
        skipped: false,
        back: true,
        options_selected: e,
        in_onboarding: true,
        is_final_step: false
      })), a > 0 && p.default.track(O.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, s.hH)(t.id)), {
        step: a - 1,
        required: n[a - 1].required
      }))), 0 === a && _.length > 0 ? g("connections") : g(Math.max(0, a - 1))
    };
  if (null == P) return null;
  switch (P.type) {
    case v.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: P,
        lastPrompt: D,
        hasConnections: _.length > 0,
        selectOption: l,
        gotoPrevPrompt: T,
        gotoNextPrompt: Z,
        completeOnboarding: u
      });
    case v.FN.DROPDOWN:
      return (0, r.jsx)(C, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: P,
        lastPrompt: D,
        hasConnections: _.length > 0,
        selectOption: l,
        gotoPrevPrompt: T,
        gotoNextPrompt: Z,
        completeOnboarding: u
      });
    default:
      (0, f.vE)(P.type)
  }
}