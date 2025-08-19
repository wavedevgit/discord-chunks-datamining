/** Chunk was on 69003 **/
/** chunk id: 583962, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PD: () => A,
  ZP: () => L,
  aR: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk538445 = require("./538445.jsx"),
  Chunk151494 = require("./151494.js"),
  Chunk496675 = require("./496675.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk624138 = require("./624138.js"),
  Chunk667815 = require("./667815.js"),
  Chunk531572 = require("./531572.js"),
  Chunk18857 = require("./18857.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk210418 = require("./210418.js");

function w(e) {
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

function Z(e, t) {
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
let T = (0, Chunk624138.Mg)(Chunk477690.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN),
  A = 57,
  R = 57 + T,
  D = {
    tension: 180,
    friction: 80
  },
  L = Chunk647438.memo(e => {
    let {
      guild: t,
      tooltipTypes: l,
      withMargin: d
    } = e, v = (0, y.Jh)(t.id), T = (0, b.Z)(t.id), A = (0, y.FZ)(v), R = null == A, L = null != A ? A : v, M = (0, c.e7)([C.Z], () => {
      var e;
      return null != (e = C.Z.getCountForGuild(t.id)) ? e : 0
    }), k = (0, c.e7)([O.Z], () => O.Z.can(x.Plq.MANAGE_GUILD, t));
    i.useEffect(() => {
      M !== T && (0, j.v)(t.id, T)
    }, [t.id, M, T]);
    let U = R ? "100%" : "".concat(Math.min(100, T / x.oCV[L] * 100), "%"),
      {
        current: G
      } = i.useRef(U),
      [B] = (0, p.q_F)(() => ({
        from: {
          width: M === T ? G : "0%"
        },
        to: {
          width: U
        },
        config: D
      }), "respect-motion-settings", [M, T, G, U]),
      V = t.premiumTier < L && M >= x.oCV[L],
      F = (0, E.Z)(t, h.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY),
      H = P.intl.formatToPlainString(P.t["2oNfMT"], {
        levelName: (0, y.e9)(L)
      }),
      z = P.intl.format(P.t.dhKnYm, {
        numBoosts: T,
        numTotal: x.oCV[L]
      });
    R && (H = (0, y.e9)(L), z = P.intl.format(P.t.B2byER, {
      numBoosts: T
    })), H = H.toLocaleLowerCase();
    let W = (0, s.JA)("boosts-".concat(t.id)),
      K = i.useRef(null),
      [Y, q] = (0, g.US)(l),
      X = () => Y === u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK ? (0, r.jsx)(m.Z, {
        guild: t,
        markAsDismissed: q
      }) : null,
      Q = (e, i) => (0, r.jsxs)(p.P3F, Z(w({}, W, e, i), {
        "aria-label": true,
        role: "button",
        focusProps: {
          offset: {
            left: 10,
            right: 4
          }
        },
        onClick: () => {
          var t, n;
          null == e || null == (t = e.onClick) || t.call(e), null == i || null == (n = i.onClick) || n.call(i), F()
        },
        className: o()(N.container, {
          [N.containerWithMargin]: d
        }),
        onContextMenu: e => {
          k && (0, f.jW)(e, async () => {
            let {
              default: e
            } = await n.e("8570").then(n.bind(n, 651138));
            return n => (0, r.jsx)(e, Z(w({}, n), {
              guild: t
            }))
          })
        },
        children: [(0, r.jsx)(p.nn4, {
          children: e["aria-label"]
        }), (0, r.jsxs)("div", {
          className: N.textArea,
          children: [(0, r.jsx)("div", {
            className: N.goalTextContainer,
            children: (0, r.jsx)(p.Text, {
              className: N.goalText,
              color: "none",
              variant: "text-sm/medium",
              lineClamp: 1,
              children: H
            })
          }), (0, r.jsxs)("div", {
            className: N.progressFraction,
            children: [(0, r.jsx)(p.Text, {
              color: "none",
              variant: "text-sm/medium",
              className: N.progressText,
              lineClamp: 1,
              children: z
            }), (0, r.jsx)(_.Z, {
              className: N.count,
              height: 16,
              width: 16,
              direction: _.Z.Directions.RIGHT
            })]
          })]
        }), (0, r.jsxs)("div", {
          className: o()(N.progressBarContainer, {
            [N.progressBarContainerComplete]: R
          }),
          children: [(0, r.jsx)(a.animated.div, {
            className: N.progressBar,
            style: B
          }), R ? (0, r.jsx)("span", {
            "aria-label": P.intl.string(P.t["7iL1q6"]),
            role: "img",
            className: N.tadaIcon,
            children: "\uD83C\uDF89"
          }) : null]
        })]
      }));
    return (0, r.jsx)("li", {
      children: (0, r.jsx)(p.ua7, {
        text: V ? P.intl.formatToPlainString(I.default["9CtPjo"], {
          perk: (0, y.nW)(L)
        }) : R ? P.intl.string(P.t["Y+V9go"]) : P.intl.formatToPlainString(P.t.UyDKl5, {
          levelName: (0, y.nW)(L)
        }),
        position: "top",
        delay: 200,
        hideOnClick: true,
        children: e => null != Y ? (0, r.jsx)(p.yRy, {
          targetElementRef: K,
          renderPopout: X,
          position: "right",
          align: "top",
          shouldShow: true,
          closeOnScroll: true,
          onRequestClose: () => q(S.L.INDIRECT_ACTION),
          animation: p.yRy.Animation.TRANSLATE,
          children: t => (0, r.jsx)("div", {
            ref: K,
            children: Q(e, t)
          })
        }) : Q(e)
      })
    })
  })