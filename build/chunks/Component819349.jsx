/** Chunk was on 34740 **/
/** chunk id: 819349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
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
  Chunk108426 = require("./108426.js"),
  Chunk368736 = require("./368736.js");

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
let O = e => 1 - Math.pow(1 - e, 4);

function x(e) {
  let {
    channel: t,
    onClose: n
  } = e, l = r.useRef(null), [x, j] = r.useState(false), E = r.useRef(null), S = r.useRef(null), [P, I] = r.useState(0), Z = (0, s.e7)([f.Z], () => f.Z.can(b.Plq.CREATE_INSTANT_INVITE, t), [t]), [T, N] = r.useState(null), [A, w] = r.useState(false), M = r.useRef(null), {
    isHoveringOrFocusing: R
  } = (0, g.Tu)(null == T ? M : l), [L, D] = r.useState(false), k = R || L, U = r.useCallback(() => {
    j(false), null == n || n()
  }, [n]), F = (0, u.q_F)({
    from: {
      height: "0px"
    },
    to: {
      height: "".concat(32, "px")
    },
    reverse: A,
    config: {
      duration: 200,
      easing: O,
      clamp: true
    },
    onRest: () => {
      A && U()
    }
  }), B = r.useCallback(() => {
    w(true)
  }, []), H = r.useCallback(() => (null != E.current && clearTimeout(E.current), E.current = setTimeout(B, 1e4), I(e => e + 1), () => {
    null != E.current && clearTimeout(E.current)
  }), [B]), V = r.useCallback(() => (null != S.current && clearTimeout(S.current), S.current = setTimeout(() => {
    j(false)
  }, 150), () => {
    null != S.current && clearTimeout(S.current)
  }), []);
  (0, p.ZP)(H), r.useEffect(() => {
    if (!k) {
      H(), V();
      return
    }
    null != E.current && clearTimeout(E.current), null != S.current && clearTimeout(S.current), j(true)
  }, [k, H, V]), r.useEffect(() => {
    !async function() {
      var e, n, i;
      let r = null != (e = h.Z.getInvite(t.id, {})) ? e : null;
      if (null === r) {
        if (!Z) return;
        try {
          await d.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton")
        } catch (e) {
          return
        }
        r = null != (n = h.Z.getInvite(t.id, {})) ? n : null
      }
      N(null != (i = null == r ? true : r.code) ? i : null)
    }()
  }, [Z, t.id]);
  let G = r.useCallback(() => {
      j(true)
    }, []),
    z = r.useCallback(() => {
      j(false), D(false)
    }, []);
  return null == T ? null : (0, i.jsx)(u.yRy, {
    targetElementRef: l,
    shouldShow: x,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, i.jsx)(m.B, _({
      channel: t,
      inviteKey: T,
      onHoverOrFocus: D
    }, e)),
    onRequestOpen: G,
    onRequestClose: z,
    children: e => {
      var t, n;
      return (0, i.jsx)(o.animated.div, {
        className: C.animation,
        style: F,
        children: (0, i.jsx)(u.P3F, (t = _({
          innerRef: l,
          className: a()({
            [C.clickable]: !A
          }, v.voiceUser, v.userSmall, v.clickable),
          "aria-disabled": A,
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
              }, "voice-invite-suggestions-timer-".concat(P)), (0, i.jsx)(u.oLu, {
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
            }), R ? (0, i.jsx)(u.P3F, {
              className: C.close,
              onClick: B,
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