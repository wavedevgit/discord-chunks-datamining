/** Chunk was on 32249 **/
/** chunk id: 536687, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VideoQuestModalContext: () => Z,
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
  Chunk990993 = require("./990993.jsx"),
  Chunk114649 = require("./114649.jsx"),
  Chunk895966 = require("./895966.jsx"),
  Chunk768003 = require("./768003.jsx"),
  Chunk985559 = require("./985559.jsx"),
  Chunk747717 = require("./747717.jsx"),
  Chunk963123 = require("./963123.jsx"),
  Chunk281055 = require("./281055.js"),
  Chunk431130 = require("./431130.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430799 = require("./430799.js");

function M(e) {
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
let Z = Chunk647438.createContext({
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
    quest: h,
    autoplay: C,
    videoSessionId: I,
    impressionRef: F,
    parentModalOpenStartClockTime: B,
    sourceQuestContent: U
  } = e, H = (0, g.il)(h), q = (0, O.tP)(h), Y = (0, E.aM)(), [Q, G] = o.useState(H.progressSeconds), [W, K] = o.useState(142), {
    variant: z,
    enabled: X
  } = S.EO.useConfig({
    location: w.dr.VIDEO_MODAL
  }), J = null == (n = h.config.taskConfigV2) || null == (t = n.tasks) ? true : t[c.X.WATCH_VIDEO];
  s()(null != J, "VideoQuestModal: videoTask must not be null");
  let $ = (0, g.ZS)(J),
    ee = "portrait" === $,
    et = (0, p.Z)(e => {
      K(e.target.offsetHeight)
    }),
    en = (0, m.y)(et),
    er = z === S.m_.OVERLAY_SHARE_ON_VIDEO,
    eo = (0, N.p)({
      quest: h,
      onClose: a,
      sourceQuestContent: U,
      impressionId: Y
    }),
    el = (0, u.e7)([f.Z], () => f.Z.getState().theme),
    ei = (0, d.wjy)(el) ? A.BR.DARK : A.BR.LIGHT,
    ea = o.useMemo(() => ({
      quest: h,
      sourceQuestContent: U,
      videoSessionId: I,
      isPortrait: ee,
      onClose: a
    }), [h, U, I, ee, a]);
  return (0, r.jsx)(Z.Provider, {
    value: ea,
    children: (0, r.jsxs)(d.Y0X, {
      "data-migration-pending": true,
      transitionState: l,
      size: d.CgR.DYNAMIC,
      className: i()(L.modalRoot, {
        [L.modalRootLandscape]: "landscape" === $,
        [L.modalRootPortrait]: "portrait" === $,
        [L.modalRootV2]: X,
        [L.modalRootPortraitV2]: X && "portrait" === $
      }),
      parentComponent: "Modal",
      children: [X && (0, r.jsx)("div", {
        className: L.closeModalBtnWrapper,
        children: (0, r.jsx)(d.hU, {
          variant: "icon-only",
          icon: e => (0, r.jsx)(d.Dio, V(M({}, e), {
            color: d.TVs.colors.CONTROL_TEXT_OVERLAY_SECONDARY_DEFAULT
          })),
          "aria-label": k.intl.string(k.t.cpT0Cq),
          onClick: a
        })
      }), (0, r.jsx)("div", {
        ref: e => {
          F.current = e
        },
        className: i()(L.modalBg, {
          [L.modalBgV2]: X,
          [L.modalBgV2Portrait]: X && ee
        }),
        style: ee && X ? {
          "--custom-portrait-footer-height": "".concat(W, "px")
        } : true,
        children: (0, r.jsx)("div", {
          className: i()(L.modalBody, {
            [L.modalBodyWithBorder]: X
          }),
          children: (0, r.jsxs)("div", {
            className: L.modalContent,
            style: {
              backgroundColor: X ? d.TVs.colors.BACKGROUND_BASE_LOWER.css : true
            },
            children: [X ? null : (0, r.jsxs)("div", {
              className: L.contentHeader,
              children: [(0, r.jsxs)(d.P3F, {
                className: L.contentHeaderGameInfo,
                onClick: () => eo(b.jn.VIDEO_MODAL, v.jZ.OPEN_GAME_LINK),
                children: [(0, r.jsx)("img", {
                  alt: h.config.messages.gameTitle,
                  className: i()(L.contentHeaderLogotype, L.accentOnHover),
                  src: (0, y.fh)(h, y.eC.LOGO_TYPE, ei).url
                }), (0, r.jsx)(P.Z, {}), (0, r.jsxs)("div", {
                  className: L.questHeading,
                  children: [(0, r.jsx)(d.Heading, {
                    variant: "heading-md/semibold",
                    color: "header-primary",
                    children: k.intl.format(k.t.EQa7os, {
                      questName: h.config.messages.questName
                    })
                  }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    children: h.config.messages.gameTitle
                  })]
                })]
              }), !q && (0, r.jsx)(T.Z, {
                tooltipPosition: "left"
              })]
            }), (0, r.jsx)(R.Z, {
              videoTask: J,
              parentTransitionState: l,
              onOptimisticProgressUpdate: G,
              autoplay: C,
              performanceClockStartTime: B,
              orientation: $
            }), ee ? (0, r.jsxs)("div", {
              ref: en,
              className: X ? L.contentFooterPortraitV2 : L.contentFooterPortraitV1,
              children: [X ? (0, r.jsxs)("div", {
                className: L.portraitContentRow,
                children: [q ? null : (0, r.jsx)(T.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(j.Z, {}), !er && (0, r.jsx)(D.Z, {
                  floatRight: true
                })]
              }) : null, (0, r.jsxs)("div", {
                className: L.portraitButtonsContainer,
                children: [(0, r.jsxs)("div", {
                  className: L.portraitButtonRow,
                  children: [X ? null : (0, r.jsx)(_.Z, {
                    handlePrimaryCtaClick: eo
                  }), (0, r.jsx)("div", {
                    className: L.portraitCtaBtnWrapper,
                    children: (0, r.jsx)(x.Z, {})
                  })]
                }), X ? (0, r.jsx)(_.Z, {
                  handlePrimaryCtaClick: eo
                }) : (0, r.jsx)(D.Z, {})]
              })]
            }) : (0, r.jsxs)("div", {
              className: i()(L.contentFooter, X ? L.contentFooterV2 : L.contentFooterV1),
              children: [X ? (0, r.jsxs)("div", {
                className: L.contentFooterAdInfo,
                children: [q ? null : (0, r.jsx)(T.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(j.Z, {})]
              }) : (0, r.jsx)(d.Button, {
                variant: "secondary",
                text: k.intl.string(k.t.cpT0Cq),
                onClick: a
              }), (0, r.jsxs)("div", {
                className: i()(L.contentFooterButtonCont, {
                  [L.contentFooterButtonContV2]: X
                }),
                children: [!er && (0, r.jsx)(D.Z, {}), (0, r.jsx)(x.Z, {}), X ? (0, r.jsx)(_.Z, {
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
  let a = (0, u.e7)([h.Z], () => h.Z.getQuest(t)),
    s = null != n ? n : a;
  return null != s ? (0, r.jsx)(C.A, {
    questOrQuests: s,
    questContent: b.jn.VIDEO_MODAL,
    minViewTimeSeconds: I.zw,
    trackGuildAndChannelMetadata: true,
    sourceQuestContent: i.sourceQuestContent,
    children: e => (0, r.jsx)(F, V(M({}, i), {
      parentModalOpenStartClockTime: l,
      impressionRef: e,
      quest: s,
      autoplay: o
    }))
  }) : null
}