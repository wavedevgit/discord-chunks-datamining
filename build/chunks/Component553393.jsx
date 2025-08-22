/** Chunk was on web.js **/
/** chunk id: 553393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk202841 = require("./202841.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk393238 = require("./393238.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk258609 = require("./258609.js"),
  Chunk102172 = require("./102172.js"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk85468 = require("./85468.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
let U = "8px",
  G = "11px",
  B = 222;

function Z(e, t) {
  return null != e && null != t && (0, g.p9)(t, v.Z, y.Z, O.Z, m.Z)[0]
}

function V(e) {
  var t, m, g, y, O;
  let {
    quest: v,
    memberListItemRef: C,
    applicationStream: M,
    position: V,
    closePopout: F,
    updatePosition: H,
    impressionRef: Y,
    name: W
  } = e, K = (0, s.e7)([b.Z], () => {
    var e;
    return null != (e = b.Z.getChannel(null == M ? true : M.channelId)) ? e : null
  }), z = (0, P.hf)({
    quest: v,
    questContent: S.jn.MEMBERS_LIST,
    sourceQuestContent: S.jn.MEMBERS_LIST
  }), q = (0, T.tP)(v), X = (null == v || null == (t = v.userStatus) ? true : t.claimedAt) != null, Q = (null == v || null == (m = v.userStatus) ? true : m.enrolledAt) != null, J = (null == v || null == (g = v.userStatus) ? true : g.completedAt) != null, $ = (0, s.e7)([E.Z], () => E.Z.getState().theme), ee = (0, l.wj)($) ? x.BR.DARK : x.BR.LIGHT, et = (0, s.e7)([h.Z], () => h.Z.useReducedMotion), {
    ref: en,
    height: er
  } = (0, _.ZP)(), [ei, ea] = i.useState(et), eo = (0, p.Aq)(), es = (0, o.eg)();
  i.useEffect(() => {
    let e = es.current;
    return null == e || e.addEventListener("scroll", F), () => {
      null == e || e.removeEventListener("scroll", F)
    }
  }, [F, es]), i.useEffect(() => {
    let e = es.current,
      t = C.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => H());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [C, es, H]);
  let el = (0, u.q_F)({
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
    ec = (0, u.Yzy)(ei, {
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
      eo.dispatch(D.CkL.POPOUT_CLOSE)
    },
    ed = "top" === V ? "".concat(U, " ").concat(U, " 0 0") : "0 0 ".concat(U, " ").concat(U);
  if (null == v || q || X && !Z(M, K)) return null;
  let ef = () => {
      (0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, R.openDisclosureModal)(v, {
        content: S.jn.MEMBERS_LIST,
        ctaContent: I.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: S.jn.MEMBERS_LIST
      })
    },
    e_ = () => {
      (0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, R.navigateToQuestHome)({
        fromContent: S.jn.MEMBERS_LIST,
        questId: v.id
      })
    },
    ep = e => {
      e.stopPropagation(), ef()
    },
    eh = () => {
      Z(M, K) && null != K ? ((0, I._3)({
        questId: v.id,
        questContent: S.jn.MEMBERS_LIST,
        questContentCTA: I.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: S.jn.MEMBERS_LIST
      }), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("85045").then(n.bind(n, 748862));
        return t => (0, r.jsx)(e, k({
          username: null != W ? W : "",
          onConfirm: () => ((0, I._3)({
            questId: v.id,
            questContent: S.jn.MEMBERS_LIST,
            questContentCTA: I.jZ.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: S.jn.MEMBERS_LIST
          }), d.default.selectVoiceChannel(K.id), (0, f.iV)(M))
        }, t))
      })) : e_()
    },
    em = J && !X ? {
      headerText: L.intl.string(L.t.gHerLS),
      ctaText: L.intl.string(L.t.cfY4PD),
      handleClickCta: z,
      tileAssetType: "reward"
    } : Q && !X ? {
      headerText: L.intl.string(L.t.uH2sf3),
      ctaText: L.intl.string(L.t.VN1Ajo),
      handleClickCta: e_,
      tileAssetType: "reward"
    } : Z(M, K) ? {
      headerText: L.intl.string(L.t.Bz6SkJ),
      ctaText: L.intl.string(L.t.BXFP39),
      handleClickCta: eh,
      tileAssetType: "game"
    } : {
      headerText: L.intl.string(L.t.Bz6SkJ),
      ctaText: L.intl.string(L.t.BSXPZ2),
      handleClickCta: e_,
      tileAssetType: "game"
    };
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      Y.current = e
    },
    "aria-expanded": ei,
    className: j.wrapper,
    style: {
      width: null != (O = null == (y = C.current) ? true : y.clientWidth) ? O : B,
      height: el.height,
      overflow: ei ? "visible" : "hidden",
      borderRadius: ed
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        en.current = e
      },
      className: j.container,
      style: {
        borderRadius: ed
      },
      children: [(0, r.jsxs)("div", {
        className: j.top,
        children: [(0, r.jsxs)("div", {
          className: j.left,
          children: [(0, r.jsx)(u.X6q, {
            variant: "heading-sm/semibold",
            children: em.headerText
          }), (0, r.jsxs)(u.P3F, {
            className: j.help,
            onClick: e => {
              eu(), ep(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: j.helpText,
              children: L.intl.format(L.t["Lm8/mJ"], {
                gamePublisher: v.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.idN, {
              size: "custom",
              className: j.helpIcon,
              width: G,
              height: G,
              color: u.TVs.colors.INTERACTIVE_NORMAL
            })]
          })]
        }), (0, r.jsx)("div", {
          className: j.right,
          children: (0, r.jsxs)("div", {
            className: j.imgWrapper,
            children: [ec((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: j.imgUnderlay
            })), "game" === em.tileAssetType && (0, r.jsx)("img", {
              alt: L.intl.formatToPlainString(L.t.IskzPj, {
                gameTitle: v.config.messages.gameTitle,
                gamePublisher: v.config.messages.gamePublisher
              }),
              className: j.assetTile,
              src: (0, A.fh)(v, A.eC.GAME_TILE, ee).url
            }), "reward" === em.tileAssetType && (0, r.jsx)(N.Z, {
              className: j.assetTile,
              quest: v,
              questContent: S.jn.MEMBERS_LIST,
              learnMoreStyle: "icon",
              location: w.dr.MEMBERS_LIST,
              onClick: eu,
              sourceQuestContent: S.jn.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(c.zx, {
        onClick: () => {
          eu(), em.handleClickCta()
        },
        color: c.zx.Colors.CUSTOM,
        className: j.ctaButton,
        children: em.ctaText
      })]
    })
  })
}

function F(e) {
  return null == e.quest || e.isQuestEnrollmentBlocked ? null : (0, r.jsx)(C.A, {
    questOrQuests: e.quest,
    questContent: S.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: S.jn.MEMBERS_LIST,
    children: t => (0, r.jsx)(V, k({
      impressionRef: t
    }, e))
  })
}