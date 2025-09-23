/** Chunk was on web.js **/
/** chunk id: 553393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk393238 = require("./393238.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk592125 = require("./592125.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
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
  Chunk419953 = require("./419953.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}
let x = "8px",
  L = "11px",
  j = 222;

function M(e) {
  var t, v, w, M, k;
  let {
    quest: U,
    memberListItemRef: G,
    applicationStream: B,
    position: Z,
    closePopout: F,
    updatePosition: V,
    impressionRef: H,
    name: Y
  } = e, W = (0, s.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getChannel(null == B ? true : B.channelId)) ? e : null
  }), K = (0, S.hf)({
    quest: U,
    questContent: y.jn.MEMBERS_LIST,
    sourceQuestContent: y.jn.MEMBERS_LIST
  }), z = (null == U || null == (t = U.userStatus) ? true : t.claimedAt) != null, q = (null == U || null == (v = U.userStatus) ? true : v.enrolledAt) != null, X = (null == U || null == (w = U.userStatus) ? true : w.completedAt) != null, Q = (0, s.e7)([m.Z], () => m.Z.getState().theme), J = (0, c.wj)(Q) ? N.BR.DARK : N.BR.LIGHT, $ = (0, s.e7)([h.Z], () => h.Z.useReducedMotion), {
    ref: ee,
    height: et
  } = (0, _.ZP)(), [en, er] = i.useState($), ei = (0, p.Aq)(), ea = (0, o.eg)();
  i.useEffect(() => {
    let e = ea.current;
    return null == e || e.addEventListener("scroll", F), () => {
      null == e || e.removeEventListener("scroll", F)
    }
  }, [F, ea]), i.useEffect(() => {
    let e = ea.current,
      t = G.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => V());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [G, ea, V]);
  let eo = (0, u.q_F)({
      from: {
        height: 0
      },
      height: null != et ? et : 0,
      config: {
        tension: 450,
        friction: 45
      },
      onRest: () => er(true)
    }),
    es = (0, u.Yzy)(en, {
      from: {
        opacity: 0,
        scale: 0
      },
      enter: {
        opacity: 1,
        scale: 1
      }
    }),
    el = () => {
      ei.dispatch(C.CkL.POPOUT_CLOSE)
    },
    ec = "top" === Z ? "".concat(x, " ").concat(x, " 0 0") : "0 0 ".concat(x, " ").concat(x),
    eu = () => {
      (0, E._3)({
        questId: U.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, T.openDisclosureModal)(U, {
        content: y.jn.MEMBERS_LIST,
        ctaContent: E.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: y.jn.MEMBERS_LIST
      })
    },
    ed = () => {
      (0, E._3)({
        questId: U.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, T.navigateToQuestHome)({
        fromContent: y.jn.MEMBERS_LIST,
        questId: U.id
      })
    },
    ef = e => {
      e.stopPropagation(), eu()
    },
    e_ = () => {
      (0, b.Rc)(B, W) && null != W ? ((0, E._3)({
        questId: U.id,
        questContent: y.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: y.jn.MEMBERS_LIST
      }), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("85045").then(n.bind(n, 748862));
        return t => (0, r.jsx)(e, D({
          username: null != Y ? Y : "",
          onConfirm: () => ((0, E._3)({
            questId: U.id,
            questContent: y.jn.MEMBERS_LIST,
            questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: y.jn.MEMBERS_LIST
          }), d.default.selectVoiceChannel(W.id), (0, f.iV)(B))
        }, t))
      })) : ed()
    },
    ep = X && !z ? {
      headerText: R.intl.string(R.t.gHerLS),
      ctaText: R.intl.string(R.t.cfY4PD),
      handleClickCta: K,
      tileAssetType: "reward"
    } : q && !z ? {
      headerText: R.intl.string(R.t.uH2sf3),
      ctaText: R.intl.string(R.t.VN1Ajo),
      handleClickCta: ed,
      tileAssetType: "reward"
    } : (0, b.Rc)(B, W) ? {
      headerText: R.intl.string(R.t.Bz6SkJ),
      ctaText: R.intl.string(R.t.BXFP39),
      handleClickCta: e_,
      tileAssetType: "game"
    } : {
      headerText: R.intl.string(R.t.Bz6SkJ),
      ctaText: R.intl.string(R.t.BSXPZ2),
      handleClickCta: ed,
      tileAssetType: "game"
    };
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      H.current = e
    },
    "aria-expanded": en,
    className: P.wrapper,
    style: {
      width: null != (k = null == (M = G.current) ? true : M.clientWidth) ? k : j,
      height: eo.height,
      overflow: en ? "visible" : "hidden",
      borderRadius: ec
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        ee.current = e
      },
      className: P.container,
      style: {
        borderRadius: ec
      },
      children: [(0, r.jsxs)("div", {
        className: P.top,
        children: [(0, r.jsxs)("div", {
          className: P.left,
          children: [(0, r.jsx)(u.X6q, {
            variant: "heading-sm/semibold",
            children: ep.headerText
          }), (0, r.jsxs)(u.P3F, {
            className: P.help,
            onClick: e => {
              el(), ef(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: P.helpText,
              children: R.intl.format(R.t["Lm8/mJ"], {
                gamePublisher: U.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.idN, {
              size: "custom",
              className: P.helpIcon,
              width: L,
              height: L,
              color: u.TVs.colors.INTERACTIVE_NORMAL
            })]
          })]
        }), (0, r.jsx)("div", {
          className: P.right,
          children: (0, r.jsxs)("div", {
            className: P.imgWrapper,
            children: [es((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: P.imgUnderlay
            })), "game" === ep.tileAssetType && (0, r.jsx)("img", {
              alt: R.intl.formatToPlainString(R.t.IskzPj, {
                gameTitle: U.config.messages.gameTitle,
                gamePublisher: U.config.messages.gamePublisher
              }),
              className: P.assetTile,
              src: (0, O.fh)(U, O.eC.GAME_TILE, J).url
            }), "reward" === ep.tileAssetType && (0, r.jsx)(I.Z, {
              className: P.assetTile,
              quest: U,
              questContent: y.jn.MEMBERS_LIST,
              learnMoreStyle: "icon",
              location: A.dr.MEMBERS_LIST,
              onClick: el,
              sourceQuestContent: y.jn.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.zxk, {
        variant: "secondary",
        text: ep.ctaText,
        onClick: () => {
          el(), ep.handleClickCta()
        },
        fullWidth: true
      })]
    })
  })
}

function k(e) {
  return (0, r.jsx)(v.A, {
    questOrQuests: e.quest,
    questContent: y.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: y.jn.MEMBERS_LIST,
    children: t => (0, r.jsx)(M, D({
      impressionRef: t
    }, e))
  })
}