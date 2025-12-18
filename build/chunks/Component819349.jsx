/** Chunk was on 40184 **/
/** chunk id: 819349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk236726 = require("./236726.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk415397 = require("./415397.jsx"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk165343 = require("./165343.js"),
  Chunk960414 = require("./960414.js");

function j(e) {
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
let S = e => 1 - Math.pow(1 - e, 4);

function _(e) {
  let {
    channel: t,
    onClose: n
  } = e, l = r.useRef(null), [_, P] = r.useState(false), I = r.useRef(null), Z = r.useRef(null), [T, N] = r.useState(0), {
    analyticsLocations: A
  } = (0, h.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS);
  (0, m.Z)({
    name: s.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
    type: s.ImpressionTypes.VIEW,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: A
    }
  });
  let w = (0, c.e7)([g.Z], () => g.Z.can(v.Plq.CREATE_INSTANT_INVITE, t), [t]),
    [M, R] = r.useState(false),
    [D, k] = r.useState("unknown"),
    L = r.useRef(null),
    {
      isHoveringOrFocusing: U
    } = (0, C.Tu)(w ? l : L),
    [V, H] = r.useState(false),
    F = U || V,
    B = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      b.default.track(v.rMx.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
        reason: e,
        channel_id: t.id,
        guild_id: t.guild_id,
        location_stack: A
      }), P(false), null == n || n()
    }, [t, n, A]),
    G = (0, d.q_F)({
      from: {
        height: "0px"
      },
      to: {
        height: "".concat(32, "px")
      },
      reverse: M,
      config: {
        duration: 200,
        easing: S,
        clamp: true
      },
      onRest: () => {
        M && B(D)
      }
    }),
    W = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      R(true), k(e)
    }, []),
    z = r.useCallback(() => (null != I.current && clearTimeout(I.current), I.current = setTimeout(() => W("timeout"), 1e4), N(e => e + 1), () => {
      null != I.current && clearTimeout(I.current)
    }), [W]),
    q = r.useCallback(() => (null != Z.current && clearTimeout(Z.current), Z.current = setTimeout(() => {
      P(false)
    }, 150), () => {
      null != Z.current && clearTimeout(Z.current)
    }), []);
  (0, p.ZP)(z), r.useEffect(() => {
    if (!F) {
      z(), q();
      return
    }
    null != I.current && clearTimeout(I.current), null != Z.current && clearTimeout(Z.current), P(true)
  }, [F, z, q]);
  let K = r.useCallback(() => {
      P(true)
    }, []),
    Y = r.useCallback(() => {
      P(false), H(false)
    }, []);
  return w ? (0, i.jsx)(d.yRy, {
    targetElementRef: l,
    shouldShow: _,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, i.jsx)(y.B, j({
      channel: t,
      onHoverOrFocus: H
    }, e)),
    onRequestOpen: K,
    onRequestClose: Y,
    children: e => {
      var t, n;
      return (0, i.jsx)(o.animated.div, {
        className: O.animation,
        style: G,
        children: (0, i.jsx)(d.P3F, (t = j({
          innerRef: l,
          className: a()({
            [O.clickable]: !M
          }, E.voiceUser, E.userSmall, E.clickable),
          "aria-disabled": M,
          "aria-label": x.intl.string(x.t.F3qiJr)
        }, e), n = n = {
          children: (0, i.jsxs)("div", {
            className: a()(O.content, E.content),
            children: [(0, i.jsxs)("div", {
              className: O.leading,
              style: {
                "--custom-voice-invite-suggestions-timer-size": 24
              },
              children: [(0, i.jsxs)("svg", {
                className: a()(O.timer, {
                  [O.paused]: F
                }),
                viewBox: "0 0 ".concat(24, " ").concat(24),
                style: {
                  "--custom-voice-invite-suggestions-timer-duration": 1e4
                },
                children: [(0, i.jsx)("circle", {
                  className: O.progress
                }), (0, i.jsx)("circle", {
                  className: O.ring
                })]
              }, "voice-invite-suggestions-timer-".concat(T)), (0, i.jsx)(d.oLu, {
                size: "custom",
                width: 14,
                height: 14,
                color: "currentColor",
                className: a()(O.userIcon, O.icon)
              })]
            }), (0, i.jsx)(u.u, {
              text: x.intl.string(x.t["EE+P0H"]),
              overflowOnly: true,
              children: (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: O.label,
                lineClamp: 1,
                children: x.intl.string(x.t["EE+P0H"])
              })
            }), U ? (0, i.jsx)(d.P3F, {
              className: O.close,
              onClick: () => W("user_explicit"),
              "aria-label": x.intl.string(x.t.cpT0Cq),
              children: (0, i.jsx)(d.Dio, {
                size: "xs",
                color: "currentColor",
                className: O.icon
              })
            }) : (0, i.jsx)(d.Fbu, {
              size: "xs",
              color: "currentColor",
              className: O.icon
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
  }) : null
}