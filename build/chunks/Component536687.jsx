/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function B(e) {
  var t, n, a, i, S, x, R;
  let {
    transitionState: B,
    onClose: V,
    quest: F,
    autoplay: Z,
    videoSessionId: q,
    impressionRef: U,
    parentModalOpenStartClockTime: H,
    sourceQuestContent: G
  } = e, Q = (0, C.il)(F), Y = (0, E.tP)(F), W = (0, u.e7)([v.Z], () => v.Z.getState().theme), z = (0, d.wj)(W) ? N.BRd.DARK : N.BRd.LIGHT, K = (0, u.e7)([m.Z], () => m.Z.useReducedMotion), X = (0, _.aM)(), [$, J] = o.useState(Q.progressSeconds), [ee, et] = o.useState(false), {
    completedRatio: en,
    completedRatioDisplay: er
  } = (0, E.I)(F), [eo, ea] = (0, D.G6)(A.intl.string(A.t.RDE0SU), A.intl.string(A.t["+5kSoa"]), 1700), el = null != (0, C.LM)(F.config), [ei, es] = o.useState(false), ec = o.useRef(null), eu = (0, C.vB)(F.config), ed = (null == (t = F.userStatus) ? true : t.claimedAt) != null ? el ? A.intl.string(A.t.WYchdX) : A.intl.string(A.t.vTgCW1) : A.intl.string(A.t.cfY4PD), ef = o.useCallback(() => {
    eu && ((0, C.f2)(F.id, {
      content: b.jn.VIDEO_MODAL,
      ctaContent: g.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: G
    }), ea())
  }, [X, eu, F.id, ea, G]), ep = o.useCallback(() => {
    eu && ((0, C.f2)(F.id, {
      content: b.jn.VIDEO_MODAL,
      ctaContent: g.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: G
    }), (0, p.showToast)((0, p.createToast)(A.intl.string(A.t["+5kSoa"]), p.ToastType.SUCCESS)), es(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
      es(false)
    }, 1700))
  }, [X, eu, F.id, G]);
  o.useEffect(() => () => {
    null != ec.current && clearTimeout(ec.current)
  }, []);
  let em = async () => {
    if (null != V) {
      let e = h.r.build(F.config).application.link;
      await (0, D.qP)(e) && V()
    }(0, C.nc)(F, {
      content: b.jn.VIDEO_MODAL,
      ctaContent: g.jZ.OPEN_GAME_LINK,
      impressionId: X,
      sourceQuestContent: G
    })
  }, ev = () => {
    ((0, C.xN)(F.config) || (0, C.Bg)(F.config)) && V()
  }, eg = o.useMemo(() => h.r.build(F.config).defaultRewardName, [F]), e_ = A.intl.formatToPlainString(A.t["12IWPz"], {
    rewardName: eg
  }), eC = null == (a = F.config.taskConfigV2) || null == (n = a.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eC, "VideoQuestModal: videoTask must not be null");
  let eE = (0, C.ZS)(eC),
    eS = "portrait" === eE;
  return (0, r.jsx)(p.Y0X, {
    "data-migration-pending": true,
    transitionState: B,
    size: p.CgR.DYNAMIC,
    className: l()(w.modalRoot, {
      [w.modalRootLandscape]: "landscape" === eE,
      [w.modalRootPortrait]: "portrait" === eE
    }),
    parentComponent: "Modal",
    children: (0, r.jsx)("div", {
      ref: e => {
        U.current = e
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
              onClick: em,
              children: [(0, r.jsx)("img", {
                alt: F.config.messages.gameTitle,
                className: l()(w.contentHeaderLogotype, w.accentOnHover),
                src: (0, O.fh)(F, O.eC.LOGO_TYPE, z).url
              }), (0, r.jsx)(P.Z, {}), (0, r.jsxs)("div", {
                className: w.questHeading,
                children: [(0, r.jsx)(p.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: A.intl.format(A.t.EQa7oq, {
                    questName: F.config.messages.questName
                  })
                }), (0, r.jsx)(p.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: F.config.messages.gameTitle
                })]
              })]
            }), !Y && (0, r.jsx)(p.ua7, {
              position: "left",
              text: e_,
              onTooltipShow: () => {
                et(true)
              },
              onTooltipHide: () => {
                et(false)
              },
              children: e => (0, r.jsx)(p.P3F, M(L({
                className: w.progressCont
              }, e), {
                children: (0, r.jsx)(j.Z, {
                  quest: F,
                  size: 48,
                  percentComplete: en,
                  percentCompleteText: ee ? er : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(T.Z, {
                    className: w.questProgressRewardTile,
                    quest: F,
                    questContent: b.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: k.dr.VIDEO_MODAL,
                    sourceQuestContent: G
                  })
                })
              }))
            })]
          }), (0, r.jsx)(I.Z, {
            quest: F,
            videoTask: eC,
            videoSessionId: q,
            parentTransitionState: B,
            onOptimisticProgressUpdate: J,
            autoplay: Z,
            performanceClockStartTime: H,
            onClose: V,
            sourceQuestContent: G,
            orientation: eE
          }), eS ? (0, r.jsxs)("div", {
            className: l()(w.contentFooterPortrait, w.contentFooterButtonCont),
            children: [(0, r.jsx)("div", {
              className: w.portraitCtaBtnWrapper,
              children: (0, r.jsx)(p.zxk, {
                variant: "secondary",
                text: A.intl.string(A.t.nL0WvL),
                onClick: em,
                fullWidth: true
              })
            }), (0, r.jsx)("div", {
              className: w.portraitCtaBtnWrapper,
              children: (0, r.jsx)(y.i, {
                className: w.portraitCtaBtn,
                size: f.zx.Sizes.MEDIUM,
                quest: F,
                useReducedMotion: K,
                isExpanded: (null == (i = F.userStatus) ? true : i.completedAt) != null,
                disabled: (null == (S = F.userStatus) ? true : S.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: b.jn.VIDEO_MODAL,
                sourceQuestContent: G
              })
            }), eu && (ei ? (0, r.jsx)(p.hU, {
              variant: "active",
              icon: p.owK,
              onClick: ep,
              "aria-label": A.intl.string(A.t.RDE0SU)
            }) : (0, r.jsx)(p.ua7, {
              text: A.intl.string(A.t.WqhZsr),
              children: e => (0, r.jsx)(p.hU, M(L({
                variant: "secondary",
                icon: p.TIy,
                "aria-label": A.intl.string(A.t.RDE0SU)
              }, e), {
                onClick: ep
              }))
            }))]
          }) : (0, r.jsxs)("div", {
            className: w.contentFooter,
            children: [(0, r.jsx)(p.zxk, {
              variant: "secondary",
              text: A.intl.string(A.t.cpT0Cg),
              onClick: V
            }), (0, r.jsxs)("div", {
              className: w.contentFooterButtonCont,
              children: [eu && (0, r.jsx)(p.zxk, {
                variant: "secondary",
                text: eo,
                onClick: ef
              }), (0, r.jsx)(y.i, {
                className: w.claimBtn,
                size: f.zx.Sizes.MEDIUM,
                quest: F,
                useReducedMotion: K,
                isExpanded: (null == (x = F.userStatus) ? true : x.completedAt) != null,
                disabled: (null == (R = F.userStatus) ? true : R.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: b.jn.VIDEO_MODAL,
                sourceQuestContent: G
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
    openStartClockTime: a
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
  let i = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
    s = null != n ? n : i;
  return null != s ? (0, r.jsx)(x.A, {
    questOrQuests: s,
    questContent: b.jn.VIDEO_MODAL,
    minViewTimeSeconds: R.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: l.sourceQuestContent,
    children: e => (0, r.jsx)(B, M(L({}, l), {
      parentModalOpenStartClockTime: a,
      impressionRef: e,
      quest: s,
      autoplay: o
    }))
  }) : null
}