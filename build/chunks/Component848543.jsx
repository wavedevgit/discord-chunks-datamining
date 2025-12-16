/** Chunk was on 1272 **/
/** chunk id: 848543, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk582019 = require("./582019.jsx"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk424126 = require("./424126.js");

function P(e) {
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

function x(e, t) {
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

function A(e) {
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
  let A = i.useRef(null),
    {
      mute: Z,
      suppress: w
    } = (0, E.Z)(t),
    L = (0, o.e7)([O.Z], () => O.Z.isDeaf()),
    R = Z || w || L,
    [D, M] = i.useState(false),
    k = t.getGuildId(),
    U = (0, y.sR)({
      isSoundboardButtonDisabled: R
    }),
    [G, H] = (0, _.cv)(U),
    {
      analyticsLocations: B,
      parentAnalyticsLocation: V
    } = (0, h.ZP)(g.Z.SOUNDBOARD_BUTTON);

  function F(e) {
    null != k && (0, f.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, x(P({
        guildId: k,
        sourceAnalyticsLocations: B
      }, t), {
        onInteraction: (0, b.u)("SoundboardContextMenu", g.Z.RTC_PANEL)
      }))
    })
  }
  let {
    Component: z,
    play: Y,
    events: {
      onMouseEnter: W,
      onMouseLeave: q
    }
  } = (0, c.j)(), K = i.useCallback(() => {
    R || M(!D)
  }, [R, D]);
  return (0, v.yp)({
    event: S.CkL.TOGGLE_SOUNDBOARD,
    handler: K
  }), (0, r.jsx)(h.Gt, {
    value: B,
    children: (0, r.jsx)(u.u, {
      targetElementRef: A,
      text: Z ? N.intl.string(N.t["Ox4/zU"]) : w ? N.intl.string(N.t["+YBKYI"]) : L ? N.intl.string(N.t.X1lQli) : N.intl.string(N.t["6EJvHt"]),
      asContainer: true,
      children: (0, r.jsx)(p.yRy, {
        targetElementRef: A,
        animation: p.yRy.Animation.FADE,
        shouldShow: D,
        position: "top",
        onRequestClose: () => M(false),
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(C.Z, {
            guildId: k,
            channel: t,
            onClose: n,
            gridNotice: G === s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(I.o, {
              onClose: n,
              markAsDismissed: H
            }),
            analyticsSource: "rtc panel"
          })
        },
        children: e => (0, r.jsx)("div", {
          ref: A,
          children: (0, r.jsx)(d.zx, x(P(x(P({
            "data-migration-pending": true
          }, e), {
            className: a()(j.button, j.buttonColor, {
              [j.greyButtonActive]: D,
              [j.disabled]: R
            }),
            wrapperClassName: j.button,
            innerClassName: j.buttonContents,
            disabled: R,
            onClick: () => {
              null != G && G !== s.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && H(T.L.UNKNOWN), M(!D), Y(), (0, m.v)(V, m.d.SOUNDBOARD)
            },
            onMouseEnter: e => {
              var t;
              null == (t = l.onMouseEnter) || t.call(l, e), W()
            },
            onMouseLeave: e => {
              var t;
              null == (t = l.onMouseLeave) || t.call(l, e), q()
            },
            onContextMenu: F,
            fullWidth: true,
            size: d.zx.Sizes.MEDIUM
          }), l), {
            children: (0, r.jsx)(z, {
              className: j.buttonIcon,
              size: "sm",
              color: "currentColor"
            })
          }))
        })
      })
    })
  })
}