/** Chunk was on 82158 **/
r.d(t, {
  Z: () => C,
  p: () => O
}), r(47120);
var n, l = r(200651),
  i = r(192379),
  a = r(120356),
  s = r.n(a),
  o = r(642128),
  c = r(442837),
  u = r(481060),
  d = r(393238),
  f = r(434650),
  m = r(607070),
  p = r(594174),
  h = r(5192),
  g = r(603368),
  x = r(856682),
  j = r(284019),
  v = r(388032),
  b = r(456430);

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
var O = ((n = {}).LEFT = "left", n.RIGHT = "right", n);
let C = i.memo(function(e) {
  let {
    guildId: t,
    primaryColor: r,
    children: n,
    canSignCharter: a = !0,
    signed: O,
    onSignCharter: C,
    animationDelayMs: w = 1e3,
    signHintButtonText: N,
    signHintHelperText: P,
    signHintPosition: S = "left",
    className: Z,
    fullHeight: T,
    showDisclaimer: D
  } = e, E = i.useRef(null), H = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == C || C(!O)
  }, [C, O]), [k, _] = i.useState(!1), [M, A] = i.useState(!1), B = i.useRef(null), R = i.useCallback(e => {
    e && (B.current = setTimeout(() => {
      A(!0)
    }, w))
  }, [w]), I = (0, f.O)(R), F = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), V = (0, c.e7)([p.default], () => p.default.getCurrentUser()), [W, G] = (0, u.q_F)(() => "left" === S ? {
    right: 68 * !!F,
    config: o.config.stiff
  } : {
    left: 68 * !!F,
    config: o.config.stiff
  }), [L, z] = (0, u.q_F)(() => ({
    opacity: 0,
    top: -24,
    onRest: () => {
      O && _(!0)
    }
  })), Y = {
    animateFade: z,
    animateExpand: G
  }, U = i.useRef(Y);
  i.useEffect(() => {
    U.current = Y
  }), i.useEffect(() => {
    let {
      animateFade: e,
      animateExpand: t
    } = U.current;
    M && (t(y({}, "left" === S ? {
      right: 68,
      config: o.config.stiff
    } : {
      left: 280,
      config: o.config.stiff
    })), e({
      opacity: 1,
      top: -24
    })), M && O && e({
      opacity: 0,
      top: 0
    })
  }, [M, O, S]), i.useEffect(() => () => {
    null != B.current && clearTimeout(B.current)
  }, []);
  let q = s()(b.signHintAnimationContainer, k && b.noDisplay, "left" === S ? b.signTextLeft : b.signTextRight),
    X = (0, u.dQu)(u.TVs.colors.BG_SURFACE_OVERLAY),
    Q = (0, u.dQu)(u.TVs.colors.BG_BRAND),
    J = null != r ? r : Q.hex(),
    K = (0, g.j1)(J, X.hex()),
    {
      height: $ = 87,
      ref: ee
    } = (0, d.Z)(a),
    et = (0, u.Yzy)(a, {
      from: {
        opacity: 0,
        translateY: $
      },
      enter: {
        opacity: 1,
        translateY: 0
      },
      config: o.config.stiff
    });
  return (0, l.jsx)("div", {
    className: s()(b.container, Z),
    ref: I,
    children: (0, l.jsx)(x.Z, {
      fullHeight: T,
      children: (0, l.jsxs)("div", {
        className: s()(b.overviewSidebarWrapper, T && b.fullHeight),
        children: [(0, l.jsx)(u.u2D, {
          fade: !0,
          className: b.overviewSidebarContent,
          children: (0, l.jsx)("div", {
            className: b.scrollContentContainer,
            children: n
          })
        }), et((e, r) => r && (0, l.jsx)(o.animated.div, {
          className: b.signatureBlockContainer,
          style: e,
          children: (0, l.jsx)("div", {
            ref: ee,
            children: (0, l.jsxs)("div", {
              className: b.signatureBlock,
              children: [(0, l.jsx)("div", {
                ref: E,
                className: b.signHintContainer,
                children: (0, l.jsxs)(o.animated.div, {
                  className: q,
                  style: y({}, W, L),
                  children: [(0, l.jsx)("div", {
                    className: b.signContainerButton,
                    children: (0, l.jsxs)(j.Z, {
                      themeColor: J,
                      className: b.signButton,
                      size: u.zxk.Sizes.SMALL,
                      onClick: e => {
                        var t;
                        null === (t = E.current) || void 0 === t || t.scrollIntoView({
                          behavior: "smooth"
                        }), H(e)
                      },
                      children: [(0, l.jsx)("div", {
                        className: s()(b.signCarot, {
                          [b.signCarotCustomColors]: null != K
                        }),
                        style: null != K ? K : {
                          borderColor: J
                        }
                      }), null != N ? N : v.NW.string(v.t.ySpZ9P)]
                    })
                  }), (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: b.signHintHelperText,
                    children: null != P ? N : v.NW.string(v.t.Pwzyy8)
                  }), D && (0, l.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: b.signHintHelperText,
                    children: v.NW.format(v.t.msDbmZ, {})
                  })]
                })
              }), (0, l.jsxs)(u.P3F, {
                onClick: H,
                className: s()(b.signatureContainer, {
                  [b.clickable]: null != C
                }),
                children: [(0, l.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: "none",
                  children: "x"
                }), O ? (0, l.jsx)(u.Text, {
                  variant: "text-lg/normal",
                  color: "header-primary",
                  className: b.signatureText,
                  children: h.ZP.getName(t, null, V)
                }) : (0, l.jsx)(u.Text, {
                  variant: "text-lg/normal",
                  color: "none",
                  className: b.signatureText,
                  children: v.NW.string(v.t.RC1D19)
                })]
              })]
            })
          })
        }))]
      })
    })
  })
})