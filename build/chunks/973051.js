/** Chunk was on 37709 **/
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(399606),
  i = n(481060),
  s = n(367907),
  a = n(863249),
  c = n(944163),
  d = n(768762),
  u = n(454585),
  m = n(626135),
  h = n(981631),
  p = n(388032),
  x = n(607639);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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

function j(e) {
  var t;
  let {
    guild: n,
    prompts: j,
    completeOnboarding: N,
    setCurrentStep: v,
    disableTracking: b,
    previousPromptIndex: _
  } = e, C = l.useRef(null), O = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)), [E, k] = l.useState(null !== (t = null == O ? void 0 : O.response) && void 0 !== t && t), I = (0, o.e7)([c.Z], () => c.Z.get(n.id)), Z = l.useRef(null), y = l.useRef(null), P = l.useCallback(async () => {
    if (null != I && null != O) {
      try {
        await a.ZP.submitVerificationForm(n.id, g(f({}, I), {
          formFields: [g(f({}, O), {
            response: E
          })]
        }))
      } catch (e) {}
      N()
    }
  }, [n.id, I, O, E, N]);

  function w(e) {
    let [t] = e;
    t.isIntersecting && k(!0)
  }
  return (l.useEffect(() => {
    let e = new IntersectionObserver(w, {
        root: Z.current,
        rootMargin: "0px",
        threshold: 0
      }),
      t = y.current;
    return null != t && null != t.lastElementChild && e.observe(t.lastElementChild), () => {
      null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild)
    }
  }, [y, Z]), null == O) ? null : (0, r.jsx)("div", {
    className: x.prompt,
    children: (0, r.jsxs)("div", {
      className: x.promptContent,
      ref: Z,
      children: [(0, r.jsxs)(i.h21, {
        className: x.scrollerContent,
        ref: C,
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: p.NW.string(p.t["b1JC+v"])
        }), (0, r.jsx)(i.X6q, {
          variant: "heading-xl/semibold",
          children: p.NW.string(p.t.prJqwc)
        }), (0, r.jsx)("div", {
          className: x.termsFieldBody,
          ref: y,
          children: O.values.map((e, t) => (0, r.jsxs)("div", {
            className: x.termsRow,
            children: [(0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "".concat(t + 1, ".")
            }), (0, r.jsx)(i.Text, {
              variant: "text-sm/normal",
              className: x.termsRowContent,
              children: u.Z.parseGuildVerificationFormRule(e, !0, {
                channelId: n.rulesChannelId
              })
            })]
          }, "term-".concat(t)))
        })]
      }), (0, r.jsx)("div", {
        className: x.overlay
      }), (0, r.jsxs)("div", {
        className: x.navButtons,
        children: [(0, r.jsx)("div", {
          className: x.leftButtons,
          children: -1 !== _ && (0, r.jsxs)(i.zxk, {
            innerClassName: x.buttonInner,
            onClick: () => {
              !b && (m.default.track(h.rMx.GUILD_ONBOARDING_STEP_COMPLETED, g(f({}, (0, s.hH)(n.id)), {
                step: -1,
                skipped: !1,
                back: !0,
                options_selected: 0,
                in_onboarding: !0,
                is_final_step: !1
              })), _ >= 0 && m.default.track(h.rMx.GUILD_ONBOARDING_STEP_VIEWED, g(f({}, (0, s.hH)(n.id)), {
                step: _,
                required: j[_].required
              }))), v(_)
            },
            size: i.zxk.Sizes.MEDIUM,
            look: i.zxk.Looks.OUTLINED,
            grow: !1,
            color: i.zxk.Colors.PRIMARY,
            children: [(0, r.jsx)(d.Z, {
              className: x.arrow,
              direction: d.Z.Directions.LEFT
            }), p.NW.string(p.t["13/7kZ"])]
          })
        }), (0, r.jsxs)("div", {
          className: x.rightButtons,
          children: [(0, r.jsx)(i.Text, {
            className: x.helpText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: E ? p.NW.string(p.t.arAe3N) : p.NW.string(p.t.D0CVAQ)
          }), (0, r.jsxs)(i.zxk, {
            innerClassName: x.buttonInner,
            onClick: P,
            disabled: !E,
            size: i.zxk.Sizes.MEDIUM,
            look: i.zxk.Looks.FILLED,
            grow: !1,
            color: i.zxk.Colors.BRAND,
            children: [p.NW.string(p.t["8SuVoK"]), (0, r.jsx)("span", {
              className: x.finishEmoji,
              role: "img",
              "aria-hidden": !0,
              children: "\uD83C\uDF89"
            })]
          })]
        })]
      })]
    })
  })
}