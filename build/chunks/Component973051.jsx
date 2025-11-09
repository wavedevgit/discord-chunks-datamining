/** Chunk was on 37709 **/
/** chunk id: 973051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk863249 = require("./863249.js"),
  Chunk944163 = require("./944163.js"),
  Chunk454585 = require("./454585.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982653 = require("./982653.js");

function g(e) {
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

function h(e, t) {
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

function x(e) {
  var t;
  let {
    guild: n,
    prompts: x,
    completeOnboarding: _,
    setCurrentStep: b,
    disableTracking: v,
    previousPromptIndex: O
  } = e, j = i.useRef(null), y = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)), [N, P] = i.useState(null != (t = null == y ? true : y.response) && t), C = (0, o.e7)([c.Z], () => c.Z.get(n.id)), E = i.useRef(null), D = i.useRef(null), I = i.useCallback(async () => {
    if (null != C && null != y) {
      try {
        await a.ZP.submitVerificationForm(n.id, h(g({}, C), {
          formFields: [h(g({}, y), {
            response: N
          })]
        }))
      } catch (e) {}
      _()
    }
  }, [n.id, C, y, N, _]);

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
    className: f.prompt,
    children: (0, r.jsxs)("div", {
      className: f.promptContent,
      ref: E,
      children: [(0, r.jsxs)(l.h21, {
        className: f.scrollerContent,
        ref: j,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: m.intl.string(m.t["b1JC+l"])
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.prJqwT)
        }), (0, r.jsx)("div", {
          className: f.termsFieldBody,
          ref: D,
          children: y.values.map((e, t) => (0, r.jsxs)("div", {
            className: f.termsRow,
            children: [(0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              className: f.termsRowContent,
              children: d.Z.parseGuildVerificationFormRule(e, true, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: f.overlay
      }), (0, r.jsxs)("div", {
        className: f.navButtons,
        children: [(0, r.jsx)("div", {
          className: f.leftButtons,
          children: false !== O && "cover" !== O && (0, r.jsx)(l.Button, {
            variant: "secondary",
            size: "md",
            text: m.intl.string(m.t["13/7kX"]),
            onClick: () => {
              !v && (u.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, h(g({}, (0, s.hH)(n.id)), {
                step: false,
                skipped: false,
                back: true,
                options_selected: 0,
                in_onboarding: true,
                is_final_step: false
              })), "number" == typeof O && O >= 0 && u.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, h(g({}, (0, s.hH)(n.id)), {
                step: O,
                required: x[O].required
              }))), b(O)
            },
            icon: l.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: f.rightButtons,
          children: [(0, r.jsx)(l.Text, {
            className: f.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: N ? m.intl.string(m.t.arAe3I) : m.intl.string(m.t.D0CVAc)
          }), (0, r.jsx)(l.Button, {
            variant: "primary",
            size: "md",
            text: "".concat(m.intl.string(m.t["8SuVoE"]), " \uD83C\uDF89"),
            onClick: I,
            disabled: !N
          })]
        })]
      })]
    })
  })
}