/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function M(e) {
  var t, n, o, a, C, T, N;
  let {
    transitionState: M,
    onClose: V,
    quest: Z,
    autoplay: B,
    videoSessionId: F,
    impressionRef: U,
    parentModalOpenStartClockTime: q,
    sourceQuestContent: H
  } = e, Y = (0, O.il)(Z), Q = (0, h.tP)(Z), G = (0, u.e7)([g.Z], () => g.Z.getState().theme), W = (0, m.wj)(G) ? w.BRd.DARK : w.BRd.LIGHT, z = (0, u.e7)([v.Z], () => v.Z.useReducedMotion), K = (0, b.aM)(), [X, J] = l.useState(Y.progressSeconds), [$, ee] = l.useState(false), {
    completedRatio: et,
    completedRatioDisplay: en
  } = (0, h.I)(Z), [er, el] = (0, P.G6)(A.intl.string(A.t.RDE0Sc), A.intl.string(A.t["+5kSoW"]), 1700), eo = null != (0, O.LM)(Z.config), [ei, ea] = l.useState(false), es = l.useRef(null), ec = (0, O.vB)(Z.config), eu = (null == (t = Z.userStatus) ? true : t.claimedAt) != null ? eo ? A.intl.string(A.t.WYchde) : A.intl.string(A.t.vTgCWx) : A.intl.string(A.t.cfY4PE), ed = l.useCallback(() => {
    ec && ((0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: K,
      sourceQuestContent: H
    }), el())
  }, [K, ec, Z.id, el, H]), em = l.useCallback(() => {
    ec && ((0, O.f2)(Z.id, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.COPY_QUEST_URL,
      impressionId: K,
      sourceQuestContent: H
    }), (0, p.showToast)((0, p.createToast)(A.intl.string(A.t["+5kSoW"]), p.ToastType.SUCCESS)), ea(true), null != es.current && clearTimeout(es.current), es.current = setTimeout(() => {
      ea(false)
    }, 1700))
  }, [K, ec, Z.id, H]);
  l.useEffect(() => () => {
    null != es.current && clearTimeout(es.current)
  }, []);
  let ef = async () => {
    if (null != V) {
      let e = y.r.build(Z.config).ctaLink;
      await (0, P.PW)(e) && V()
    }(0, O.nc)(Z, {
      content: S.jn.VIDEO_MODAL,
      ctaContent: E.jZ.OPEN_GAME_LINK,
      impressionId: K,
      sourceQuestContent: H
    })
  }, ep = () => {
    ((0, O.xN)(Z.config) || (0, O.Bg)(Z.config)) && V()
  }, ev = l.useMemo(() => y.r.build(Z.config).defaultRewardName, [Z]), eg = A.intl.formatToPlainString(A.t["12IWP2"], {
    rewardName: ev
  }), eE = null == (o = Z.config.taskConfigV2) || null == (n = o.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eE, "VideoQuestModal: videoTask must not be null");
  let eb = (0, O.ZS)(eE),
    eO = "portrait" === eb;
  return (0, r.jsx)(p.Y0X, {
    "data-migration-pending": true,
    transitionState: M,
    size: p.CgR.DYNAMIC,
    className: i()(L.modalRoot, {
      [L.modalRootLandscape]: "landscape" === eb,
      [L.modalRootPortrait]: "portrait" === eb
    }),
    parentComponent: "Modal",
    children: (0, r.jsx)("div", {
      ref: e => {
        U.current = e
      },
      className: L.modalBg,
      children: (0, r.jsx)("div", {
        className: L.modalBody,
        children: (0, r.jsxs)("div", {
          className: L.modalContent,
          children: [(0, r.jsxs)("div", {
            className: L.contentHeader,
            children: [(0, r.jsxs)(p.P3F, {
              className: L.contentHeaderGameInfo,
              onClick: ef,
              children: [(0, r.jsx)("img", {
                alt: Z.config.messages.gameTitle,
                className: i()(L.contentHeaderLogotype, L.accentOnHover),
                src: (0, _.fh)(Z, _.eC.LOGO_TYPE, W).url
              }), (0, r.jsx)(R.Z, {}), (0, r.jsxs)("div", {
                className: L.questHeading,
                children: [(0, r.jsx)(p.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: A.intl.format(A.t.EQa7os, {
                    questName: Z.config.messages.questName
                  })
                }), (0, r.jsx)(p.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: Z.config.messages.gameTitle
                })]
              })]
            }), !Q && (0, r.jsx)(d.u, {
              position: "left",
              text: eg,
              onTooltipShow: () => {
                ee(true)
              },
              onTooltipHide: () => {
                ee(false)
              },
              children: (0, r.jsx)(p.P3F, {
                className: L.progressCont,
                children: (0, r.jsx)(x.Z, {
                  quest: Z,
                  size: 48,
                  percentComplete: et,
                  percentCompleteText: $ ? en : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(D.Z, {
                    className: L.questProgressRewardTile,
                    quest: Z,
                    questContent: S.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: k.dr.VIDEO_MODAL,
                    sourceQuestContent: H
                  })
                })
              })
            })]
          }), (0, r.jsx)(I.Z, {
            quest: Z,
            videoTask: eE,
            videoSessionId: F,
            parentTransitionState: M,
            onOptimisticProgressUpdate: J,
            autoplay: B,
            performanceClockStartTime: q,
            onClose: V,
            sourceQuestContent: H,
            orientation: eb
          }), eO ? (0, r.jsxs)("div", {
            className: i()(L.contentFooterPortrait, L.contentFooterButtonCont),
            children: [(0, r.jsx)("div", {
              className: L.portraitCtaBtnWrapper,
              children: (0, r.jsx)(p.Button, {
                variant: "secondary",
                text: A.intl.string(A.t.nL0WvC),
                onClick: ef,
                fullWidth: true
              })
            }), (0, r.jsx)("div", {
              className: L.portraitCtaBtnWrapper,
              children: (0, r.jsx)(j.i, {
                className: L.portraitCtaBtn,
                size: f.zx.Sizes.MEDIUM,
                quest: Z,
                useReducedMotion: z,
                isExpanded: (null == (a = Z.userStatus) ? true : a.completedAt) != null,
                disabled: (null == (C = Z.userStatus) ? true : C.completedAt) == null,
                ctaLabel: eu,
                onClick: ep,
                questContent: S.jn.VIDEO_MODAL,
                sourceQuestContent: H
              })
            }), ec && (ei ? (0, r.jsx)(p.hU, {
              variant: "active",
              icon: p.owK,
              onClick: em,
              "aria-label": A.intl.string(A.t.RDE0Sc)
            }) : (0, r.jsx)(d.u, {
              text: A.intl.string(A.t.WqhZss),
              children: (0, r.jsx)(p.hU, {
                variant: "secondary",
                icon: p.TIy,
                "aria-label": A.intl.string(A.t.RDE0Sc),
                onClick: em
              })
            }))]
          }) : (0, r.jsxs)("div", {
            className: L.contentFooter,
            children: [(0, r.jsx)(p.Button, {
              variant: "secondary",
              text: A.intl.string(A.t.cpT0Cq),
              onClick: V
            }), (0, r.jsxs)("div", {
              className: L.contentFooterButtonCont,
              children: [ec && (0, r.jsx)(p.Button, {
                variant: "secondary",
                text: er,
                onClick: ed
              }), (0, r.jsx)(j.i, {
                className: L.claimBtn,
                size: f.zx.Sizes.MEDIUM,
                quest: Z,
                useReducedMotion: z,
                isExpanded: (null == (T = Z.userStatus) ? true : T.completedAt) != null,
                disabled: (null == (N = Z.userStatus) ? true : N.completedAt) == null,
                ctaLabel: eu,
                onClick: ep,
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

function V(e) {
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
  return null != s ? (0, r.jsx)(T.A, {
    questOrQuests: s,
    questContent: S.jn.VIDEO_MODAL,
    minViewTimeSeconds: N.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: i.sourceQuestContent,
    children: e => {
      var t, n;
      return (0, r.jsx)(M, (t = function(e) {
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
      }({}, i), n = n = {
        parentModalOpenStartClockTime: o,
        impressionRef: e,
        quest: s,
        autoplay: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  }) : null
}