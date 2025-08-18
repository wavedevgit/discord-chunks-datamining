/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function L(e) {
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

function V(e) {
  var t, n, o, a, C, x, N;
  let {
    transitionState: V,
    onClose: B,
    quest: Z,
    autoplay: F,
    videoSessionId: U,
    impressionRef: q,
    parentModalOpenStartClockTime: Y,
    sourceQuestContent: H
  } = e, Q = (0, O.il)(Z), z = (0, b.tP)(Z), G = (0, u.e7)([v.Z], () => v.Z.getState().theme), K = (0, d.wj)(G) ? k.BRd.DARK : k.BRd.LIGHT, W = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), X = (0, g.aM)(), [$, J] = l.useState(Q.progressSeconds), [ee, et] = l.useState(false), {
    completedRatio: en,
    completedRatioDisplay: er
  } = (0, b.I)(Z), [el, eo] = (0, D.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t["+5kSoa"]), 1700), ei = null != (0, O.LM)(Z.config), [ea, es] = l.useState(false), ec = l.useRef(null), eu = (0, O.vB)(Z.config), ed = (null == (t = Z.userStatus) ? true : t.claimedAt) != null ? ei ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD), em = l.useCallback(() => {
    eu && ((0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: H
    }), eo())
  }, [X, eu, Z.id, eo, H]), ep = l.useCallback(() => {
    eu && ((0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: H
    }), (0, p.showToast)((0, p.createToast)(A.intl.string(A.t["+5kSoa"]), p.ToastType.SUCCESS)), es(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
      es(false)
    }, 1700))
  }, [X, eu, Z.id, H]);
  l.useEffect(() => () => {
    null != ec.current && clearTimeout(ec.current)
  }, []);
  let ef = async () => {
    if (null != B) {
      let e = _.r.build(Z.config).application.link;
      await (0, D.qP)(e) && B()
    }(0, O.nc)(Z, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.OPEN_GAME_LINK,
      impressionId: X,
      sourceQuestContent: H
    })
  }, ev = () => {
    ((0, O.xN)(Z.config) || (0, O.Bg)(Z.config)) && B()
  }, eE = l.useMemo(() => _.r.build(Z.config).defaultRewardName, [Z]), eg = A.intl.formatToPlainString(A.t["12IWPz"], {
    rewardName: eE
  }), eO = null == (o = Z.config.taskConfigV2) || null == (n = o.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eO, "VideoQuestModal: videoTask must not be null");
  let eb = (0, O.ZS)(eO),
    eC = "portrait" === eb;
  return (0, r.jsx)(p.Y0X, {
    "data-migration-pending": true,
    transitionState: V,
    size: p.CgR.DYNAMIC,
    className: i()(w.modalRoot, {
      [w.modalRootLandscape]: "landscape" === eb,
      [w.modalRootPortrait]: "portrait" === eb
    }),
    parentComponent: "Modal",
    children: (0, r.jsx)("div", {
      ref: e => {
        q.current = e
      },
      className: w.modalBg,
      children: (0, r.jsx)("div", {
        className: w.modalBody,
        children: (0, r.jsxs)("div", {
          className: w.modalContent,
          children: [(0, r.jsxs)("div", {
            className: w.contentHeader,
            children: [(0, r.jsxs)(p.P3F, {
              className: w.contentHeaderGameInfo,
              onClick: ef,
              children: [(0, r.jsx)("img", {
                alt: Z.config.messages.gameTitle,
                className: i()(w.contentHeaderLogotype, w.accentOnHover),
                src: (0, h.fh)(Z, h.eC.LOGO_TYPE, K).url
              }), (0, r.jsx)(R.Z, {}), (0, r.jsxs)("div", {
                className: w.questHeading,
                children: [(0, r.jsx)(p.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: A.intl.format(A.t.EQa7oq, {
                    questName: Z.config.messages.questName
                  })
                }), (0, r.jsx)(p.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: Z.config.messages.gameTitle
                })]
              })]
            }), !z && (0, r.jsx)(p.ua7, {
              position: "left",
              text: eg,
              onTooltipShow: () => {
                et(true)
              },
              onTooltipHide: () => {
                et(false)
              },
              children: e => (0, r.jsx)(p.P3F, M(L({
                className: w.progressCont
              }, e), {
                children: (0, r.jsx)(y.Z, {
                  quest: Z,
                  size: 48,
                  percentComplete: en,
                  percentCompleteText: ee ? er : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(T.Z, {
                    className: w.questProgressRewardTile,
                    quest: Z,
                    questContent: S.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: I.dr.VIDEO_MODAL,
                    sourceQuestContent: H
                  })
                })
              }))
            })]
          }), (0, r.jsx)(P.Z, {
            quest: Z,
            videoTask: eO,
            videoSessionId: U,
            parentTransitionState: V,
            onOptimisticProgressUpdate: J,
            autoplay: F,
            performanceClockStartTime: Y,
            onClose: B,
            sourceQuestContent: H,
            orientation: eb
          }), eC ? (0, r.jsxs)("div", {
            className: i()(w.contentFooterPortrait, w.contentFooterButtonCont),
            children: [(0, r.jsx)(m.zx, {
              color: m.zx.Colors.PRIMARY,
              size: m.zx.Sizes.MEDIUM,
              className: w.portraitCtaBtn,
              onClick: ef,
              children: A.intl.string(A.t.nL0WvL)
            }), (0, r.jsx)(j.i, {
              className: w.portraitCtaBtn,
              size: m.zx.Sizes.MEDIUM,
              quest: Z,
              useReducedMotion: W,
              isExpanded: (null == (a = Z.userStatus) ? true : a.completedAt) != null,
              disabled: (null == (C = Z.userStatus) ? true : C.completedAt) == null,
              ctaLabel: ed,
              onClick: ev,
              questContent: S.jn.VIDEO_MODAL,
              sourceQuestContent: H
            }), eu && (0, r.jsx)(m.zx, {
              color: m.zx.Colors.PRIMARY,
              onClick: ep,
              size: m.zx.Sizes.MEDIUM,
              className: i()(w.copyLinkBtn, w.footerBtn),
              "aria-label": A.intl.string(A.t.RDE0SU),
              children: ea ? (0, r.jsx)(p.owK, {
                size: "md",
                color: p.TVs.colors.TEXT_FEEDBACK_POSITIVE
              }) : (0, r.jsx)(p.ua7, {
                text: A.intl.string(A.t.WqhZsr),
                children: e => (0, r.jsx)(p.TIy, L({
                  size: "md",
                  color: "currentColor"
                }, e))
              })
            })]
          }) : (0, r.jsxs)("div", {
            className: w.contentFooter,
            children: [(0, r.jsx)(m.zx, {
              onClick: B,
              color: m.zx.Colors.PRIMARY,
              size: m.zx.Sizes.MEDIUM,
              className: w.footerBtn,
              children: A.intl.string(A.t.cpT0Cg)
            }), (0, r.jsxs)("div", {
              className: w.contentFooterButtonCont,
              children: [eu && (0, r.jsx)(m.zx, {
                color: m.zx.Colors.PRIMARY,
                onClick: em,
                size: m.zx.Sizes.MEDIUM,
                className: i()(w.copyLinkBtn, w.footerBtn),
                children: el
              }), (0, r.jsx)(j.i, {
                className: w.claimBtn,
                size: m.zx.Sizes.MEDIUM,
                quest: Z,
                useReducedMotion: W,
                isExpanded: (null == (x = Z.userStatus) ? true : x.completedAt) != null,
                disabled: (null == (N = Z.userStatus) ? true : N.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: S.jn.VIDEO_MODAL,
                sourceQuestContent: H
              })]
            })]
          })]
        })
      })
    })
  })
}

function B(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: l,
    openStartClockTime: o
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
  let a = (0, u.e7)([C.Z], () => C.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? (0, r.jsx)(x.A, {
    questOrQuests: s,
    questContent: S.jn.VIDEO_MODAL,
    minViewTimeSeconds: N.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: i.sourceQuestContent,
    children: e => (0, r.jsx)(V, M(L({}, i), {
      parentModalOpenStartClockTime: o,
      impressionRef: e,
      quest: s,
      autoplay: l
    }))
  }) : null
}