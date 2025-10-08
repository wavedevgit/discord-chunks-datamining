/** Chunk was on 1272 **/
/** chunk id: 848543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk582019 = require("./582019.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk706140 = require("./706140.js"),
  Chunk294629 = require("./294629.js"),
  Chunk131951 = require("./131951.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk242291 = require("./242291.js"),
  Chunk792165 = require("./792165.jsx"),
  Chunk603074 = require("./603074.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239545 = require("./239545.js");

function j(e) {
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

function P(e, t) {
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

function x(e) {
  var {
    channel: t
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["channel"]);
  let x = i.useRef(null),
    {
      mute: A,
      suppress: Z
    } = (0, _.Z)(t),
    w = (0, o.e7)([O.Z], () => O.Z.isDeaf()),
    L = A || Z || w,
    [R, D] = i.useState(false),
    k = t.getGuildId(),
    M = (0, y.sR)({
      isSoundboardButtonDisabled: L
    }),
    [U, G] = (0, b.cv)(M),
    {
      analyticsLocations: B,
      parentAnalyticsLocation: H
    } = (0, h.ZP)(f.Z.SOUNDBOARD_BUTTON);

  function V(e) {
    null != k && (0, p.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, P(j({
        guildId: k,
        sourceAnalyticsLocations: B
      }, t), {
        onInteraction: (0, m.u)("SoundboardContextMenu", f.Z.RTC_PANEL)
      }))
    })
  }
  let {
    Component: F,
    play: z,
    events: {
      onMouseEnter: W,
      onMouseLeave: q
    }
  } = (0, c.j)(), Y = i.useCallback(() => {
    L || D(!R)
  }, [L, R]);
  return (0, E.yp)({
    event: S.CkL.TOGGLE_SOUNDBOARD,
    handler: Y
  }), (0, r.jsx)(h.Gt, {
    value: B,
    children: (0, r.jsx)(d.ua7, {
      targetElementRef: x,
      text: A ? T.intl.string(T.t["Ox4/zc"]) : Z ? T.intl.string(T.t["+YBKYG"]) : w ? T.intl.string(T.t.X1lQlp) : T.intl.string(T.t["6EJvHh"]),
      children: e => (0, r.jsx)(d.yRy, {
        targetElementRef: x,
        animation: d.yRy.Animation.FADE,
        shouldShow: R,
        position: "top",
        onRequestClose: () => D(false),
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(I.Z, {
            guildId: k,
            channel: t,
            onClose: n,
            gridNotice: U === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(v.o, {
              onClose: n,
              markAsDismissed: G
            }),
            analyticsSource: "rtc panel"
          })
        },
        children: t => (0, r.jsx)("div", {
          ref: x,
          children: (0, r.jsx)(u.zx, P(j(P(j({
            "data-migration-pending": true
          }, e, t), {
            className: a()(N.button, N.buttonColor, {
              [N.greyButtonActive]: R,
              [N.disabled]: L
            }),
            wrapperClassName: N.button,
            innerClassName: N.buttonContents,
            disabled: L,
            onClick: () => {
              var t;
              null != U && U !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(C.L.UNKNOWN), null == e || null == (t = e.onClick) || t.call(e), D(!R), z(), (0, g.v)(H, g.d.SOUNDBOARD)
            },
            onMouseEnter: t => {
              var n, r;
              null == (n = l.onMouseEnter) || n.call(l, t), null == e || null == (r = e.onMouseEnter) || r.call(e), W()
            },
            onMouseLeave: t => {
              var n, r;
              null == (n = l.onMouseLeave) || n.call(l, t), null == e || null == (r = e.onMouseLeave) || r.call(e), q()
            },
            onContextMenu: V,
            fullWidth: true,
            size: u.zx.Sizes.MEDIUM
          }), l), {
            children: (0, r.jsx)(F, {
              className: N.buttonIcon,
              size: "sm",
              color: "currentColor"
            })
          }))
        })
      })
    })
  })
}