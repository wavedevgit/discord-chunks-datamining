/** Chunk was on 39579 **/
/** chunk id: 710434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk408213 = require("./408213.js"),
  Chunk60175 = require("./60175.js"),
  Chunk46054 = require("./46054.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22941 = require("./22941.js");

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

function b(e, t) {
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

function _(e) {
  var t;
  let {
    guild: n,
    prompts: _,
    completeOnboarding: h,
    setCurrentStep: x,
    disableTracking: O,
    previousPromptIndex: v
  } = e, j = i.useRef(null), y = (0, l.bG)([c.A], () => c.A.getRulesPrompt(n.id)), [A, N] = i.useState(null != (t = null == y ? true : y.response) && t), [P, E] = i.useState(false), w = (0, l.bG)([c.A], () => c.A.get(n.id)), D = i.useRef(null), C = i.useRef(null), S = i.useCallback(async () => {
    if (null != w && null != y) {
      E(true);
      try {
        await a.Ay.submitVerificationForm(n.id, b(g({}, w), {
          formFields: [b(g({}, y), {
            response: A
          })]
        }))
      } catch (e) {}
      h()
    }
  }, [n.id, w, y, A, h]);

  function I(e) {
    let [t] = e;
    t.isIntersecting && N(true)
  }
  return (i.useEffect(() => {
    let e = new IntersectionObserver(I, {
        root: D.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = C.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [C, D]), null == y) ? null : (0, r.jsx)("div", {
    className: m.J1,
    children: (0, r.jsxs)("div", {
      className: m.mK,
      ref: D,
      children: [(0, r.jsxs)(s.ChK, {
        className: m.gT,
        ref: j,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: f.intl.string(f.t["b1JC+l"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: f.intl.string(f.t.prJqwT)
        }), (0, r.jsx)("div", {
          className: m.qE,
          ref: C,
          children: y.values.map((e, t) => (0, r.jsxs)("div", {
            className: m.gJ,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              className: m.RQ,
              children: d.A.parseGuildVerificationFormRule(e, true, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: m.Lw
      }), (0, r.jsxs)("div", {
        className: m.N3,
        children: [(0, r.jsx)("div", {
          className: m.X1,
          children: false !== v && "cover" !== v && (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: f.intl.string(f.t["13/7kX"]),
            onClick: () => {
              !O && (u.default.track(p.HAw.GUILD_ONBOARDING_STEP_COMPLETED, b(g({}, (0, o.H$)(n.id)), {
                step: false,
                skipped: false,
                back: true,
                options_selected: 0,
                in_onboarding: true,
                is_final_step: false
              })), "number" == typeof v && v >= 0 && u.default.track(p.HAw.GUILD_ONBOARDING_STEP_VIEWED, b(g({}, (0, o.H$)(n.id)), {
                step: v,
                required: _[v].required
              }))), x(v)
            },
            icon: s.Zge,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: m.Oh,
          children: [(0, r.jsx)(s.Text, {
            className: m.BK,
            variant: "text-xs/normal",
            color: "text-muted",
            children: A ? f.intl.string(f.t.arAe3I) : f.intl.string(f.t.D0CVAc)
          }), (0, r.jsx)(s.Button, {
            variant: "primary",
            size: "md",
            text: "".concat(f.intl.string(f.t["8SuVoE"]), " \uD83C\uDF89"),
            onClick: S,
            disabled: !A || P,
            loading: P
          })]
        })]
      })]
    })
  })
}