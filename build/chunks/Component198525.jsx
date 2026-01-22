/** Chunk was on web.js **/
/** chunk id: 198525, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
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
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk579473 = require("./579473.js"),
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

function L(e) {
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
  M = "11px",
  k = 222;

function U(e) {
  var t, S, x, U, G;
  let {
    quest: V,
    memberListItemRef: F,
    applicationStream: B,
    position: H,
    closePopout: Y,
    updatePosition: W,
    impressionRef: K,
    name: z
  } = e, q = (0, o.bG)([g.A], () => {
    var e;
    return null != (e = g.A.getChannel(null == B ? true : B.channelId)) ? e : null
  }), X = (0, I.ix)({
    quest: V,
    questContent: b.uF.MEMBERS_LIST,
    sourceQuestContent: b.uF.MEMBERS_LIST
  }), Z = (null == V || null == (S = V.userStatus) ? true : S.claimedAt) != null, Q = (null == V || null == (x = V.userStatus) ? true : x.enrolledAt) != null, $ = (null == V || null == (U = V.userStatus) ? true : U.completedAt) != null, J = (0, o.bG)([m.A], () => m.A.getState().theme), ee = (0, c.Mw)(J) ? w.NJ.DARK : w.NJ.LIGHT, et = (0, o.bG)([_.A], () => _.A.useReducedMotion), {
    ref: en,
    height: er
  } = (0, p.Ay)(), [ei, ea] = i.useState(et), es = (0, h.aL)(), eo = (0, s.KF)();
  i.useEffect(() => {
    let e = eo.current;
    return null == e || e.addEventListener("scroll", Y), () => {
      null == e || e.removeEventListener("scroll", Y)
    }
  }, [Y, eo]), i.useEffect(() => {
    let e = eo.current,
      t = F.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => W());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [F, eo, W]);
  let el = (0, u.zhh)({
      from: {
        height: 0
      },
      height: null != er ? er : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => ea(true)
    }),
    ec = (0, u.pnh)(ei, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    eu = () => {
      es.dispatch(R.jej.POPOUT_CLOSE)
    },
    ed = "top" === H ? "".concat(j, " ").concat(j, " 0 0") : "0 0 ".concat(j, " ").concat(j),
    ef = () => {
      (0, E.Y5)({
        questId: V.id,
        questContent: b.uF.MEMBERS_LIST,
        questContentCTA: E.Cy.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.uF.MEMBERS_LIST
      }), (0, C.Zc)(V, {
        content: b.uF.MEMBERS_LIST,
        ctaContent: E.Cy.OPEN_DISCLOSURE,
        sourceQuestContent: b.uF.MEMBERS_LIST
      })
    },
    ep = () => {
      (0, E.Y5)({
        questId: V.id,
        questContent: b.uF.MEMBERS_LIST,
        questContentCTA: E.Cy.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.uF.MEMBERS_LIST
      }), (0, C.navigateToQuestHome)({
        fromContent: b.uF.MEMBERS_LIST,
        questId: V.id
      })
    },
    e_ = e => {
      e.stopPropagation(), ef()
    },
    eh = () => {
      (0, v.Ll)(B, q) && null != q ? ((0, E.Y5)({
        questId: V.id,
        questContent: b.uF.MEMBERS_LIST,
        questContentCTA: E.Cy.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.uF.MEMBERS_LIST
      }), (0, u.mMO)(async () => {
        let {
          default: e
        } = await n.e("72879").then(n.bind(n, 48274));
        return t => (0, r.jsx)(e, L({
          username: null != z ? z : "",
          onConfirm: () => ((0, E.Y5)({
            questId: V.id,
            questContent: b.uF.MEMBERS_LIST,
            questContentCTA: E.Cy.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: b.uF.MEMBERS_LIST
          }), d.default.selectVoiceChannel(q.id), (0, f.Nl)(B))
        }, t))
      })) : ep()
    },
    em = (0, y.NA)({
      quest: V
    }),
    eg = (() => {
      if ($ && !Z) return {
        headerText: P.intl.string(P.t.gHerLS),
        ctaText: P.intl.string(P.t.cfY4PE),
        handleClickCta: X,
        tileAssetType: "reward"
      };
      if (Q && !Z) return {
        headerText: P.intl.string(P.t.uH2sf2),
        ctaText: P.intl.string(P.t.VN1Ajl),
        handleClickCta: ep,
        tileAssetType: "reward"
      };
      if ((0, v.Ll)(B, q)) return {
        headerText: P.intl.string(P.t.Bz6SkH),
        ctaText: P.intl.string(P.t.BXFP30),
        handleClickCta: eh,
        tileAssetType: "game"
      };
      let e = (0, v.vA)(V) ? em : P.intl.string(P.t["BSXPZ+"]);
      return {
        headerText: (0, v.vA)(V) && (0, A.vl)(V) && !V.config.features.includes(N.Li.CLOUD_GAMING_ACTIVITY) ? e : P.intl.string(P.t.Bz6SkH),
        ctaText: e,
        handleClickCta: ep,
        tileAssetType: "game"
      }
    })();
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      K.current = e
    },
    "aria-expanded": ei,
    className: D.iE,
    style: {
      width: null != (t = null == (G = F.current) ? true : G.clientWidth) ? t : k,
      height: el.height,
      overflow: ei ? "visible" : "hidden",
      borderRadius: ed
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        en.current = e
      },
      className: D.kL,
      style: {
        borderRadius: ed
      },
      children: [(0, r.jsxs)("div", {
        className: D.Mn,
        children: [(0, r.jsxs)("div", {
          className: D.kb,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: eg.headerText
          }), (0, r.jsxs)(u.DUT, {
            className: D.yj,
            onClick: e => {
              eu(), e_(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: D.BK,
              children: P.intl.format(P.t["Lm8/mH"], {
                gamePublisher: V.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.cBN, {
              size: "custom",
              className: D.$y,
              width: M,
              height: M,
              color: u.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })]
        }), (0, r.jsx)("div", {
          className: D.pG,
          children: (0, r.jsxs)("div", {
            className: D.zc,
            children: [ec((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: D.ae
            })), "game" === eg.tileAssetType && (0, r.jsx)("img", {
              alt: P.intl.formatToPlainString(P.t.IskzPg, {
                gameTitle: V.config.messages.gameTitle,
                gamePublisher: V.config.messages.gamePublisher
              }),
              className: D.TW,
              src: (0, O.tW)(V, O.fY.GAME_TILE, ee).url
            }), "reward" === eg.tileAssetType && (0, r.jsx)(T.A, {
              className: D.TW,
              quest: V,
              questContent: b.uF.MEMBERS_LIST,
              learnMoreStyle: "icon",
              onClick: eu,
              sourceQuestContent: b.uF.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.$nd, {
        variant: "secondary",
        text: eg.ctaText,
        onClick: () => {
          eu(), eg.handleClickCta()
        },
        fullWidth: true
      })]
    })
  })
}

function G(e) {
  return (0, r.jsx)(S.R, {
    questOrQuests: e.quest,
    questContent: b.uF.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: b.uF.MEMBERS_LIST,
    children: t => (0, r.jsx)(U, L({
      impressionRef: t
    }, e))
  })
}