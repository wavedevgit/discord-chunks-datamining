/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => Z
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
  Chunk946232 = require("./946232.js");

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
  var t, n, o, a, h, x, I;
  let {
    transitionState: V,
    onClose: Z,
    quest: B,
    autoplay: F,
    videoSessionId: q,
    impressionRef: U,
    parentModalOpenStartClockTime: H,
    sourceQuestContent: Q
  } = e, Y = (0, O.il)(B), G = (0, b.tP)(B), z = (0, u.e7)([v.Z], () => v.Z.getState().theme), W = (0, d.wj)(z) ? k.BRd.DARK : k.BRd.LIGHT, K = (0, u.e7)([f.Z], () => f.Z.useReducedMotion), X = (0, g.aM)(), [$, J] = l.useState(Y.progressSeconds), [ee, et] = l.useState(false), {
    completedRatio: en,
    completedRatioDisplay: er
  } = (0, b.I)(B), [el, eo] = (0, D.G6)(w.intl.string(w.t.RDE0SU), w.intl.string(w.t["+5kSoa"]), 1700), ei = null != (0, O.LM)(B.config), [ea, es] = l.useState(false), ec = l.useRef(null), eu = (0, O.vB)(B.config), ed = (null == (t = B.userStatus) ? true : t.claimedAt) != null ? ei ? w.intl.string(w.t.WYchdX) : w.intl.string(w.t.vTgCW1) : w.intl.string(w.t.cfY4PD), em = l.useCallback(() => {
    eu && ((0, O.f2)(B.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: Q
    }), eo())
  }, [X, eu, B.id, eo, Q]), ep = l.useCallback(() => {
    eu && ((0, O.f2)(B.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: X,
      sourceQuestContent: Q
    }), (0, p.showToast)((0, p.createToast)(w.intl.string(w.t["+5kSoa"]), p.ToastType.SUCCESS)), es(true), null != ec.current && clearTimeout(ec.current), ec.current = setTimeout(() => {
      es(false)
    }, 1700))
  }, [X, eu, B.id, Q]);
  l.useEffect(() => () => {
    null != ec.current && clearTimeout(ec.current)
  }, []);
  let ef = async () => {
    if (null != Z) {
      let e = _.r.build(B.config).application.link;
      await (0, D.qP)(e) && Z()
    }(0, O.nc)(B, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.OPEN_GAME_LINK,
      impressionId: X,
      sourceQuestContent: Q
    })
  }, ev = () => {
    ((0, O.xN)(B.config) || (0, O.Bg)(B.config)) && Z()
  }, eE = l.useMemo(() => _.r.build(B.config).defaultRewardName, [B]), eg = w.intl.formatToPlainString(w.t["12IWPz"], {
    rewardName: eE
  }), eO = null == (o = B.config.taskConfigV2) || null == (n = o.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eO, "VideoQuestModal: videoTask must not be null");
  let eb = (0, O.ZS)(eO),
    eh = "portrait" === eb;
  return (0, r.jsx)(p.Y0X, {
    "data-migration-pending": true,
    transitionState: V,
    size: p.CgR.DYNAMIC,
    className: i()(A.modalRoot, {
      [A.modalRootLandscape]: "landscape" === eb,
      [A.modalRootPortrait]: "portrait" === eb
    }),
    parentComponent: "Modal",
    children: (0, r.jsx)("div", {
      ref: e => {
        U.current = e
      },
      className: A.modalBg,
      children: (0, r.jsx)("div", {
        className: A.modalBody,
        children: (0, r.jsxs)("div", {
          className: A.modalContent,
          children: [(0, r.jsxs)("div", {
            className: A.contentHeader,
            children: [(0, r.jsxs)(p.P3F, {
              className: A.contentHeaderGameInfo,
              onClick: ef,
              children: [(0, r.jsx)("img", {
                alt: B.config.messages.gameTitle,
                className: i()(A.contentHeaderLogotype, A.accentOnHover),
                src: (0, C.fh)(B, C.eC.LOGO_TYPE, W).url
              }), (0, r.jsx)(R.Z, {}), (0, r.jsxs)("div", {
                className: A.questHeading,
                children: [(0, r.jsx)(p.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: w.intl.format(w.t.EQa7oq, {
                    questName: B.config.messages.questName
                  })
                }), (0, r.jsx)(p.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: B.config.messages.gameTitle
                })]
              })]
            }), !G && (0, r.jsx)(p.ua7, {
              position: "left",
              text: eg,
              onTooltipShow: () => {
                et(true)
              },
              onTooltipHide: () => {
                et(false)
              },
              children: e => (0, r.jsx)(p.P3F, M(L({
                className: A.progressCont
              }, e), {
                children: (0, r.jsx)(j.Z, {
                  quest: B,
                  size: 48,
                  percentComplete: en,
                  percentCompleteText: ee ? er : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(T.Z, {
                    className: A.questProgressRewardTile,
                    quest: B,
                    questContent: S.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: N.dr.VIDEO_MODAL,
                    sourceQuestContent: Q
                  })
                })
              }))
            })]
          }), (0, r.jsx)(P.Z, {
            quest: B,
            videoTask: eO,
            videoSessionId: q,
            parentTransitionState: V,
            onOptimisticProgressUpdate: J,
            autoplay: F,
            performanceClockStartTime: H,
            onClose: Z,
            sourceQuestContent: Q,
            orientation: eb
          }), eh ? (0, r.jsxs)("div", {
            className: i()(A.contentFooterPortrait, A.contentFooterButtonCont),
            children: [(0, r.jsx)("div", {
              className: A.portraitCtaBtnWrapper,
              children: (0, r.jsx)(p.zxk, {
                variant: "secondary",
                text: w.intl.string(w.t.nL0WvL),
                onClick: ef,
                fullWidth: true
              })
            }), (0, r.jsx)("div", {
              className: A.portraitCtaBtnWrapper,
              children: (0, r.jsx)(y.i, {
                className: A.portraitCtaBtn,
                size: m.zx.Sizes.MEDIUM,
                quest: B,
                useReducedMotion: K,
                isExpanded: (null == (a = B.userStatus) ? true : a.completedAt) != null,
                disabled: (null == (h = B.userStatus) ? true : h.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: S.jn.VIDEO_MODAL,
                sourceQuestContent: Q
              })
            }), eu && (ea ? (0, r.jsx)(p.hU, {
              variant: "active",
              icon: p.owK,
              onClick: ep,
              "aria-label": w.intl.string(w.t.RDE0SU)
            }) : (0, r.jsx)(p.ua7, {
              text: w.intl.string(w.t.WqhZsr),
              children: e => (0, r.jsx)(p.hU, M(L({
                variant: "secondary",
                icon: p.TIy,
                "aria-label": w.intl.string(w.t.RDE0SU)
              }, e), {
                onClick: ep
              }))
            }))]
          }) : (0, r.jsxs)("div", {
            className: A.contentFooter,
            children: [(0, r.jsx)(p.zxk, {
              variant: "secondary",
              text: w.intl.string(w.t.cpT0Cg),
              onClick: Z
            }), (0, r.jsxs)("div", {
              className: A.contentFooterButtonCont,
              children: [eu && (0, r.jsx)(p.zxk, {
                variant: "secondary",
                text: el,
                onClick: em
              }), (0, r.jsx)(y.i, {
                className: A.claimBtn,
                size: m.zx.Sizes.MEDIUM,
                quest: B,
                useReducedMotion: K,
                isExpanded: (null == (x = B.userStatus) ? true : x.completedAt) != null,
                disabled: (null == (I = B.userStatus) ? true : I.completedAt) == null,
                ctaLabel: ed,
                onClick: ev,
                questContent: S.jn.VIDEO_MODAL,
                sourceQuestContent: Q
              })]
            })]
          })]
        })
      })
    })
  })
}

function Z(e) {
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
  let a = (0, u.e7)([h.Z], () => h.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? (0, r.jsx)(x.A, {
    questOrQuests: s,
    questContent: S.jn.VIDEO_MODAL,
    minViewTimeSeconds: I.zw,
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