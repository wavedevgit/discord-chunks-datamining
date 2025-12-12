/** Chunk was on 37709 **/
/** chunk id: 973051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk863249 = require("./863249.js"),
  Chunk944163 = require("./944163.js"),
  Chunk454585 = require("./454585.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk613438 = require("./613438.js");

function b(e) {
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

function g(e, t) {
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

function h(e) {
  var t;
  let {
    guild: n,
    prompts: h,
    completeOnboarding: x,
    setCurrentStep: v,
    disableTracking: O,
    previousPromptIndex: j
  } = e, _ = i.useRef(null), y = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)), [N, P] = i.useState(null != (t = null == y ? true : y.response) && t), C = (0, o.e7)([c.Z], () => c.Z.get(n.id)), E = i.useRef(null), D = i.useRef(null), I = i.useCallback(async () => {
    if (null != C && null != y) {
      try {
        await s.ZP.submitVerificationForm(n.id, g(b({}, C), {
          formFields: [g(b({}, y), {
            response: N
          })]
        }))
      } catch (e) {}
      x()
    }
  }, [n.id, C, y, N, x]);

  function Z(e) {
    let [t] = e;
    t.isIntersecting && P(true)
  }
  return (i.useEffect(() => {
    let e = new IntersectionObserver(Z, {
        root: E.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = D.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [D, E]), null == y) ? null : (0, r.jsx)("div", {
    className: m.prompt,
    children: (0, r.jsxs)("div", {
      className: m.promptContent,
      ref: E,
      children: [(0, r.jsxs)(a.h21, {
        className: m.scrollerContent,
        ref: _,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: f.intl.string(f.t["b1JC+l"])
        }), (0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: f.intl.string(f.t.prJqwT)
        }), (0, r.jsx)("div", {
          className: m.termsFieldBody,
          ref: D,
          children: y.values.map((e, t) => (0, r.jsxs)("div", {
            className: m.termsRow,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              className: m.termsRowContent,
              children: d.Z.parseGuildVerificationFormRule(e, true, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: m.overlay
      }), (0, r.jsxs)("div", {
        className: m.navButtons,
        children: [(0, r.jsx)("div", {
          className: m.leftButtons,
          children: false !== j && "cover" !== j && (0, r.jsx)(a.Button, {
            variant: "secondary",
            size: "md",
            text: f.intl.string(f.t["13/7kX"]),
            onClick: () => {
              !O && (u.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, g(b({}, (0, l.hH)(n.id)), {
                step: false,
                skipped: false,
                back: true,
                options_selected: 0,
                in_onboarding: true,
                is_final_step: false
              })), "number" == typeof j && j >= 0 && u.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, g(b({}, (0, l.hH)(n.id)), {
                step: j,
                required: h[j].required
              }))), v(j)
            },
            icon: a.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: m.rightButtons,
          children: [(0, r.jsx)(a.Text, {
            className: m.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: N ? f.intl.string(f.t.arAe3I) : f.intl.string(f.t.D0CVAc)
          }), (0, r.jsx)(a.Button, {
            variant: "primary",
            size: "md",
            text: "".concat(f.intl.string(f.t["8SuVoE"]), " \uD83C\uDF89"),
            onClick: I,
            disabled: !N
          })]
        })]
      })]
    })
  })
}