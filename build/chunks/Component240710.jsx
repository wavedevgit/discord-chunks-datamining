/** Chunk was on 90948 **/
/** chunk id: 240710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731355 = require("./731355.js"),
  Chunk158954 = require("./158954.js"),
  Chunk435371 = require("./435371.js"),
  Chunk736653 = require("./736653.js"),
  Chunk216456 = require("./216456.js"),
  Chunk906822 = require("./906822.jsx"),
  Chunk341915 = require("./341915.js"),
  Chunk579473 = require("./579473.js"),
  Chunk651892 = require("./651892.js"),
  Chunk901406 = require("./901406.js"),
  Chunk814793 = require("./814793.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk918338 = require("./918338.jsx"),
  Chunk201805 = require("./201805.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk861616 = require("./861616.js");

function N(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: N
  } = e, A = (0, o.Ay)(), b = (0, s.Mwr)(A) ? p.NJ.DARK : p.NJ.LIGHT, E = (0, x.wr)(t), w = (0, c.go)(), D = (0, _.E0)(t.config), L = r.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, _.pv)(t.config) !== a.Z.GAMEPLAY || t.config.features.includes(j.Li.NON_GAMING_PLAY_QUEST) || (0, _.ui)(t) ? C.intl.string(C.t.y8Xf3k) : C.intl.string(C.t["wirwN+"])
  }, [t]), {
    isLoading: O
  } = (0, g.Gk)();
  r.useEffect(() => {
    O || N()
  }, [O, N]);
  let k = (0, h.Lk)({
    isShareable: D,
    questId: t.id,
    trackingCtx: r.useMemo(() => ({
      content: u.uF.REWARD_MODAL,
      ctaContent: d.Cy.REWARD_MODAL_COPY_LINK,
      impressionId: w,
      sourceQuestContent: n
    }), [w, n])
  });
  return (0, i.jsxs)("div", {
    className: y.kL,
    children: [(0, i.jsx)(g.Sn, {
      id: "hero-display",
      children: e => (0, i.jsx)(v.A, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: y.WQ,
        isInteracting: true,
        assetRef: e
      })
    }), (0, i.jsx)("div", {
      className: y.Lt,
      children: (0, i.jsx)(g.Sn, {
        id: "partner-logotype",
        children: e => (0, i.jsx)("img", {
          ref: e,
          className: y.a$,
          alt: C.intl.formatToPlainString(C.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.tW)(t, m.fY.LOGO_TYPE, b).url
        })
      })
    }), (0, i.jsxs)("div", {
      className: y.Th,
      children: [(0, i.jsxs)("div", {
        className: y.Ly,
        children: [(0, i.jsx)(s.DZT, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: y.fx,
          children: C.intl.format(C.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, i.jsx)(s.EYj, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: L
        })]
      }), (0, i.jsx)(g.Sn, {
        id: "partner-game-tile",
        children: e => (0, i.jsx)("img", {
          ref: e,
          className: y.rw,
          alt: C.intl.formatToPlainString(C.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.tW)(t, m.fY.GAME_TILE, b).url
        })
      })]
    }), (0, i.jsx)("div", {
      className: y.tu,
      children: (0, i.jsxs)(s.e2v, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [D && (0, i.jsx)(l.m_, {
          text: C.intl.string(C.t.WmfZHZ),
          children: (0, i.jsx)(s.K0, {
            icon: s.qYV,
            onClick: k,
            "aria-label": C.intl.string(C.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, i.jsx)(s.$nd, {
          variant: "primary",
          text: E,
          onClick: () => {
            (0, f.pu)(t, {
              content: u.uF.REWARD_MODAL,
              ctaContent: d.Cy.OPEN_GAME_LINK,
              impressionId: w,
              sourceQuestContent: n
            })
          },
          fullWidth: true,
          icon: s.We5,
          iconPosition: "end"
        })]
      })
    })]
  })
}

function A(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, i.jsx)(g.jY, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, i.jsx)(N, function(e) {
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
    }({}, e))
  })
}