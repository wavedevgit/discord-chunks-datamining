/** Chunk was on web.js **/
/** chunk id: 553393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk393238 = require("./393238.js"),
  Chunk607070 = require("./607070.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419953 = require("./419953.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}
let L = "8px",
  M = "11px",
  j = 222;

function k(e) {
  var t, I, D, k, U;
  let {
    quest: G,
    memberListItemRef: B,
    applicationStream: Z,
    position: F,
    closePopout: V,
    updatePosition: H,
    impressionRef: Y,
    name: W
  } = e, K = (0, s.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getChannel(null == Z ? true : Z.channelId)) ? e : null
  }), z = (0, A.hf)({
    quest: G,
    questContent: y.jn.MEMBERS_LIST,
    sourceQuestContent: y.jn.MEMBERS_LIST
  }), q = (null == G || null == (t = G.userStatus) ? true : t.claimedAt) != null, X = (null == G || null == (I = G.userStatus) ? true : I.enrolledAt) != null, Q = (null == G || null == (D = G.userStatus) ? true : D.completedAt) != null, J = (0, s.e7)([m.Z], () => m.Z.getState().theme), $ = (0, c.wj)(J) ? R.BR.DARK : R.BR.LIGHT, ee = (0, s.e7)([p.Z], () => p.Z.useReducedMotion), {
    ref: et,
    height: en
  } = (0, _.ZP)(), [er, ei] = i.useState(ee), ea = (0, h.Aq)(), eo = (0, o.eg)();
  i.useEffect(() => {
    let e = eo.current;
    return null == e || e.addEventListener("scroll", V), () => {
      null == e || e.removeEventListener("scroll", V)
    }
  }, [V, eo]), i.useEffect(() => {
    let e = eo.current,
      t = B.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => H());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [B, eo, H]);
  let es = (0, u.q_F)({
      from: {
        height: 0
      },
      height: null != en ? en : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => ei(true)
    }),
    el = (0, u.Yzy)(er, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    ec = () => {
      ea.dispatch(N.CkL.POPOUT_CLOSE)
    },
    eu = "top" === F ? "".concat(L, " ").concat(L, " 0 0") : "0 0 ".concat(L, " ").concat(L),
    ed = () => {
      (0, E._3)({
        questId: G.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, T.openDisclosureModal)(G, {
        content: y.jn.MEMBERS_LIST,
        ctaContent: E.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: y.jn.MEMBERS_LIST
      })
    },
    ef = () => {
      (0, E._3)({
        questId: G.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, T.navigateToQuestHome)({
        fromContent: y.jn.MEMBERS_LIST,
        questId: G.id
      })
    },
    e_ = e => {
      e.stopPropagation(), ed()
    },
    ep = () => {
      (0, b.Rc)(Z, K) && null != K ? ((0, E._3)({
        questId: G.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("85045").then(n.bind(n, 748862));
        return t => (0, r.jsx)(e, x({
          username: null != W ? W : "",
          onConfirm: () => ((0, E._3)({
            questId: G.id,
            questContent: y.jn.MEMBERS_LIST,
            questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: y.jn.MEMBERS_LIST
          }), d.default.selectVoiceChannel(K.id), (0, f.iV)(Z))
        }, t))
      })) : ef()
    },
    eh = (0, O.CR)({
      quest: G
    }),
    em = (() => {
      if (Q && !q) return {
        headerText: P.intl.string(P.t.gHerLS),
        ctaText: P.intl.string(P.t.cfY4PE),
        handleClickCta: z,
        tileAssetType: "reward"
      };
      if (X && !q) return {
        headerText: P.intl.string(P.t.uH2sf2),
        ctaText: P.intl.string(P.t.VN1Ajl),
        handleClickCta: ef,
        tileAssetType: "reward"
      };
      if ((0, b.Rc)(Z, K)) return {
        headerText: P.intl.string(P.t.Bz6SkH),
        ctaText: P.intl.string(P.t.BXFP30),
        handleClickCta: ep,
        tileAssetType: "game"
      };
      let e = (0, b.Rt)(G) ? eh : P.intl.string(P.t["BSXPZ+"]);
      return {
        headerText: (0, b.Rt)(G) && (0, b.pO)(G) && !G.config.features.includes(C.S7.CLOUD_GAMING_ACTIVITY) ? e : P.intl.string(P.t.Bz6SkH),
        ctaText: e,
        handleClickCta: ef,
        tileAssetType: "game"
      }
    })();
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      Y.current = e
    },
    "aria-expanded": er,
    className: w.wrapper,
    style: {
      width: null != (U = null == (k = B.current) ? true : k.clientWidth) ? U : j,
      height: es.height,
      overflow: er ? "visible" : "hidden",
      borderRadius: eu
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        et.current = e
      },
      className: w.container,
      style: {
        borderRadius: eu
      },
      children: [(0, r.jsxs)("div", {
        className: w.top,
        children: [(0, r.jsxs)("div", {
          className: w.left,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: em.headerText
          }), (0, r.jsxs)(u.P3F, {
            className: w.help,
            onClick: e => {
              ec(), e_(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: w.helpText,
              children: P.intl.format(P.t["Lm8/mH"], {
                gamePublisher: G.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.idN, {
              size: "custom",
              className: w.helpIcon,
              width: M,
              height: M,
              color: u.TVs.colors.INTERACTIVE_NORMAL
            })]
          })]
        }), (0, r.jsx)("div", {
          className: w.right,
          children: (0, r.jsxs)("div", {
            className: w.imgWrapper,
            children: [el((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: w.imgUnderlay
            })), "game" === em.tileAssetType && (0, r.jsx)("img", {
              alt: P.intl.formatToPlainString(P.t.IskzPg, {
                gameTitle: G.config.messages.gameTitle,
                gamePublisher: G.config.messages.gamePublisher
              }),
              className: w.assetTile,
              src: (0, v.fh)(G, v.eC.GAME_TILE, $).url
            }), "reward" === em.tileAssetType && (0, r.jsx)(S.Z, {
              className: w.assetTile,
              quest: G,
              questContent: y.jn.MEMBERS_LIST,
              learnMoreStyle: "icon",
              location: C.dr.MEMBERS_LIST,
              onClick: ec,
              sourceQuestContent: y.jn.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.zxk, {
        variant: "secondary",
        text: em.ctaText,
        onClick: () => {
          ec(), em.handleClickCta()
        },
        fullWidth: true
      })]
    })
  })
}

function U(e) {
  return (0, r.jsx)(I.A, {
    questOrQuests: e.quest,
    questContent: y.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: y.jn.MEMBERS_LIST,
    children: t => (0, r.jsx)(k, x({
      impressionRef: t
    }, e))
  })
}