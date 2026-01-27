/** Chunk was on web.js **/
/** chunk id: 198525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk401843 = require("./401843.js"),
  Chunk765671 = require("./765671.js"),
  Chunk775602 = require("./775602.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk734057 = require("./734057.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk579473 = require("./579473.js"),
  Chunk561844 = require("./561844.js"),
  Chunk590202 = require("./590202.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk73473 = require("./73473.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk784569 = require("./784569.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}
let j = "8px",
  k = "11px",
  U = 222;

function G(e) {
  var t, S, x, G, F;
  let {
    quest: V,
    memberListItemRef: B,
    applicationStream: H,
    position: Y,
    closePopout: W,
    updatePosition: K,
    impressionRef: z,
    name: q
  } = e, Z = (0, s.bG)([g.A], () => {
    var e;
    return null != (e = g.A.getChannel(null == H ? true : H.channelId)) ? e : null
  }), Q = (0, T.ix)({
    quest: V,
    questContent: E.uF.MEMBERS_LIST,
    sourceQuestContent: E.uF.MEMBERS_LIST
  }), X = (null == V || null == (S = V.userStatus) ? true : S.claimedAt) != null, J = (null == V || null == (x = V.userStatus) ? true : x.enrolledAt) != null, $ = (null == V || null == (G = V.userStatus) ? true : G.completedAt) != null, ee = (0, s.bG)([m.A], () => m.A.getState().theme), et = (0, c.Mw)(ee) ? P.NJ.DARK : P.NJ.LIGHT, en = (0, s.bG)([_.A], () => _.A.useReducedMotion), {
    ref: er,
    height: ei
  } = (0, p.Ay)(), [ea, eo] = i.useState(en), es = (0, h.aL)(), el = (0, o.KF)();
  i.useEffect(() => {
    let e = el.current;
    return null == e || e.addEventListener("scroll", W), () => {
      null == e || e.removeEventListener("scroll", W)
    }
  }, [W, el]), i.useEffect(() => {
    let e = el.current,
      t = B.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => K());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [B, el, K]);
  let ec = (0, u.zhh)({
      from: {
        height: 0
      },
      height: null != ei ? ei : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => eo(true)
    }),
    eu = (0, u.pnh)(ea, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    ed = () => {
      es.dispatch(R.jej.POPOUT_CLOSE)
    },
    ef = "top" === Y ? "".concat(j, " ").concat(j, " 0 0") : "0 0 ".concat(j, " ").concat(j),
    ep = () => {
      (0, O.Y5)({
        questId: V.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, N.Zc)(V, {
        content: E.uF.MEMBERS_LIST,
        ctaContent: v.Cy.OPEN_DISCLOSURE,
        sourceQuestContent: E.uF.MEMBERS_LIST
      })
    },
    e_ = () => {
      (0, O.Y5)({
        questId: V.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, N.navigateToQuestHome)({
        fromContent: E.uF.MEMBERS_LIST,
        questId: V.id
      })
    },
    eh = e => {
      e.stopPropagation(), ep()
    },
    em = () => {
      (0, I.Ll)(H, Z) && null != Z ? ((0, O.Y5)({
        questId: V.id,
        questContent: E.uF.MEMBERS_LIST,
        questContentCTA: v.Cy.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: E.uF.MEMBERS_LIST
      }), (0, u.mMO)(async () => {
        let {
          default: e
        } = await n.e("72879").then(n.bind(n, 48274));
        return t => (0, r.jsx)(e, M({
          username: null != q ? q : "",
          onConfirm: () => ((0, O.Y5)({
            questId: V.id,
            questContent: E.uF.MEMBERS_LIST,
            questContentCTA: v.Cy.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: E.uF.MEMBERS_LIST
          }), d.default.selectVoiceChannel(Z.id), (0, f.Nl)(H))
        }, t))
      })) : e_()
    },
    eg = (0, y.NA)({
      quest: V
    }),
    eE = (() => {
      if ($ && !X) return {
        headerText: D.intl.string(D.t.gHerLS),
        ctaText: D.intl.string(D.t.cfY4PE),
        handleClickCta: Q,
        tileAssetType: "reward"
      };
      if (J && !X) return {
        headerText: D.intl.string(D.t.uH2sf2),
        ctaText: D.intl.string(D.t.VN1Ajl),
        handleClickCta: e_,
        tileAssetType: "reward"
      };
      if ((0, I.Ll)(H, Z)) return {
        headerText: D.intl.string(D.t.Bz6SkH),
        ctaText: D.intl.string(D.t.BXFP30),
        handleClickCta: em,
        tileAssetType: "game"
      };
      let e = (0, I.vA)(V) ? eg : D.intl.string(D.t["BSXPZ+"]);
      return {
        headerText: (0, I.vA)(V) && (0, A.vl)(V) && !V.config.features.includes(w.Li.CLOUD_GAMING_ACTIVITY) ? e : D.intl.string(D.t.Bz6SkH),
        ctaText: e,
        handleClickCta: e_,
        tileAssetType: "game"
      }
    })();
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      z.current = e
    },
    "aria-expanded": ea,
    className: L.iE,
    style: {
      width: null != (t = null == (F = B.current) ? true : F.clientWidth) ? t : U,
      height: ec.height,
      overflow: ea ? "visible" : "hidden",
      borderRadius: ef
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        er.current = e
      },
      className: L.kL,
      style: {
        borderRadius: ef
      },
      children: [(0, r.jsxs)("div", {
        className: L.Mn,
        children: [(0, r.jsxs)("div", {
          className: L.kb,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: eE.headerText
          }), (0, r.jsxs)(u.DUT, {
            className: L.yj,
            onClick: e => {
              ed(), eh(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: L.BK,
              children: D.intl.format(D.t["Lm8/mH"], {
                gamePublisher: V.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.cBN, {
              size: "custom",
              className: L.$y,
              width: k,
              height: k,
              color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })]
        }), (0, r.jsx)("div", {
          className: L.pG,
          children: (0, r.jsxs)("div", {
            className: L.zc,
            children: [eu((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: L.ae
            })), "game" === eE.tileAssetType && (0, r.jsx)("img", {
              alt: D.intl.formatToPlainString(D.t.IskzPg, {
                gameTitle: V.config.messages.gameTitle,
                gamePublisher: V.config.messages.gamePublisher
              }),
              className: L.TW,
              src: (0, b.tW)(V, b.fY.GAME_TILE, et).url
            }), "reward" === eE.tileAssetType && (0, r.jsx)(C.A, {
              className: L.TW,
              quest: V,
              questContent: E.uF.MEMBERS_LIST,
              learnMoreStyle: "icon",
              onClick: ed,
              sourceQuestContent: E.uF.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.$nd, {
        variant: "secondary",
        text: eE.ctaText,
        onClick: () => {
          ed(), eE.handleClickCta()
        },
        fullWidth: true
      })]
    })
  })
}

function F(e) {
  return (0, r.jsx)(S.R, {
    questOrQuests: e.quest,
    questContent: E.uF.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: E.uF.MEMBERS_LIST,
    children: t => (0, r.jsx)(G, M({
      impressionRef: t
    }, e))
  })
}