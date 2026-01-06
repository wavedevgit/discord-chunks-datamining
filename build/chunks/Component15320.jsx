/** Chunk was on 37709 **/
/** chunk id: 15320, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
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
    isSubmitting: f,
    selectOption: h,
    gotoPrevPrompt: v,
    gotoNextPrompt: O,
    completeOnboarding: N
  } = e, C = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), E = 0 === C.length && (null == d ? true : d.required), D = null == d ? true : d.options.filter(e => C.includes(e.id)), I = (0, b.L6)(D), S = (0, b.dX)(D), Z = 0 === C.length, {
    helpText: T,
    helpTextAdditional: w
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: I,
    selectedChannelIds: S,
    itemHook: P
  }), k = (0, u.Z)(n.id, 1e3), A = d.options.map(e => y({
    value: e.id
  }, e)), B = d.options.filter(e => C.includes(e.id)).map(e => e.id);
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
          color: "text-strong",
          id: t,
          children: d.title
        }), (0, r.jsx)(x.Z, {
          options: A,
          value: B,
          onChange: e => {
            let t = e.find(e => !C.includes(e.id)),
              n = e.map(e => e.id);
            if (null != t) h(d.id, t.id, true);
            else {
              let e = C.filter(e => !n.includes(e));
              d.options.filter(t => e.includes(t.id)).forEach(e => {
                h(d.id, e.id, false)
              })
            }
          },
          memberCounts: k
        })]
      }), (0, r.jsxs)("div", {
        className: _.navButtons,
        children: [(0, r.jsx)("div", {
          className: _.leftButtons,
          children: (i > 0 || p) && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: j.intl.string(j.t["13/7kX"]),
            onClick: () => v(C.length),
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
            text: E ? j.intl.string(j.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: Z ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89") : Z ? j.intl.string(j.t["5Wxrcd"]) : j.intl.string(j.t.PDTjLN),
              onClick: () => s ? N() : O(C.length),
              disabled: E || f,
              loading: f,
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
    isSubmitting: p,
    selectOption: f,
    gotoPrevPrompt: x,
    gotoNextPrompt: v,
    completeOnboarding: O
  } = e, y = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), N = 0 === y.length && (null == d ? true : d.required), C = null == d ? true : d.options.filter(e => y.includes(e.id)), E = (0, b.L6)(C), D = (0, b.dX)(C), I = 0 === y.length, {
    helpText: S,
    helpTextAdditional: Z
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: E,
    selectedChannelIds: D,
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
          color: "text-strong",
          id: t,
          children: d.title
        }), (0, r.jsx)("div", {
          className: _.promptOptions,
          children: d.options.map(e => (0, r.jsx)(h.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => f(d.id, e.id, null != t && t),
            selected: y.includes(e.id)
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
            onClick: () => x(y.length),
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: _.rightButtons,
          children: [(0, r.jsxs)(l.Text, {
            className: _.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [S, " ", Z]
          }), (0, r.jsx)(a.u, {
            asContainer: true,
            text: N ? j.intl.string(j.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: I ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(j.intl.string(j.t["8SuVoE"]), " \uD83C\uDF89") : I ? j.intl.string(j.t["5Wxrcd"]) : j.intl.string(j.t.PDTjLN),
              onClick: () => s ? O() : v(y.length),
              disabled: N || p,
              loading: p,
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
  } = e, [j, _] = i.useState(false), P = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)), D = (0, o.e7)([m.Z], () => m.Z.getConnections(t.id)), I = i.useCallback(() => {
    _(true), u()
  }, [u]);
  i.useEffect(() => {
    t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let S = n[a],
    Z = a + 1 >= n.length && !(0, b.O5)(t, P),
    T = n[0].required;
  i.useEffect(() => {
    x || p.default.track(O.rMx.GUILD_ONBOARDING_STEP_VIEWED, N(y({}, (0, s.hH)(t.id)), {
      step: 0,
      required: T
    }))
  }, [t.id, T, x]);
  let w = e => {
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
      }))), a + 1 < n.length ? g(a + 1) : (0, b.O5)(t, P) && g("rules")
    },
    k = e => {
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
      }))), 0 === a && D.length > 0 ? g("connections") : g(Math.max(0, a - 1))
    };
  if (null == S) return null;
  switch (S.type) {
    case v.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: S,
        lastPrompt: Z,
        hasConnections: D.length > 0,
        isSubmitting: j,
        selectOption: l,
        gotoPrevPrompt: k,
        gotoNextPrompt: w,
        completeOnboarding: I
      });
    case v.FN.DROPDOWN:
      return (0, r.jsx)(C, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: S,
        lastPrompt: Z,
        hasConnections: D.length > 0,
        isSubmitting: j,
        selectOption: l,
        gotoPrevPrompt: k,
        gotoNextPrompt: w,
        completeOnboarding: I
      });
    default:
      (0, f.vE)(S.type)
  }
}