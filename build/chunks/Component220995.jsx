/** Chunk was on 1113 **/
/** chunk id: 220995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk778768 = require("./778768.jsx"),
  Chunk582904 = require("./582904.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk430023 = require("./430023.js"),
  Chunk77615 = require("./77615.js");

function v(e) {
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
let E = e => 1 - Math.pow(1 - e, 4);

function C(e) {
  let {
    channel: t,
    onClose: n
  } = e, i = l.useRef(null), [C, S] = l.useState(false), I = l.useRef(null), N = l.useRef(null), [T, P] = l.useState(0), {
    analyticsLocations: w
  } = (0, g.Ay)(p.A.VOICE_INVITE_SUGGESTIONS);
  (0, f.A)({
    name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
    type: o.ImpressionTypes.VIEW,
    properties: {
      voice_channel_id: t.id,
      voice_guild_id: t.guild_id,
      location_stack: w
    }
  });
  let R = (0, c.bG)([m.A], () => m.A.can(O.xBc.CREATE_INSTANT_INVITE, t), [t]),
    [D, L] = l.useState(false),
    [M, G] = l.useState("unknown"),
    k = l.useRef(null),
    {
      isHoveringOrFocusing: U
    } = (0, y.L7)(R ? i : k),
    [V, B] = l.useState(false),
    H = U || V,
    F = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      b.default.track(O.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
        reason: e,
        channel_id: t.id,
        guild_id: t.guild_id,
        location_stack: w
      }), S(false), null == n || n()
    }, [t, n, w]),
    K = (0, d.zhh)({
      from: {
        height: "0px"
      },
      to: {
        height: "".concat(32, "px")
      },
      reverse: D,
      config: {
        duration: 200,
        easing: E,
        clamp: true
      },
      onRest: () => {
        D && F(M)
      }
    }),
    Y = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "unknown";
      L(true), G(e)
    }, []),
    W = l.useCallback(() => (null != I.current && clearTimeout(I.current), I.current = setTimeout(() => Y("timeout"), 1e4), P(e => e + 1), () => {
      null != I.current && clearTimeout(I.current)
    }), [Y]),
    z = l.useCallback(() => (null != N.current && clearTimeout(N.current), N.current = setTimeout(() => {
      S(false)
    }, 150), () => {
      null != N.current && clearTimeout(N.current)
    }), []);
  (0, h.Ay)(W), l.useEffect(() => {
    if (!H) {
      W(), z();
      return
    }
    null != I.current && clearTimeout(I.current), null != N.current && clearTimeout(N.current), S(true)
  }, [H, W, z]);
  let q = l.useCallback(() => {
      S(true)
    }, []),
    X = l.useCallback(() => {
      S(false), B(false)
    }, []);
  return R ? (0, r.jsx)(d.YNO, {
    targetElementRef: i,
    shouldShow: C,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, r.jsx)(A.w, v({
      channel: t,
      onHoverOrFocus: B
    }, e)),
    onRequestOpen: q,
    onRequestClose: X,
    children: e => {
      var t, n;
      return (0, r.jsx)(a.animated.div, {
        className: j.lY,
        style: K,
        children: (0, r.jsx)(d.DUT, (t = v({
          innerRef: i,
          className: s()({
            [j.vk]: !D
          }, x.q7, x.L9, x.vk),
          "aria-disabled": D,
          "aria-label": _.intl.string(_.t.F3qiJr)
        }, e), n = n = {
          children: (0, r.jsxs)("div", {
            className: s()(j.Qs, x.Qs),
            children: [(0, r.jsxs)("div", {
              className: j.R4,
              style: {
                "--custom-voice-invite-suggestions-timer-size": 24
              },
              children: [(0, r.jsxs)("svg", {
                className: s()(j.O1, {
                  [j.Ft]: H
                }),
                viewBox: "0 0 ".concat(24, " ").concat(24),
                style: {
                  "--custom-voice-invite-suggestions-timer-duration": 1e4
                },
                children: [(0, r.jsx)("circle", {
                  className: j.qB
                }), (0, r.jsx)("circle", {
                  className: j.hN
                })]
              }, "voice-invite-suggestions-timer-".concat(T)), (0, r.jsx)(d.Rvf, {
                size: "custom",
                width: 14,
                height: 14,
                color: "currentColor",
                className: s()(j.Hk, j.Kk)
              })]
            }), (0, r.jsx)(u.m_, {
              text: _.intl.string(_.t["EE+P0H"]),
              overflowOnly: true,
              children: (0, r.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: j.Pf,
                lineClamp: 1,
                children: _.intl.string(_.t["EE+P0H"])
              })
            }), U ? (0, r.jsx)(d.DUT, {
              className: j.VN,
              onClick: () => Y("user_explicit"),
              "aria-label": _.intl.string(_.t.cpT0Cq),
              children: (0, r.jsx)(d.PGe, {
                size: "xs",
                color: "currentColor",
                className: j.Kk
              })
            }) : (0, r.jsx)(d._BQ, {
              size: "xs",
              color: "currentColor",
              className: j.Kk
            })]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }
  }) : null
}