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

function _(e) {
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

function P(e, t) {
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
    className: y.helpTextItem,
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
    gotoPrevPrompt: O,
    gotoNextPrompt: j,
    completeOnboarding: P
  } = e, C = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), E = 0 === C.length && (null == d ? true : d.required), D = null == d ? true : d.options.filter(e => C.includes(e.id)), I = (0, b.L6)(D), w = (0, b.dX)(D), S = 0 === C.length, {
    helpText: Z,
    helpTextAdditional: T
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: I,
    selectedChannelIds: w,
    itemHook: N
  }), k = (0, u.Z)(n.id, 1e3), A = d.options.map(e => _({
    value: e.id
  }, e)), B = d.options.filter(e => C.includes(e.id)).map(e => e.id);
  return (0, r.jsx)("div", {
    className: y.prompt,
    children: (0, r.jsxs)("div", {
      className: y.promptContent,
      children: [(0, r.jsxs)(l.zJl, {
        className: y.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: y.questionHeader,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: v.intl.format(v.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-xs/normal",
              className: y.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: v.intl.string(v.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(l.Heading, {
          className: y.title,
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
        className: y.navButtons,
        children: [(0, r.jsx)("div", {
          className: y.leftButtons,
          children: (i > 0 || p) && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: v.intl.string(v.t["13/7kX"]),
            onClick: () => O(C.length),
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: y.rightButtons,
          children: [(0, r.jsxs)(l.Text, {
            className: y.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [Z, " ", T]
          }), (0, r.jsx)(a.u, {
            asContainer: true,
            text: E ? v.intl.string(v.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: S ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89") : S ? v.intl.string(v.t["5Wxrcd"]) : v.intl.string(v.t.PDTjLN),
              onClick: () => s ? P() : j(C.length),
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
    gotoNextPrompt: O,
    completeOnboarding: j
  } = e, _ = (0, o.Wu)([m.Z], () => m.Z.getOnboardingResponsesForPrompt(n.id, d.id)), P = 0 === _.length && (null == d ? true : d.required), C = null == d ? true : d.options.filter(e => _.includes(e.id)), E = (0, b.L6)(C), D = (0, b.dX)(C), I = 0 === _.length, {
    helpText: w,
    helpTextAdditional: S
  } = (0, g.Z)({
    guild: n,
    prompt: d,
    selectedRoleIds: E,
    selectedChannelIds: D,
    itemHook: N
  });
  return (0, r.jsx)("div", {
    className: y.prompt,
    children: (0, r.jsxs)("div", {
      className: y.promptContent,
      children: [(0, r.jsxs)(l.zJl, {
        className: y.scrollerContent,
        children: [(0, r.jsxs)("div", {
          className: y.questionHeader,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: v.intl.format(v.t.isV0NW, {
              currentQuestion: i + 1,
              questionCount: c
            })
          }), d.required ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-xs/normal",
              className: y.headerSeparator,
              children: "\xb7"
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-brand",
              children: v.intl.string(v.t.Ur8Vrt)
            })]
          }) : null]
        }), (0, r.jsx)(l.Heading, {
          className: y.title,
          variant: "heading-xl/semibold",
          color: "text-strong",
          id: t,
          children: d.title
        }), (0, r.jsx)("div", {
          className: y.promptOptions,
          children: d.options.map(e => (0, r.jsx)(h.Z, {
            guildId: n.id,
            option: e,
            onSelect: t => f(d.id, e.id, null != t && t),
            selected: _.includes(e.id)
          }, e.id))
        })]
      }), (0, r.jsxs)("div", {
        className: y.navButtons,
        children: [(0, r.jsx)("div", {
          className: y.leftButtons,
          children: (i > 0 || u) && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: v.intl.string(v.t["13/7kX"]),
            onClick: () => x(_.length),
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: y.rightButtons,
          children: [(0, r.jsxs)(l.Text, {
            className: y.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [w, " ", S]
          }), (0, r.jsx)(a.u, {
            asContainer: true,
            text: P ? v.intl.string(v.t.dA1dSf) : null,
            children: (0, r.jsx)(l.Button, {
              variant: I ? "secondary" : "primary",
              size: "md",
              text: s ? "".concat(v.intl.string(v.t["8SuVoE"]), " \uD83C\uDF89") : I ? v.intl.string(v.t["5Wxrcd"]) : v.intl.string(v.t.PDTjLN),
              onClick: () => s ? j() : O(_.length),
              disabled: P || p,
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
  } = e, [v, y] = i.useState(false), N = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(t.id)), D = (0, o.e7)([m.Z], () => m.Z.getConnections(t.id)), I = i.useCallback(() => {
    y(true), u()
  }, [u]);
  i.useEffect(() => {
    t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && !t.features.has(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.ZP.fetchVerificationForm(t.id)
  }, [t]);
  let w = n[a],
    S = a + 1 >= n.length && !(0, b.O5)(t, N),
    Z = n[0].required;
  i.useEffect(() => {
    x || p.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, P(_({}, (0, s.hH)(t.id)), {
      step: 0,
      required: Z
    }))
  }, [t.id, Z, x]);
  let T = e => {
      !x && (p.default.track(j.rMx.GUILD_ONBOARDING_STEP_COMPLETED, P(_({}, (0, s.hH)(t.id)), {
        step: a,
        options_selected: e,
        skipped: 0 === e,
        back: false,
        in_onboarding: true,
        is_final_step: false
      })), a < n.length - 1 && p.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, P(_({}, (0, s.hH)(t.id)), {
        step: a,
        required: n[a + 1].required
      }))), a + 1 < n.length ? g(a + 1) : (0, b.O5)(t, N) && g("rules")
    },
    k = e => {
      !x && (p.default.track(j.rMx.GUILD_ONBOARDING_STEP_COMPLETED, P(_({}, (0, s.hH)(t.id)), {
        step: a,
        skipped: false,
        back: true,
        options_selected: e,
        in_onboarding: true,
        is_final_step: false
      })), a > 0 && p.default.track(j.rMx.GUILD_ONBOARDING_STEP_VIEWED, P(_({}, (0, s.hH)(t.id)), {
        step: a - 1,
        required: n[a - 1].required
      }))), 0 === a && D.length > 0 ? g("connections") : g(Math.max(0, a - 1))
    };
  if (null == w) return null;
  switch (w.type) {
    case O.FN.MULTIPLE_CHOICE:
      return (0, r.jsx)(E, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: w,
        lastPrompt: S,
        hasConnections: D.length > 0,
        isSubmitting: v,
        selectOption: l,
        gotoPrevPrompt: k,
        gotoNextPrompt: T,
        completeOnboarding: I
      });
    case O.FN.DROPDOWN:
      return (0, r.jsx)(C, {
        guild: t,
        headerId: h,
        step: a,
        questionCount: n.length,
        currentPrompt: w,
        lastPrompt: S,
        hasConnections: D.length > 0,
        isSubmitting: v,
        selectOption: l,
        gotoPrevPrompt: k,
        gotoNextPrompt: T,
        completeOnboarding: I
      });
    default:
      (0, f.vE)(w.type)
  }
}