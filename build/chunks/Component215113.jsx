/** Chunk was on 75909 **/
/** chunk id: 215113, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VideoQuestConfigContext: () => B,
  VideoQuestModalContext: () => F,
  default: () => q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk937797 = require("./937797.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk254579 = require("./254579.js"),
  Chunk542347 = require("./542347.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk667109 = require("./667109.jsx"),
  Chunk589313 = require("./589313.jsx"),
  Chunk877242 = require("./877242.jsx"),
  Chunk165317 = require("./165317.jsx"),
  Chunk449788 = require("./449788.jsx"),
  Chunk874010 = require("./874010.jsx"),
  Chunk656357 = require("./656357.jsx"),
  Chunk267322 = require("./267322.js"),
  Chunk684245 = require("./684245.js"),
  Chunk324805 = require("./324805.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");

function V(e) {
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

function Z(e, t) {
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
let F = Chunk473749.createContext({
    quest: null,
    sourceQuestContent: null,
    videoSessionId: "",
    isPortrait: false,
    onClose: () => {}
  }),
  B = Chunk473749.createContext({
    questConfig: null
  });

function U(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: a,
    quest: g,
    autoplay: y,
    videoSessionId: N,
    impressionRef: B,
    parentModalOpenStartClockTime: U,
    sourceQuestContent: q
  } = e, Y = (0, C.il)(g), H = (0, b.tP)(g), Q = (0, E.aM)(), [G, K] = o.useState(Y.progressSeconds), [W, z] = o.useState(142), {
    variant: X,
    enabled: $
  } = h.EO.useConfig({
    location: w.dr.VIDEO_MODAL
  }), J = null == (n = g.config.taskConfigV2) || null == (t = n.tasks) ? true : t[c.X.WATCH_VIDEO];
  s()(null != J, "VideoQuestModal: videoTask must not be null");
  let ee = (0, _.ZS)(J),
    et = "portrait" === ee,
    en = (0, f.Z)(e => {
      z(e.target.offsetHeight)
    }),
    er = (0, m.y)(en),
    eo = X === h.m_.OVERLAY_SHARE_ON_VIDEO,
    el = (0, A.e)({
      quest: g,
      onClose: a,
      sourceQuestContent: q,
      impressionId: Q
    }),
    ei = (0, u.e7)([p.Z], () => p.Z.getState().theme),
    ea = (0, d.wjy)(ei) ? L.BR.DARK : L.BR.LIGHT,
    es = o.useMemo(() => ({
      quest: g,
      sourceQuestContent: q,
      videoSessionId: N,
      isPortrait: et,
      onClose: a
    }), [g, q, N, et, a]);
  return (0, r.jsx)(F.Provider, {
    value: es,
    children: (0, r.jsxs)(d.Y0X, {
      "data-migration-pending": true,
      transitionState: l,
      size: d.CgR.DYNAMIC,
      className: i()(M.modalRoot, {
        [M.modalRootLandscape]: "landscape" === ee,
        [M.modalRootPortrait]: "portrait" === ee,
        [M.modalRootV2]: $,
        [M.modalRootPortraitV2]: $ && "portrait" === ee
      }),
      parentComponent: "Modal",
      children: [$ && (0, r.jsx)("div", {
        className: M.closeModalBtnWrapper,
        children: (0, r.jsx)(d.hU, {
          variant: "icon-only",
          icon: e => (0, r.jsx)(d.Dio, Z(V({}, e), {
            color: d.TVs.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT
          })),
          "aria-label": k.intl.string(k.t.cpT0Cq),
          onClick: a
        })
      }), (0, r.jsx)("div", {
        ref: e => {
          B.current = e
        },
        className: i()(M.modalBg, {
          [M.modalBgV2]: $,
          [M.modalBgV2Portrait]: $ && et
        }),
        style: et && $ ? {
          "--custom-portrait-footer-height": "".concat(W, "px")
        } : true,
        children: (0, r.jsx)("div", {
          className: i()(M.modalBody, {
            [M.modalBodyWithBorder]: $
          }),
          children: (0, r.jsxs)("div", {
            className: M.modalContent,
            style: {
              backgroundColor: $ ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : true
            },
            children: [$ ? null : (0, r.jsxs)("div", {
              className: M.contentHeader,
              children: [(0, r.jsxs)(d.P3F, {
                className: M.contentHeaderGameInfo,
                onClick: () => el(O.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                children: [(0, r.jsx)("img", {
                  alt: g.config.messages.gameTitle,
                  className: i()(M.contentHeaderLogotype, M.accentOnHover),
                  src: (0, S.fh)(g, S.eC.LOGO_TYPE, ea).url
                }), (0, r.jsx)(R.Z, {}), (0, r.jsxs)("div", {
                  className: M.questHeading,
                  children: [(0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: k.intl.format(k.t.EQa7os, {
                      questName: g.config.messages.questName
                    })
                  }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: g.config.messages.gameTitle
                  })]
                })]
              }), !H && (0, r.jsx)(D.Z, {
                tooltipPosition: "left"
              })]
            }), (0, r.jsx)(I.Z, {
              videoTask: J,
              parentTransitionState: l,
              onOptimisticProgressUpdate: K,
              autoplay: y,
              performanceClockStartTime: U,
              orientation: ee
            }), et ? (0, r.jsxs)("div", {
              ref: er,
              className: $ ? M.contentFooterPortraitV2 : M.contentFooterPortraitV1,
              children: [$ ? (0, r.jsxs)("div", {
                className: M.portraitContentRow,
                children: [H ? null : (0, r.jsx)(D.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(P.Z, {}), !eo && (0, r.jsx)(T.Z, {
                  floatRight: true
                })]
              }) : null, (0, r.jsxs)("div", {
                className: M.portraitButtonsContainer,
                children: [(0, r.jsxs)("div", {
                  className: M.portraitButtonRow,
                  children: [$ ? null : (0, r.jsx)(x.Z, {
                    handlePrimaryCtaClick: el
                  }), (0, r.jsx)("div", {
                    className: M.portraitCtaBtnWrapper,
                    children: (0, r.jsx)(j.Z, {})
                  })]
                }), $ ? (0, r.jsx)(x.Z, {
                  handlePrimaryCtaClick: el
                }) : (0, r.jsx)(T.Z, {})]
              })]
            }) : (0, r.jsxs)("div", {
              className: i()(M.contentFooter, $ ? M.contentFooterV2 : M.contentFooterV1),
              children: [$ ? (0, r.jsxs)("div", {
                className: M.contentFooterAdInfo,
                children: [H ? null : (0, r.jsx)(D.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(P.Z, {})]
              }) : (0, r.jsx)(d.Button, {
                variant: "secondary",
                text: k.intl.string(k.t.cpT0Cq),
                onClick: a
              }), (0, r.jsxs)("div", {
                className: i()(M.contentFooterButtonCont, {
                  [M.contentFooterButtonContV2]: $
                }),
                children: [!eo && (0, r.jsx)(T.Z, {}), (0, r.jsx)(j.Z, {}), $ ? (0, r.jsx)(x.Z, {
                  handlePrimaryCtaClick: el
                }) : null]
              })]
            })]
          })
        })
      })]
    })
  })
}

function q(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: l,
    openStartClockTime: i
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
  let s = (0, u.e7)([g.Z], () => g.Z.getQuest(t)),
    c = (0, u.e7)([g.Z], () => g.Z.getQuestConfig(t)),
    d = null != n ? n : s,
    m = null != n ? n.config : c,
    f = o.useMemo(() => null != m ? {
      questConfig: m
    } : null, [m]);
  return null != d && null != m && null != f ? (0, r.jsx)(B.Provider, {
    value: f,
    children: (0, r.jsx)(y.A, {
      questOrQuests: d,
      questContent: O.jn.VIDEO_MODAL,
      minViewTimeSeconds: N.zw,
      trackGuildAndChannelMetadata: true,
      sourceQuestContent: a.sourceQuestContent,
      children: e => (0, r.jsx)(U, Z(V({}, a), {
        parentModalOpenStartClockTime: i,
        impressionRef: e,
        quest: d,
        autoplay: l
      }))
    })
  }) : null
}