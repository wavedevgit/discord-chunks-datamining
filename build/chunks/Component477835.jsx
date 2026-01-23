/** Chunk was on 21738 **/
/** chunk id: 477835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk621956 = require("./621956.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk160761 = require("./160761.js"),
  Chunk173660 = require("./173660.js"),
  Chunk430452 = require("./430452.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk536432 = require("./536432.js"),
  Chunk674168 = require("./674168.jsx"),
  Chunk989799 = require("./989799.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk255259 = require("./255259.js");

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

function P(e) {
  let {
    channel: t
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["channel"]), P = i.useRef(null), {
    mute: w,
    suppress: L
  } = (0, b.A)(t), R = (0, s.bG)([E.A], () => E.A.isDeaf()), D = w || L || R, [M, k] = i.useState(false), U = t.getGuildId(), G = (0, y.VE)({
    isSoundboardButtonDisabled: D
  }), [V, B] = (0, _.DP)(G), {
    analyticsLocations: H,
    parentAnalyticsLocation: F
  } = (0, f.Ay)(g.A.SOUNDBOARD_BUTTON);

  function Y(e) {
    null != U && (0, h.L3)(e, async () => {
      let {
        default: e
      } = await n.e("51111").then(n.bind(n, 323002));
      return t => (0, r.jsx)(e, x(j({
        guildId: U,
        sourceAnalyticsLocations: H
      }, t), {
        onInteraction: (0, A.s)("SoundboardContextMenu", g.A.RTC_PANEL)
      }))
    })
  }
  let {
    Component: K,
    play: W,
    events: {
      onMouseEnter: q,
      onMouseLeave: z
    }
  } = (0, c.E)(), Q = i.useCallback(() => {
    D || k(!M)
  }, [D, M]);
  return (0, O.Vo)({
    event: S.jej.TOGGLE_SOUNDBOARD,
    handler: Q
  }), (0, r.jsx)(f.f5, {
    value: H,
    children: (0, r.jsx)(u.m, {
      targetElementRef: P,
      text: w ? N.intl.string(N.t["Ox4/zU"]) : L ? N.intl.string(N.t["+YBKYI"]) : R ? N.intl.string(N.t.X1lQli) : N.intl.string(N.t["6EJvHt"]),
      asContainer: true,
      shouldShow: !M,
      children: (0, r.jsx)(p.YNO, {
        targetElementRef: P,
        animation: p.YNO.Animation.FADE,
        shouldShow: M,
        position: "top",
        onRequestClose: () => k(false),
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(v.A, {
            guildId: U,
            channel: t,
            onClose: n,
            gridNotice: V === o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(I.m, {
              onClose: n,
              markAsDismissed: B
            }),
            analyticsSource: "rtc panel"
          })
        },
        children: e => (0, r.jsx)("div", {
          ref: P,
          children: (0, r.jsx)(d.$n, x(j(x(j({
            "data-migration-pending": true
          }, e), {
            className: a()(T.x6, T.Sq, {
              [T.W4]: M,
              [T.r9]: D
            }),
            wrapperClassName: T.x6,
            innerClassName: T.bk,
            disabled: D,
            onClick: () => {
              null != V && V !== o.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && B(C.i.UNKNOWN), k(!M), W(), (0, m.X)(F, m.O.SOUNDBOARD)
            },
            onMouseEnter: e => {
              var t;
              null == (t = l.onMouseEnter) || t.call(l, e), q()
            },
            onMouseLeave: e => {
              var t;
              null == (t = l.onMouseLeave) || t.call(l, e), z()
            },
            onContextMenu: Y,
            fullWidth: true,
            size: d.$n.Sizes.MEDIUM
          }), l), {
            children: (0, r.jsx)(K, {
              className: T.iA,
              size: "sm",
              color: "currentColor"
            })
          }))
        })
      })
    })
  })
}