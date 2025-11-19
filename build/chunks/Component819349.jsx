/** Chunk was on 71264 **/
/** chunk id: 819349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk493773 = require("./493773.js"),
  Chunk341165 = require("./341165.js"),
  Chunk496675 = require("./496675.js"),
  Chunk415397 = require("./415397.jsx"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214669 = require("./214669.js"),
  Chunk867721 = require("./867721.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function x(e) {
  let {
    channel: t,
    onClose: n
  } = e, l = r.useRef(null), [x, j] = r.useState(false), O = r.useRef(null), E = r.useRef(null), [S, P] = r.useState(0), I = (0, s.e7)([f.Z], () => f.Z.can(b.Plq.CREATE_INSTANT_INVITE, t), [t]), [Z, T] = r.useState(null), [N, A] = r.useState(false), w = r.useRef(null), {
    isHoveringOrFocusing: M
  } = (0, g.Tu)(null == Z ? w : l), [R, L] = r.useState(false), k = M || R, D = r.useCallback(() => {
    j(false), null == n || n()
  }, [n]), U = r.useCallback(() => (null != O.current && clearTimeout(O.current), O.current = setTimeout(D, 1e4), P(e => e + 1), () => {
    null != O.current && clearTimeout(O.current)
  }), [D]), B = r.useCallback(() => (null != E.current && clearTimeout(E.current), E.current = setTimeout(() => {
    j(false)
  }, 150), () => {
    null != E.current && clearTimeout(E.current)
  }), []);
  (0, p.ZP)(U), r.useEffect(() => {
    if (!k) {
      U(), B();
      return
    }
    null != O.current && clearTimeout(O.current), null != E.current && clearTimeout(E.current), j(true)
  }, [k, U, B]), r.useEffect(() => {
    !async function() {
      var e, n, i;
      let r = null != (e = h.Z.getInvite(t.id, {})) ? e : null;
      if (null === r) {
        if (!I) return;
        try {
          await d.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton")
        } catch (e) {
          return
        }
        r = null != (n = h.Z.getInvite(t.id, {})) ? n : null
      }
      T(null != (i = null == r ? true : r.code) ? i : null)
    }()
  }, [I, t.id]);
  let H = r.useCallback(() => {
      j(true)
    }, []),
    F = r.useCallback(() => {
      j(false), L(false)
    }, []),
    V = (0, u.q_F)({
      from: {
        height: "".concat(0, "px")
      },
      to: {
        height: "".concat(32, "px")
      },
      reverse: N,
      config: {
        mass: 1,
        stiffness: 100,
        damping: 15
      },
      onRest: () => {
        N && D()
      }
    }),
    G = r.useCallback(() => {
      A(true)
    }, []);
  return null == Z ? null : (0, i.jsx)(u.yRy, {
    targetElementRef: l,
    shouldShow: x,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, i.jsx)(m.B, _({
      channel: t,
      inviteKey: Z,
      onHoverOrFocus: L
    }, e)),
    onRequestOpen: H,
    onRequestClose: F,
    children: e => {
      var t, n;
      return (0, i.jsx)(o.animated.div, {
        className: C.animation,
        style: V,
        children: (0, i.jsx)(u.P3F, (t = _({
          innerRef: l,
          className: a()({
            [C.clickable]: !N
          }, v.voiceUser, v.userSmall, v.clickable),
          "aria-disabled": N,
          "aria-label": y.intl.string(y.t.F3qiJr)
        }, e), n = n = {
          children: (0, i.jsxs)("div", {
            className: a()(C.content, v.content),
            children: [(0, i.jsxs)("div", {
              className: C.leading,
              style: {
                "--custom-voice-invite-suggestions-timer-size": 24
              },
              children: [(0, i.jsxs)("svg", {
                className: a()(C.timer, {
                  [C.paused]: k
                }),
                viewBox: "0 0 ".concat(24, " ").concat(24),
                style: {
                  "--custom-voice-invite-suggestions-timer-duration": 1e4
                },
                children: [(0, i.jsx)("circle", {
                  className: C.progress
                }), (0, i.jsx)("circle", {
                  className: C.ring
                })]
              }, "voice-invite-suggestions-timer-".concat(S)), (0, i.jsx)(u.oLu, {
                size: "custom",
                width: 14,
                height: 14,
                color: "currentColor",
                className: a()(C.userIcon, C.icon)
              })]
            }), (0, i.jsx)(c.u, {
              text: y.intl.string(y.t["EE+P0H"]),
              overflowOnly: true,
              children: (0, i.jsx)(u.Text, {
                variant: "text-sm/medium",
                className: C.label,
                lineClamp: 1,
                children: y.intl.string(y.t["EE+P0H"])
              })
            }), M ? (0, i.jsx)(u.P3F, {
              className: C.close,
              onClick: G,
              "aria-label": y.intl.string(y.t.cpT0Cq),
              children: (0, i.jsx)(u.Dio, {
                size: "xs",
                color: "currentColor",
                className: C.icon
              })
            }) : (0, i.jsx)(u.Fbu, {
              size: "xs",
              color: "currentColor",
              className: C.icon
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }
  })
}