/** Chunk was on 75909 **/
/** chunk id: 215113, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VideoQuestModalContext: () => Z,
  default: () => B
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
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk937797 = require("./937797.js"),
  Chunk475595 = require("./475595.js"),
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
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");

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

function V(e, t) {
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
let Z = Chunk473749.createContext({
  quest: null,
  sourceQuestContent: null,
  videoSessionId: "",
  isPortrait: false,
  onClose: () => {}
});

function F(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: a,
    quest: b,
    autoplay: y,
    videoSessionId: I,
    impressionRef: F,
    parentModalOpenStartClockTime: B,
    sourceQuestContent: H
  } = e, U = (0, g.il)(b), q = (0, O.tP)(b), Y = (0, E.aM)(), [G, Q] = o.useState(U.progressSeconds), [W, K] = o.useState(142), {
    variant: z,
    enabled: X
  } = S.EO.useConfig({
    location: A.dr.VIDEO_MODAL
  }), J = null == (n = b.config.taskConfigV2) || null == (t = n.tasks) ? true : t[c.X.WATCH_VIDEO];
  s()(null != J, "VideoQuestModal: videoTask must not be null");
  let $ = (0, g.ZS)(J),
    ee = "portrait" === $,
    et = (0, p.Z)(e => {
      K(e.target.offsetHeight)
    }),
    en = (0, m.y)(et),
    er = z === S.m_.OVERLAY_SHARE_ON_VIDEO,
    eo = (0, N.e)({
      quest: b,
      onClose: a,
      sourceQuestContent: H,
      impressionId: Y
    }),
    el = (0, u.e7)([f.Z], () => f.Z.getState().theme),
    ei = (0, d.wjy)(el) ? w.BR.DARK : w.BR.LIGHT,
    ea = o.useMemo(() => ({
      quest: b,
      sourceQuestContent: H,
      videoSessionId: I,
      isPortrait: ee,
      onClose: a
    }), [b, H, I, ee, a]);
  return (0, r.jsx)(Z.Provider, {
    value: ea,
    children: (0, r.jsxs)(d.Y0X, {
      "data-migration-pending": true,
      transitionState: l,
      size: d.CgR.DYNAMIC,
      className: i()(M.modalRoot, {
        [M.modalRootLandscape]: "landscape" === $,
        [M.modalRootPortrait]: "portrait" === $,
        [M.modalRootV2]: X,
        [M.modalRootPortraitV2]: X && "portrait" === $
      }),
      parentComponent: "Modal",
      children: [X && (0, r.jsx)("div", {
        className: M.closeModalBtnWrapper,
        children: (0, r.jsx)(d.hU, {
          variant: "icon-only",
          icon: e => (0, r.jsx)(d.Dio, V(L({}, e), {
            color: d.TVs.colors.CONTROL_TEXT_OVERLAY_SECONDARY_DEFAULT
          })),
          "aria-label": k.intl.string(k.t.cpT0Cq),
          onClick: a
        })
      }), (0, r.jsx)("div", {
        ref: e => {
          F.current = e
        },
        className: i()(M.modalBg, {
          [M.modalBgV2]: X,
          [M.modalBgV2Portrait]: X && ee
        }),
        style: ee && X ? {
          "--custom-portrait-footer-height": "".concat(W, "px")
        } : true,
        children: (0, r.jsx)("div", {
          className: i()(M.modalBody, {
            [M.modalBodyWithBorder]: X
          }),
          children: (0, r.jsxs)("div", {
            className: M.modalContent,
            style: {
              backgroundColor: X ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : true
            },
            children: [X ? null : (0, r.jsxs)("div", {
              className: M.contentHeader,
              children: [(0, r.jsxs)(d.P3F, {
                className: M.contentHeaderGameInfo,
                onClick: () => eo(h.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                children: [(0, r.jsx)("img", {
                  alt: b.config.messages.gameTitle,
                  className: i()(M.contentHeaderLogotype, M.accentOnHover),
                  src: (0, C.fh)(b, C.eC.LOGO_TYPE, ei).url
                }), (0, r.jsx)(T.Z, {}), (0, r.jsxs)("div", {
                  className: M.questHeading,
                  children: [(0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    children: k.intl.format(k.t.EQa7os, {
                      questName: b.config.messages.questName
                    })
                  }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: b.config.messages.gameTitle
                  })]
                })]
              }), !q && (0, r.jsx)(D.Z, {
                tooltipPosition: "left"
              })]
            }), (0, r.jsx)(R.Z, {
              videoTask: J,
              parentTransitionState: l,
              onOptimisticProgressUpdate: Q,
              autoplay: y,
              performanceClockStartTime: B,
              orientation: $
            }), ee ? (0, r.jsxs)("div", {
              ref: en,
              className: X ? M.contentFooterPortraitV2 : M.contentFooterPortraitV1,
              children: [X ? (0, r.jsxs)("div", {
                className: M.portraitContentRow,
                children: [q ? null : (0, r.jsx)(D.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(j.Z, {}), !er && (0, r.jsx)(P.Z, {
                  floatRight: true
                })]
              }) : null, (0, r.jsxs)("div", {
                className: M.portraitButtonsContainer,
                children: [(0, r.jsxs)("div", {
                  className: M.portraitButtonRow,
                  children: [X ? null : (0, r.jsx)(_.Z, {
                    handlePrimaryCtaClick: eo
                  }), (0, r.jsx)("div", {
                    className: M.portraitCtaBtnWrapper,
                    children: (0, r.jsx)(x.Z, {})
                  })]
                }), X ? (0, r.jsx)(_.Z, {
                  handlePrimaryCtaClick: eo
                }) : (0, r.jsx)(P.Z, {})]
              })]
            }) : (0, r.jsxs)("div", {
              className: i()(M.contentFooter, X ? M.contentFooterV2 : M.contentFooterV1),
              children: [X ? (0, r.jsxs)("div", {
                className: M.contentFooterAdInfo,
                children: [q ? null : (0, r.jsx)(D.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(j.Z, {})]
              }) : (0, r.jsx)(d.Button, {
                variant: "secondary",
                text: k.intl.string(k.t.cpT0Cq),
                onClick: a
              }), (0, r.jsxs)("div", {
                className: i()(M.contentFooterButtonCont, {
                  [M.contentFooterButtonContV2]: X
                }),
                children: [!er && (0, r.jsx)(P.Z, {}), (0, r.jsx)(x.Z, {}), X ? (0, r.jsx)(_.Z, {
                  handlePrimaryCtaClick: eo
                }) : null]
              })]
            })]
          })
        })
      })]
    })
  })
}

function B(e) {
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
  let a = (0, u.e7)([b.Z], () => b.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? (0, r.jsx)(y.A, {
    questOrQuests: s,
    questContent: h.jn.VIDEO_MODAL,
    minViewTimeSeconds: I.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: i.sourceQuestContent,
    children: e => (0, r.jsx)(F, V(L({}, i), {
      parentModalOpenStartClockTime: l,
      impressionRef: e,
      quest: s,
      autoplay: o
    }))
  }) : null
}