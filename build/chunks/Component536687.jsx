/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk472144 = require("./472144.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk604162 = require("./604162.js"),
  Chunk747717 = require("./747717.jsx"),
  Chunk963123 = require("./963123.jsx"),
  Chunk281055 = require("./281055.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430799 = require("./430799.js");

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

function M(e, t) {
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

function B(e) {
  var t, n, l, i, S, x, I;
  let {
    transitionState: B,
    onClose: V,
    quest: F,
    autoplay: Z,
    videoSessionId: U,
    impressionRef: q,
    parentModalOpenStartClockTime: H,
    sourceQuestContent: Y
  } = e, G = (0, _.il)(F), Q = (0, g.tP)(F), z = (0, u.e7)([v.Z], () => v.Z.getState().theme), K = (0, d.wj)(z) ? k.BRd.DARK : k.BRd.LIGHT, W = (0, u.e7)([p.Z], () => p.Z.useReducedMotion), X = (0, E.aM)(), [$, J] = o.useState(G.progressSeconds), [ee, et] = o.useState(false), {
    completedRatio: en,
    completedRatioDisplay: er
  } = (0, g.I)(F), [eo, el] = (0, P.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t["+5kSoa"]), 1700), ea = null != (0, _.LM)(F.config), [ei, es] = o.useState(false), ec = o.useRef(null), eu = (0, _.vB)(F.config), ed = (null == (t = F.userStatus) ? true : t.claimedAt) != null ? ea ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD), ef = o.useCallback(() => {
    eu && ((0, _.f2)(F.id, {
      content: O.jn.VIDEO_MODAL,
      ctaContent: C.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: Y
    }), el())
  }, [X, eu, F.id, el, Y]), em = o.useCallback(() => {
    eu && ((0, _.f2)(F.id, {
      content: O.jn.VIDEO_MODAL,
      ctaContent: C.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: Y
    }), (0, m.showToast)((0, m.createToast)(A.intl.string(A.t["+5kSoa"]), m.ToastType.SUCCESS)), es(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
      es(false)
    }, 1700))
  }, [X, eu, F.id, Y]);
  o.useEffect(() => () => {
    null != ec.current && clearTimeout(ec.current)
  }, []);
  let ep = async () => {
    if (null != V) {
      let e = h.r.build(F.config).application.link;
      await (0, P.qP)(e) && V()
    }(0, _.nc)(F, {
      content: O.jn.VIDEO_MODAL,
      ctaContent: C.jZ.OPEN_GAME_LINK,
      impressionId: X,
      sourceQuestContent: Y
    })
  }, ev = () => {
    ((0, _.xN)(F.config) || (0, _.Bg)(F.config)) && V()
  }, eC = o.useMemo(() => h.r.build(F.config).defaultRewardName, [F]), eE = A.intl.formatToPlainString(A.t["12IWPz"], {
    rewardName: eC
  }), e_ = null == (l = F.config.taskConfigV2) || null == (n = l.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != e_, "VideoQuestModal: videoTask must not be null");
  let eg = (0, _.ZS)(e_),
    eS = "portrait" === eg;
  return (0, r.jsx)(m.Y0X, {
    "data-migration-pending": true,
    transitionState: B,
    size: m.CgR.DYNAMIC,
    className: a()(L.modalRoot, {
      [L.modalRootLandscape]: "landscape" === eg,
      [L.modalRootPortrait]: "portrait" === eg
    }),
    parentComponent: "Modal",
    children: (0, r.jsx)("div", {
      ref: e => {
        q.current = e
      },
      className: L.modalBg,
      children: (0, r.jsx)("div", {
        className: L.modalBody,
        children: (0, r.jsxs)("div", {
          className: L.modalContent,
          children: [(0, r.jsxs)("div", {
            className: L.contentHeader,
            children: [(0, r.jsxs)(m.P3F, {
              className: L.contentHeaderGameInfo,
              onClick: ep,
              children: [(0, r.jsx)("img", {
                alt: F.config.messages.gameTitle,
                className: a()(L.contentHeaderLogotype, L.accentOnHover),
                src: (0, b.fh)(F, b.eC.LOGO_TYPE, K).url
              }), (0, r.jsx)(D.Z, {}), (0, r.jsxs)("div", {
                className: L.questHeading,
                children: [(0, r.jsx)(m.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: A.intl.format(A.t.EQa7oq, {
                    questName: F.config.messages.questName
                  })
                }), (0, r.jsx)(m.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: F.config.messages.gameTitle
                })]
              })]
            }), !Q && (0, r.jsx)(m.ua7, {
              position: "left",
              text: eE,
              onTooltipShow: () => {
                et(true)
              },
              onTooltipHide: () => {
                et(false)
              },
              children: e => (0, r.jsx)(m.P3F, M(w({
                className: L.progressCont
              }, e), {
                children: (0, r.jsx)(j.Z, {
                  quest: F,
                  size: 48,
                  percentComplete: en,
                  percentCompleteText: ee ? er : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(T.Z, {
                    className: L.questProgressRewardTile,
                    quest: F,
                    questContent: O.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: N.dr.VIDEO_MODAL,
                    sourceQuestContent: Y
                  })
                })
              }))
            })]
          }), (0, r.jsx)(R.Z, {
            quest: F,
            videoTask: e_,
            videoSessionId: U,
            parentTransitionState: B,
            onOptimisticProgressUpdate: J,
            autoplay: Z,
            performanceClockStartTime: H,
            onClose: V,
            sourceQuestContent: Y,
            orientation: eg
          }), eS ? (0, r.jsxs)("div", {
            className: a()(L.contentFooterPortrait, L.contentFooterButtonCont),
            children: [(0, r.jsx)(f.zx, {
              color: f.zx.Colors.PRIMARY,
              size: f.zx.Sizes.MEDIUM,
              className: L.portraitCtaBtn,
              onClick: ep,
              children: A.intl.string(A.t.nL0WvL)
            }), (0, r.jsx)(y.i, {
              className: L.portraitCtaBtn,
              size: f.zx.Sizes.MEDIUM,
              quest: F,
              useReducedMotion: W,
              isExpanded: (null == (i = F.userStatus) ? true : i.completedAt) != null,
              disabled: (null == (S = F.userStatus) ? true : S.completedAt) == null,
              ctaLabel: ed,
              onClick: ev,
              questContent: O.jn.VIDEO_MODAL,
              sourceQuestContent: Y
            }), eu && (0, r.jsx)(f.zx, {
              color: f.zx.Colors.PRIMARY,
              onClick: em,
              size: f.zx.Sizes.MEDIUM,
              className: a()(L.copyLinkBtn, L.footerBtn),
              "aria-label": A.intl.string(A.t.RDE0SU),
              children: ei ? (0, r.jsx)(m.owK, {
                size: "md",
                color: m.TVs.colors.TEXT_FEEDBACK_POSITIVE
              }) : (0, r.jsx)(m.ua7, {
                text: A.intl.string(A.t.WqhZsr),
                children: e => (0, r.jsx)(m.TIy, w({
                  size: "md",
                  color: "currentColor"
                }, e))
              })
            })]
          }) : (0, r.jsxs)("div", {
            className: L.contentFooter,
            children: [(0, r.jsx)(f.zx, {
              onClick: V,
              color: f.zx.Colors.PRIMARY,
              size: f.zx.Sizes.MEDIUM,
              className: L.footerBtn,
              children: A.intl.string(A.t.cpT0Cg)
            }), (0, r.jsxs)("div", {
              className: L.contentFooterButtonCont,
              children: [eu && (0, r.jsx)(f.zx, {
                color: f.zx.Colors.PRIMARY,
                onClick: ef,
                size: f.zx.Sizes.MEDIUM,
                className: a()(L.copyLinkBtn, L.footerBtn),
                children: eo
              }), (0, r.jsx)(y.i, {
                className: L.claimBtn,
                size: f.zx.Sizes.MEDIUM,
                quest: F,
                useReducedMotion: W,
                isExpanded: (null == (x = F.userStatus) ? true : x.completedAt) != null,
                disabled: (null == (I = F.userStatus) ? true : I.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: O.jn.VIDEO_MODAL,
                sourceQuestContent: Y
              })]
            })]
          })]
        })
      })
    })
  })
}

function V(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: o,
    openStartClockTime: l
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
  let i = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
    s = null != n ? n : i;
  return null != s ? (0, r.jsx)(x.A, {
    questOrQuests: s,
    questContent: O.jn.VIDEO_MODAL,
    minViewTimeSeconds: I.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: a.sourceQuestContent,
    children: e => (0, r.jsx)(B, M(w({}, a), {
      parentModalOpenStartClockTime: l,
      impressionRef: e,
      quest: s,
      autoplay: o
    }))
  }) : null
}