/** Chunk was on 37709 **/
/** chunk id: 973051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function h(e) {
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

function x(e, t) {
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

function g(e) {
  var t;
  let {
    guild: n,
    prompts: g,
    completeOnboarding: v,
    setCurrentStep: j,
    disableTracking: _,
    previousPromptIndex: b
  } = e, O = l.useRef(null), C = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)), [y, N] = l.useState(null != (t = null == C ? true : C.response) && t), E = (0, i.e7)([c.Z], () => c.Z.get(n.id)), P = l.useRef(null), Z = l.useRef(null), I = l.useCallback(async () => {
    if (null != E && null != C) {
      try {
        await s.ZP.submitVerificationForm(n.id, x(h({}, E), {
          formFields: [x(h({}, C), {
            response: y
          })]
        }))
      } catch (e) {}
      v()
    }
  }, [n.id, E, C, y, v]);

  function T(e) {
    let [t] = e;
    t.isIntersecting && N(true)
  }
  return (l.useEffect(() => {
    let e = new IntersectionObserver(T, {
        root: P.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = Z.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [Z, P]), null == C) ? null : (0, r.jsx)("div", {
    className: p.prompt,
    children: (0, r.jsxs)("div", {
      className: p.promptContent,
      ref: P,
      children: [(0, r.jsxs)(o.h21, {
        className: p.scrollerContent,
        ref: O,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: f.intl.string(f.t["b1JC+v"])
        }), (0, r.jsx)(o.X6q, {
          variant: "heading-xl/semibold",
          children: f.intl.string(f.t.prJqwc)
        }), (0, r.jsx)("div", {
          className: p.termsFieldBody,
          ref: Z,
          children: C.values.map((e, t) => (0, r.jsxs)("div", {
            className: p.termsRow,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: p.termsRowContent,
              children: u.Z.parseGuildVerificationFormRule(e, true, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: p.overlay
      }), (0, r.jsxs)("div", {
        className: p.navButtons,
        children: [(0, r.jsx)("div", {
          className: p.leftButtons,
          children: false !== b && (0, r.jsx)(o.zxk, {
            variant: "secondary",
            size: "md",
            text: f.intl.string(f.t["13/7kZ"]),
            onClick: () => {
              !_ && (d.default.track(m.rMx.GUILD_ONBOARDING_STEP_COMPLETED, x(h({}, (0, a.hH)(n.id)), {
                step: false,
                skipped: false,
                back: true,
                options_selected: 0,
                in_onboarding: true,
                is_final_step: false
              })), b >= 0 && d.default.track(m.rMx.GUILD_ONBOARDING_STEP_VIEWED, x(h({}, (0, a.hH)(n.id)), {
                step: b,
                required: g[b].required
              }))), j(b)
            },
            icon: o.j9r,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: p.rightButtons,
          children: [(0, r.jsx)(o.Text, {
            className: p.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: y ? f.intl.string(f.t.arAe3N) : f.intl.string(f.t.D0CVAQ)
          }), (0, r.jsx)(o.zxk, {
            variant: "primary",
            size: "md",
            text: "".concat(f.intl.string(f.t["8SuVoK"]), " \uD83C\uDF89"),
            onClick: I,
            disabled: !y
          })]
        })]
      })]
    })
  })
}