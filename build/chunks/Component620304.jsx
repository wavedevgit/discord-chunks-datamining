/** Chunk was on 91488 **/
/** chunk id: 620304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk667815 = require("./667815.js"),
  Chunk531572 = require("./531572.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk538445 = require("./538445.jsx"),
  Chunk639777 = require("./639777.js"),
  Chunk495804 = require("./495804.js"),
  Chunk441536 = require("./441536.js"),
  Chunk921944 = require("./921944.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk931942 = require("./931942.js");

function S(e) {
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

function I(e) {
  let {
    guild: t,
    tooltipTypes: l,
    withMargin: I
  } = e, N = (0, _.Z)(t, "GuildPowerupsProgressBar"), Z = (0, y.Z)(t.id), w = i.useCallback(() => {
    (0, v.Z)(t.id, h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY)
  }, [t.id]), T = (0, c.e7)([m.Z], () => {
    var e;
    return null != (e = m.Z.getCountForGuild(t.id)) ? e : 0
  });
  i.useEffect(() => {
    T !== t.premiumSubscriberCount && (0, g.v)(t.id, t.premiumSubscriberCount)
  }, [t.id, T, t.premiumSubscriberCount]);
  let A = Math.min(T / N * 100, 100),
    [R, D] = (0, d.q_F)(() => ({
      width: T === t.premiumSubscriberCount ? "calc(".concat(A, "% - 4px)") : "0%",
      config: {
        tension: 250,
        damping: 5,
        mass: 1
      }
    }), "respect-motion-settings", [T, t.premiumSubscriberCount]);
  i.useEffect(() => {
    D({
      width: "calc(".concat(A, "% - 4px)")
    })
  }, [A, D]);
  let M = T >= N,
    L = i.useRef(null),
    [k, U] = (0, f.US)(l),
    G = e => (0, r.jsx)(d.P3F, P(S({}, e), {
      "aria-label": true,
      role: "button",
      focusProps: {
        offset: {
          left: 10,
          right: 4
        }
      },
      onClick: () => {
        var t;
        null == e || null == (t = e.onClick) || t.call(e), w()
      },
      className: o()(E.container, {
        [E.containerWithMargin]: I
      }),
      onContextMenu: e => {
        Z && (0, p.jW)(e, async () => {
          let {
            default: e
          } = await n.e("8570").then(n.bind(n, 651138));
          return n => (0, r.jsx)(e, P(S({}, n), {
            guild: t
          }))
        })
      },
      children: (0, r.jsxs)("div", {
        className: E.contentContainer,
        children: [(0, r.jsx)("div", {
          className: E.progressContainer
        }), (0, r.jsx)(a.animated.div, {
          className: o()(E.progress, {
            [E.progressLow]: A <= 5
          }),
          style: R
        }), (0, r.jsxs)("div", {
          className: E.textContainer,
          children: [(0, r.jsxs)("div", {
            className: E.textContentContainer,
            children: [(0, r.jsx)(s.xv, {
              className: E.text,
              variant: "text-xs/semibold",
              children: C.intl.string(x.default.NI6IhY)
            }), t.premiumSubscriberCount >= N && (0, r.jsx)(s.xv, {
              className: E.text,
              variant: "text-xs/semibold",
              children: "\uD83C\uDF89"
            })]
          }), (0, r.jsxs)("div", {
            className: E.textContentContainer,
            children: [(0, r.jsx)(s.xv, {
              className: o()(E.text, E.boostCountText),
              variant: "text-xs/semibold",
              children: M ? C.intl.formatToPlainString(x.default["Ehpq+/"], {
                appliedBoostCount: T
              }) : C.intl.formatToPlainString(x.default["/rbPDg"], {
                appliedBoostCount: T,
                maxBoostCount: N
              })
            }), (0, r.jsx)(b.Z, {
              width: 12,
              height: 12,
              direction: b.Z.Directions.RIGHT,
              className: o()(E.text, E.boostCountText)
            })]
          })]
        })]
      })
    }));
  return null != k ? (0, r.jsx)(d.yRy, {
    targetElementRef: L,
    renderPopout: () => k === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK ? (0, r.jsx)(O.Z, {
      guild: t,
      markAsDismissed: U
    }) : null,
    position: "right",
    align: "top",
    shouldShow: true,
    closeOnScroll: true,
    onRequestClose: () => U(j.L.INDIRECT_ACTION),
    animation: d.yRy.Animation.TRANSLATE,
    children: e => (0, r.jsx)("div", {
      ref: L,
      children: G(e)
    })
  }) : G()
}

function N(e) {
  let {
    guild: t,
    tooltipTypes: n,
    withMargin: i
  } = e;
  return (0, r.jsx)(I, {
    guild: t,
    tooltipTypes: n,
    withMargin: i
  })
}