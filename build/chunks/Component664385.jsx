/** Chunk was on web.js **/
/** chunk id: 664385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467721 = require("./467721.js"),
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
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk243548 = require("./243548.js");

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
  var t, I, x, U, G;
  let {
    quest: Z,
    memberListItemRef: B,
    applicationStream: F,
    position: V,
    closePopout: H,
    updatePosition: Y,
    impressionRef: W,
    name: K
  } = e, z = (0, s.e7)([g.Z], () => {
    var e;
    return null != (e = g.Z.getChannel(null == F ? true : F.channelId)) ? e : null
  }), q = (0, T.hf)({
    quest: Z,
    questContent: b.jn.MEMBERS_LIST,
    sourceQuestContent: b.jn.MEMBERS_LIST
  }), Q = (null == Z || null == (t = Z.userStatus) ? true : t.claimedAt) != null, X = (null == Z || null == (I = Z.userStatus) ? true : I.enrolledAt) != null, J = (null == Z || null == (x = Z.userStatus) ? true : x.completedAt) != null, $ = (0, s.e7)([h.Z], () => h.Z.getState().theme), ee = (0, c.wj)($) ? R.BR.DARK : R.BR.LIGHT, et = (0, s.e7)([_.Z], () => _.Z.useReducedMotion), {
    ref: en,
    height: er
  } = (0, p.ZP)(), [ei, ea] = i.useState(et), eo = (0, m.Aq)(), es = (0, o.eg)();
  i.useEffect(() => {
    let e = es.current;
    return null == e || e.addEventListener("scroll", H), () => {
      null == e || e.removeEventListener("scroll", H)
    }
  }, [H, es]), i.useEffect(() => {
    let e = es.current,
      t = B.current;
    if (null == e || null == t) return;
    let n = new MutationObserver(() => Y());
    return n.observe(e, {
      childList: true,
      subtree: true
    }), () => {
      n.disconnect()
    }
  }, [B, es, Y]);
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
      eo.dispatch(P.CkL.POPOUT_CLOSE)
    },
    ed = "top" === V ? "".concat(j, " ").concat(j, " 0 0") : "0 0 ".concat(j, " ").concat(j),
    ef = () => {
      (0, E._3)({
        questId: Z.id,
        questContent: b.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.OPEN_DISCLOSURE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.jn.MEMBERS_LIST
      }), (0, A.openDisclosureModal)(Z, {
        content: b.jn.MEMBERS_LIST,
        ctaContent: E.jZ.OPEN_DISCLOSURE,
        sourceQuestContent: b.jn.MEMBERS_LIST
      })
    },
    ep = () => {
      (0, E._3)({
        questId: Z.id,
        questContent: b.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.LEARN_MORE,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.jn.MEMBERS_LIST
      }), (0, A.navigateToQuestHome)({
        fromContent: b.jn.MEMBERS_LIST,
        questId: Z.id
      })
    },
    e_ = e => {
      e.stopPropagation(), ef()
    },
    em = () => {
      (0, S.Rc)(F, z) && null != z ? ((0, E._3)({
        questId: Z.id,
        questContent: b.jn.MEMBERS_LIST,
        questContentCTA: E.jZ.WATCH_STREAM,
        trackGuildAndChannelMetadata: true,
        sourceQuestContent: b.jn.MEMBERS_LIST
      }), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("85045").then(n.bind(n, 748862));
        return t => (0, r.jsx)(e, L({
          username: null != K ? K : "",
          onConfirm: () => ((0, E._3)({
            questId: Z.id,
            questContent: b.jn.MEMBERS_LIST,
            questContentCTA: E.jZ.WATCH_STREAM_CONFIRM,
            trackGuildAndChannelMetadata: true,
            sourceQuestContent: b.jn.MEMBERS_LIST
          }), d.default.selectVoiceChannel(z.id), (0, f.iV)(F))
        }, t))
      })) : ep()
    },
    eh = (0, y.CR)({
      quest: Z
    }),
    eg = (() => {
      if (J && !Q) return {
        headerText: D.intl.string(D.t.gHerLS),
        ctaText: D.intl.string(D.t.cfY4PE),
        handleClickCta: q,
        tileAssetType: "reward"
      };
      if (X && !Q) return {
        headerText: D.intl.string(D.t.uH2sf2),
        ctaText: D.intl.string(D.t.VN1Ajl),
        handleClickCta: ep,
        tileAssetType: "reward"
      };
      if ((0, S.Rc)(F, z)) return {
        headerText: D.intl.string(D.t.Bz6SkH),
        ctaText: D.intl.string(D.t.BXFP30),
        handleClickCta: em,
        tileAssetType: "game"
      };
      let e = (0, S.Rt)(Z) ? eh : D.intl.string(D.t["BSXPZ+"]);
      return {
        headerText: (0, S.Rt)(Z) && (0, v.pO)(Z) && !Z.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY) ? e : D.intl.string(D.t.Bz6SkH),
        ctaText: e,
        handleClickCta: ep,
        tileAssetType: "game"
      }
    })();
  return (0, r.jsx)(a.animated.div, {
    ref: e => {
      W.current = e
    },
    "aria-expanded": ei,
    className: w.wrapper,
    style: {
      width: null != (G = null == (U = B.current) ? true : U.clientWidth) ? G : k,
      height: el.height,
      overflow: ei ? "visible" : "hidden",
      borderRadius: ed
    },
    children: (0, r.jsxs)("div", {
      ref: e => {
        en.current = e
      },
      className: w.container,
      style: {
        borderRadius: ed
      },
      children: [(0, r.jsxs)("div", {
        className: w.top,
        children: [(0, r.jsxs)("div", {
          className: w.left,
          children: [(0, r.jsx)(u.Heading, {
            variant: "heading-sm/semibold",
            children: eg.headerText
          }), (0, r.jsxs)(u.P3F, {
            className: w.help,
            onClick: e => {
              eu(), e_(e)
            },
            children: [(0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              className: w.helpText,
              children: D.intl.format(D.t["Lm8/mH"], {
                gamePublisher: Z.config.messages.gamePublisher
              })
            }), (0, r.jsx)(u.idN, {
              size: "custom",
              className: w.helpIcon,
              width: M,
              height: M,
              color: u.TVs.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })]
        }), (0, r.jsx)("div", {
          className: w.right,
          children: (0, r.jsxs)("div", {
            className: w.imgWrapper,
            children: [ec((e, t) => t && (0, r.jsx)(a.animated.div, {
              style: e,
              className: w.imgUnderlay
            })), "game" === eg.tileAssetType && (0, r.jsx)("img", {
              alt: D.intl.formatToPlainString(D.t.IskzPg, {
                gameTitle: Z.config.messages.gameTitle,
                gamePublisher: Z.config.messages.gamePublisher
              }),
              className: w.assetTile,
              src: (0, O.fh)(Z, O.eC.GAME_TILE, ee).url
            }), "reward" === eg.tileAssetType && (0, r.jsx)(C.Z, {
              className: w.assetTile,
              quest: Z,
              questContent: b.jn.MEMBERS_LIST,
              learnMoreStyle: "icon",
              location: N.dr.MEMBERS_LIST,
              onClick: eu,
              sourceQuestContent: b.jn.MEMBERS_LIST
            })]
          })
        })]
      }), (0, r.jsx)(l.zxk, {
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
  return (0, r.jsx)(I.A, {
    questOrQuests: e.quest,
    questContent: b.jn.MEMBERS_LIST,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: b.jn.MEMBERS_LIST,
    children: t => (0, r.jsx)(U, L({
      impressionRef: t
    }, e))
  })
}