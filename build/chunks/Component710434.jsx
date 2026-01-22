/** Chunk was on 39579 **/
/** chunk id: 710434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function m(e) {
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

function O(e) {
  var t;
  let {
    guild: n,
    prompts: O,
    completeOnboarding: x,
    setCurrentStep: h,
    disableTracking: j,
    previousPromptIndex: v
  } = e, y = i.useRef(null), _ = (0, l.bG)([o.A], () => o.A.getRulesPrompt(n.id)), [A, N] = i.useState(null != (t = null == _ ? true : _.response) && t), [P, E] = i.useState(false), D = (0, l.bG)([o.A], () => o.A.get(n.id)), w = i.useRef(null), S = i.useRef(null), C = i.useCallback(async () => {
    if (null != D && null != _) {
      E(true);
      try {
        await a.Ay.submitVerificationForm(n.id, g(m({}, D), {
          formFields: [g(m({}, _), {
            response: A
          })]
        }))
      } catch (e) {}
      x()
    }
  }, [n.id, D, _, A, x]);

  function I(e) {
    let [t] = e;
    t.isIntersecting && N(true)
  }
  return (i.useEffect(() => {
    let e = new IntersectionObserver(I, {
        root: w.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = S.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [S, w]), null == _) ? null : (0, r.jsx)("div", {
    className: b.J1,
    children: (0, r.jsxs)("div", {
      className: b.mK,
      ref: w,
      children: [(0, r.jsxs)(s.ChK, {
        className: b.gT,
        ref: y,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: p.intl.string(p.t["b1JC+l"])
        }), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: p.intl.string(p.t.prJqwT)
        }), (0, r.jsx)("div", {
          className: b.qE,
          ref: S,
          children: _.values.map((e, t) => (0, r.jsxs)("div", {
            className: b.gJ,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(s.Text, {
              variant: "text-sm/normal",
              className: b.RQ,
              children: d.A.parseGuildVerificationFormRule(e, true, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: b.Lw
      }), (0, r.jsxs)("div", {
        className: b.N3,
        children: [(0, r.jsx)("div", {
          className: b.X1,
          children: false !== v && "cover" !== v && (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: p.intl.string(p.t["13/7kX"]),
            onClick: () => {
              !j && (u.default.track(f.HAw.GUILD_ONBOARDING_STEP_COMPLETED, g(m({}, (0, c.H$)(n.id)), {
                step: false,
                skipped: false,
                back: true,
                options_selected: 0,
                in_onboarding: true,
                is_final_step: false
              })), "number" == typeof v && v >= 0 && u.default.track(f.HAw.GUILD_ONBOARDING_STEP_VIEWED, g(m({}, (0, c.H$)(n.id)), {
                step: v,
                required: O[v].required
              }))), h(v)
            },
            icon: s.Zge,
            iconPosition: "start"
          })
        }), (0, r.jsxs)("div", {
          className: b.Oh,
          children: [(0, r.jsx)(s.Text, {
            className: b.BK,
            variant: "text-xs/normal",
            color: "text-muted",
            children: A ? p.intl.string(p.t.arAe3I) : p.intl.string(p.t.D0CVAc)
          }), (0, r.jsx)(s.Button, {
            variant: "primary",
            size: "md",
            text: "".concat(p.intl.string(p.t["8SuVoE"]), " \uD83C\uDF89"),
            onClick: C,
            disabled: !A || P,
            loading: P
          })]
        })]
      })]
    })
  })
}