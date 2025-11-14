/** Chunk was on 34740 **/
/** chunk id: 819349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function v(e) {
  let {
    channel: t,
    onClose: n
  } = e, l = r.useRef(null), [v, _] = r.useState(false), x = r.useRef(null), j = r.useRef(null), [O, E] = r.useState(0), S = (0, o.e7)([h.Z], () => h.Z.can(g.Plq.CREATE_INSTANT_INVITE, t), [t]), [P, I] = r.useState(null), Z = r.useRef(null), {
    isHoveringOrFocusing: T
  } = (0, m.Tu)(null == P ? Z : l), [N, A] = r.useState(false), w = T || N, M = r.useCallback(() => {
    _(false), null == n || n()
  }, [n]), R = r.useCallback(() => (null != x.current && clearTimeout(x.current), x.current = setTimeout(M, 1e4), E(e => e + 1), () => {
    null != x.current && clearTimeout(x.current)
  }), [M]), L = r.useCallback(() => (null != j.current && clearTimeout(j.current), j.current = setTimeout(() => {
    _(false)
  }, 150), () => {
    null != j.current && clearTimeout(j.current)
  }), []);
  (0, d.ZP)(R), r.useEffect(() => {
    if (!w) {
      R(), L();
      return
    }
    null != x.current && clearTimeout(x.current), null != j.current && clearTimeout(j.current), _(true)
  }, [w, R, L]), r.useEffect(() => {
    !async function() {
      var e, n, i;
      let r = null != (e = p.Z.getInvite(t.id, {})) ? e : null;
      if (null === r) {
        if (!S) return;
        try {
          await u.ZP.createInvite(t.id, {}, "VoiceInviteSuggestionsButton")
        } catch (e) {
          return
        }
        r = null != (n = p.Z.getInvite(t.id, {})) ? n : null
      }
      I(null != (i = null == r ? true : r.code) ? i : null)
    }()
  }, [S, t.id]);
  let k = r.useCallback(() => {
      _(true)
    }, []),
    D = r.useCallback(() => {
      _(false), A(false)
    }, []);
  return null == P ? null : (0, i.jsx)(c.yRy, {
    targetElementRef: l,
    shouldShow: v,
    position: "right",
    align: "top",
    spacing: 8,
    popoutKey: "voice-invite-suggestions-button",
    renderPopout: e => (0, i.jsx)(f.B, function(e) {
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
    }({
      channel: t,
      inviteKey: P,
      onHoverOrFocus: A
    }, e)),
    onRequestOpen: k,
    onRequestClose: D,
    children: e => (0, i.jsx)(c.P3F, {
      innerRef: l,
      className: a()(y.clickable, C.voiceUser, C.userSmall, C.clickable),
      onClick: () => M(),
      "aria-label": b.intl.string(b.t.F3qiJr),
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      children: (0, i.jsxs)("div", {
        className: a()(y.content, C.content),
        children: [(0, i.jsxs)("div", {
          className: y.leading,
          style: {
            "--custom-voice-invite-suggestions-timer-size": 24
          },
          children: [(0, i.jsxs)("svg", {
            className: a()(y.timer, {
              [y.paused]: w
            }),
            viewBox: "0 0 ".concat(24, " ").concat(24),
            style: {
              "--custom-voice-invite-suggestions-timer-duration": 1e4
            },
            children: [(0, i.jsx)("circle", {
              className: y.progress
            }), (0, i.jsx)("circle", {
              className: y.ring
            })]
          }, "voice-invite-suggestions-timer-".concat(O)), (0, i.jsx)(c.oLu, {
            size: "custom",
            width: 14,
            height: 14,
            color: "currentColor",
            className: a()(y.userIcon, y.icon)
          })]
        }), (0, i.jsx)(s.u, {
          text: b.intl.string(b.t["EE+P0H"]),
          overflowOnly: true,
          children: (0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            className: y.label,
            lineClamp: 1,
            children: b.intl.string(b.t["EE+P0H"])
          })
        }), T ? (0, i.jsx)(c.Dio, {
          size: "xs",
          color: "currentColor",
          className: y.icon
        }) : (0, i.jsx)(c.Fbu, {
          size: "xs",
          color: "currentColor",
          className: y.icon
        })]
      })
    })
  })
}