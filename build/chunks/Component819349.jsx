/** Chunk was on 34740 **/
/** chunk id: 819349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk341165 = require("./341165.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk415397 = require("./415397.jsx"),
  Chunk771027 = require("./771027.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk108426 = require("./108426.js"),
  Chunk368736 = require("./368736.js");

function S(e) {
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
let P = e => 1 - Math.pow(1 - e, 4);

function I(e) {
  let {
    channel: t,
    onClose: n
  } = e, l = r.useRef(null), [I, Z] = r.useState(false), T = r.useRef(null), N = r.useRef(null), [A, w] = r.useState(0), {
    analyticsLocations: M
  } = (0, m.ZP)(f.Z.VOICE_INVITE_SUGGESTIONS);
  (0, g.Z)({
    name: s.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
    type: s.ImpressionTypes.VIEW,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: M
    }
  });
  let R = (0, c.e7)([C.Z], () => C.Z.can(O.Plq.CREATE_INSTANT_INVITE, t), [t]),
    [L, D] = r.useState(null),
    [k, U] = r.useState(false),
    [V, F] = r.useState("unknown"),
    H = r.useRef(null),
    {
      isHoveringOrFocusing: B
    } = (0, _.Tu)(null == L ? H : l),
    [G, z] = r.useState(false),
    W = B || G,
    q = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      y.default.track(O.rMx.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
        reason: e,
        channel_id: t.id,
        guild_id: t.guild_id,
        location_stack: M
      }), Z(false), null == n || n()
    }, [t, n, M]),
    K = (0, d.q_F)({
      from: {
        height: "0px"
      },
      to: {
        height: "".concat(32, "px")
      },
      reverse: k,
      config: {
        duration: 200,
        easing: P,
        clamp: true
      },
      onRest: () => {
        k && q(V)
      }
    }),
    Y = r.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      U(true), F(e)
    }, []),
    X = r.useCallback(() => (null != T.current && clearTimeout(T.current), T.current = setTimeout(() => Y("timeout"), 1e4), w(e => e + 1), () => {
      null != T.current && clearTimeout(T.current)
    }), [Y]),
    J = r.useCallback(() => (null != N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      Z(false)
    }, 150), () => {
      null != N.current && clearTimeout(N.current)
    }), []);
  (0, h.ZP)(X), r.useEffect(() => {
    if (!W) {
      X(), J();
      return
    }
    null != T.current && clearTimeout(T.current), null != N.current && clearTimeout(N.current), Z(true)
  }, [W, X, J]), r.useEffect(() => {
    !async function() {
      var e, n, i;
      let r = null != (e = b.Z.getInvite(t.id, {})) ? e : null;
      if (null === r) {
        if (!R) return;
        try {
          await p.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton")
        } catch (e) {
          return
        }
        r = null != (n = b.Z.getInvite(t.id, {})) ? n : null
      }
      D(null != (i = null == r ? true : r.code) ? i : null)
    }()
  }, [R, t.id]);
  let Q = r.useCallback(() => {
      Z(true)
    }, []),
    $ = r.useCallback(() => {
      Z(false), z(false)
    }, []);
  return null == L ? null : (0, i.jsx)(d.yRy, {
    targetElementRef: l,
    shouldShow: I,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, i.jsx)(v.B, S({
      channel: t,
      inviteKey: L,
      onHoverOrFocus: z
    }, e)),
    onRequestOpen: Q,
    onRequestClose: $,
    children: e => {
      var t, n;
      return (0, i.jsx)(o.animated.div, {
        className: E.animation,
        style: K,
        children: (0, i.jsx)(d.P3F, (t = S({
          innerRef: l,
          className: a()({
            [E.clickable]: !k
          }, j.voiceUser, j.userSmall, j.clickable),
          "aria-disabled": k,
          "aria-label": x.intl.string(x.t.F3qiJr)
        }, e), n = n = {
          children: (0, i.jsxs)("div", {
            className: a()(E.content, j.content),
            children: [(0, i.jsxs)("div", {
              className: E.leading,
              style: {
                "--custom-voice-invite-suggestions-timer-size": 24
              },
              children: [(0, i.jsxs)("svg", {
                className: a()(E.timer, {
                  [E.paused]: W
                }),
                viewBox: "0 0 ".concat(24, " ").concat(24),
                style: {
                  "--custom-voice-invite-suggestions-timer-duration": 1e4
                },
                children: [(0, i.jsx)("circle", {
                  className: E.progress
                }), (0, i.jsx)("circle", {
                  className: E.ring
                })]
              }, "voice-invite-suggestions-timer-".concat(A)), (0, i.jsx)(d.oLu, {
                size: "custom",
                width: 14,
                height: 14,
                color: "currentColor",
                className: a()(E.userIcon, E.icon)
              })]
            }), (0, i.jsx)(u.u, {
              text: x.intl.string(x.t["EE+P0H"]),
              overflowOnly: true,
              children: (0, i.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: E.label,
                lineClamp: 1,
                children: x.intl.string(x.t["EE+P0H"])
              })
            }), B ? (0, i.jsx)(d.P3F, {
              className: E.close,
              onClick: () => Y("user_explicit"),
              "aria-label": x.intl.string(x.t.cpT0Cq),
              children: (0, i.jsx)(d.Dio, {
                size: "xs",
                color: "currentColor",
                className: E.icon
              })
            }) : (0, i.jsx)(d.Fbu, {
              size: "xs",
              color: "currentColor",
              className: E.icon
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