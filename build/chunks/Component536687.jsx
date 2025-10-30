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
  Chunk430799 = require("./430799.js");

function M(e) {
  var t, n, l, a, S, T, w;
  let {
    transitionState: M,
    onClose: V,
    quest: Z,
    autoplay: B,
    videoSessionId: F,
    impressionRef: U,
    parentModalOpenStartClockTime: q,
    sourceQuestContent: H
  } = e, Y = (0, b.il)(Z), Q = (0, h.tP)(Z), G = (0, u.e7)([E.Z], () => E.Z.getState().theme), W = (0, m.wj)(G) ? k.BRd.DARK : k.BRd.LIGHT, z = (0, u.e7)([v.Z], () => v.Z.useReducedMotion), K = (0, O.aM)(), [X, J] = o.useState(Y.progressSeconds), [$, ee] = o.useState(false), {
    completedRatio: et,
    completedRatioDisplay: en
  } = (0, h.I)(Z), [er, eo] = (0, P.G6)(L.intl.string(L.t.RDE0Sc), L.intl.string(L.t["+5kSoW"]), 1700), el = null != (0, b.LM)(Z.config), [ei, ea] = o.useState(false), es = o.useRef(null), ec = (0, b.vB)(Z.config), eu = (null == (t = Z.userStatus) ? true : t.claimedAt) != null ? el ? L.intl.string(L.t.WYchde) : L.intl.string(L.t.vTgCWx) : L.intl.string(L.t.cfY4PE), ed = o.useCallback(() => {
    ec && ((0, b.f2)(Z.id, {
      content: C.jn.VIDEO_MODAL,
      ctaContent: g.jZ.COPY_QUEST_URL,
      impressionId: K,
      sourceQuestContent: H
    }), eo())
  }, [K, ec, Z.id, eo, H]), em = o.useCallback(() => {
    ec && ((0, b.f2)(Z.id, {
      content: C.jn.VIDEO_MODAL,
      ctaContent: g.jZ.COPY_QUEST_URL,
      impressionId: K,
      sourceQuestContent: H
    }), (0, f.showToast)((0, f.createToast)(L.intl.string(L.t["+5kSoW"]), f.ToastType.SUCCESS)), ea(true), null != es.current && clearTimeout(es.current), es.current = setTimeout(() => {
      ea(false)
    }, 1700))
  }, [K, ec, Z.id, H]);
  o.useEffect(() => () => {
    null != es.current && clearTimeout(es.current)
  }, []);
  let ep = async () => {
    if (null != V) {
      let e = y.r.build(Z.config).ctaLink;
      await (0, P.PW)(e) && V()
    }(0, b.nc)(Z, {
      content: C.jn.VIDEO_MODAL,
      ctaContent: g.jZ.OPEN_GAME_LINK,
      impressionId: K,
      sourceQuestContent: H
    })
  }, ef = () => {
    ((0, b.xN)(Z.config) || (0, b.Bg)(Z.config)) && V()
  }, ev = o.useMemo(() => y.r.build(Z.config).defaultRewardName, [Z]), eE = L.intl.formatToPlainString(L.t["12IWP2"], {
    rewardName: ev
  }), eg = null == (l = Z.config.taskConfigV2) || null == (n = l.tasks) ? true : n[c.X.WATCH_VIDEO];
  s()(null != eg, "VideoQuestModal: videoTask must not be null");
  let eO = (0, b.ZS)(eg),
    eb = "portrait" === eO;
  return (0, r.jsx)(f.Y0X, {
    "data-migration-pending": true,
    transitionState: M,
    size: f.CgR.DYNAMIC,
    className: i()(A.modalRoot, {
      [A.modalRootLandscape]: "landscape" === eO,
      [A.modalRootPortrait]: "portrait" === eO
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
            children: [(0, r.jsxs)(f.P3F, {
              className: A.contentHeaderGameInfo,
              onClick: ep,
              children: [(0, r.jsx)("img", {
                alt: Z.config.messages.gameTitle,
                className: i()(A.contentHeaderLogotype, A.accentOnHover),
                src: (0, _.fh)(Z, _.eC.LOGO_TYPE, W).url
              }), (0, r.jsx)(R.Z, {}), (0, r.jsxs)("div", {
                className: A.questHeading,
                children: [(0, r.jsx)(f.Heading, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: L.intl.format(L.t.EQa7os, {
                    questName: Z.config.messages.questName
                  })
                }), (0, r.jsx)(f.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: Z.config.messages.gameTitle
                })]
              })]
            }), !Q && (0, r.jsx)(d.u, {
              position: "left",
              text: eE,
              onTooltipShow: () => {
                ee(true)
              },
              onTooltipHide: () => {
                ee(false)
              },
              children: (0, r.jsx)(f.P3F, {
                className: A.progressCont,
                children: (0, r.jsx)(x.Z, {
                  quest: Z,
                  size: 48,
                  percentComplete: et,
                  percentCompleteText: $ ? en : true,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(D.Z, {
                    className: A.questProgressRewardTile,
                    quest: Z,
                    questContent: C.jn.VIDEO_MODAL,
                    autoplay: false,
                    location: N.dr.VIDEO_MODAL,
                    sourceQuestContent: H
                  })
                })
              })
            })]
          }), (0, r.jsx)(I.Z, {
            quest: Z,
            videoTask: eg,
            videoSessionId: F,
            parentTransitionState: M,
            onOptimisticProgressUpdate: J,
            autoplay: B,
            performanceClockStartTime: q,
            onClose: V,
            sourceQuestContent: H,
            orientation: eO
          }), eb ? (0, r.jsxs)("div", {
            className: i()(A.contentFooterPortrait, A.contentFooterButtonCont),
            children: [(0, r.jsx)("div", {
              className: A.portraitCtaBtnWrapper,
              children: (0, r.jsx)(f.Button, {
                variant: "secondary",
                text: L.intl.string(L.t.nL0WvC),
                onClick: ep,
                fullWidth: true
              })
            }), (0, r.jsx)("div", {
              className: A.portraitCtaBtnWrapper,
              children: (0, r.jsx)(j.i, {
                className: A.portraitCtaBtn,
                size: p.zx.Sizes.MEDIUM,
                quest: Z,
                useReducedMotion: z,
                isExpanded: (null == (a = Z.userStatus) ? true : a.completedAt) != null,
                disabled: (null == (S = Z.userStatus) ? true : S.completedAt) == null,
                ctaLabel: eu,
                onClick: ef,
                questContent: C.jn.VIDEO_MODAL,
                sourceQuestContent: H
              })
            }), ec && (ei ? (0, r.jsx)(f.hU, {
              variant: "active",
              icon: f.owK,
              onClick: em,
              "aria-label": L.intl.string(L.t.RDE0Sc)
            }) : (0, r.jsx)(d.u, {
              text: L.intl.string(L.t.WqhZss),
              children: (0, r.jsx)(f.hU, {
                variant: "secondary",
                icon: f.TIy,
                "aria-label": L.intl.string(L.t.RDE0Sc),
                onClick: em
              })
            }))]
          }) : (0, r.jsxs)("div", {
            className: A.contentFooter,
            children: [(0, r.jsx)(f.Button, {
              variant: "secondary",
              text: L.intl.string(L.t.cpT0Cq),
              onClick: V
            }), (0, r.jsxs)("div", {
              className: A.contentFooterButtonCont,
              children: [ec && (0, r.jsx)(f.Button, {
                variant: "secondary",
                text: er,
                onClick: ed
              }), (0, r.jsx)(j.i, {
                className: A.claimBtn,
                size: p.zx.Sizes.MEDIUM,
                quest: Z,
                useReducedMotion: z,
                isExpanded: (null == (T = Z.userStatus) ? true : T.completedAt) != null,
                disabled: (null == (w = Z.userStatus) ? true : w.completedAt) == null,
                ctaLabel: eu,
                onClick: ef,
                questContent: C.jn.VIDEO_MODAL,
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
    autoplay: o,
    openStartClockTime: l
  } = e, i = function(e, t) {
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
  let a = (0, u.e7)([S.Z], () => S.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? (0, r.jsx)(T.A, {
    questOrQuests: s,
    questContent: C.jn.VIDEO_MODAL,
    minViewTimeSeconds: w.zw,
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
        parentModalOpenStartClockTime: l,
        impressionRef: e,
        quest: s,
        autoplay: o
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