/** Chunk was on 75909 **/
/** chunk id: 215113, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VideoQuestConfigContext: () => A,
  VideoQuestModalContext: () => I,
  default: () => L
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
  Chunk915750 = require("./915750.jsx"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk254579 = require("./254579.js"),
  Chunk542347 = require("./542347.js"),
  Chunk602667 = require("./602667.js"),
  Chunk667109 = require("./667109.jsx"),
  Chunk589313 = require("./589313.jsx"),
  Chunk877242 = require("./877242.jsx"),
  Chunk165317 = require("./165317.jsx"),
  Chunk656357 = require("./656357.jsx"),
  Chunk267322 = require("./267322.js"),
  Chunk684245 = require("./684245.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209668 = require("./209668.js");

function R(e) {
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

function N(e, t) {
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
let I = Chunk473749.createContext({
    quest: null,
    sourceQuestContent: null,
    videoSessionId: "",
    isPortrait: false,
    onClose: () => {}
  }),
  A = Chunk473749.createContext({
    questConfig: null
  });

function w(e) {
  var t, n;
  let {
    transitionState: l,
    onClose: a,
    quest: u,
    autoplay: v,
    videoSessionId: E,
    impressionRef: S,
    parentModalOpenStartClockTime: j,
    sourceQuestContent: A
  } = e, w = (0, h.il)(u), L = (0, g.tP)(u), k = (0, p.aM)(), [M, V] = o.useState(w.progressSeconds), [Z, F] = o.useState(142), B = null == (n = u.config.taskConfigV2) || null == (t = n.tasks) ? true : t[c.X.WATCH_VIDEO];
  s()(null != B, "VideoQuestModal: videoTask must not be null");
  let U = (0, C.ZS)(B),
    q = "portrait" === U,
    Y = (0, f.Z)(e => {
      F(e.target.offsetHeight)
    }),
    H = (0, m.y)(Y),
    Q = (0, P.e)({
      quest: u,
      onClose: a,
      sourceQuestContent: A,
      impressionId: k
    }),
    G = o.useMemo(() => ({
      quest: u,
      sourceQuestContent: A,
      videoSessionId: E,
      isPortrait: q,
      onClose: a
    }), [u, A, E, q, a]);
  return (0, r.jsx)(I.Provider, {
    value: G,
    children: (0, r.jsxs)(d.Y0X, {
      "data-migration-pending": true,
      transitionState: l,
      size: d.CgR.DYNAMIC,
      className: i()(T.modalRoot, {
        [T.modalRootLandscape]: "landscape" === U,
        [T.modalRootPortrait]: "portrait" === U
      }),
      parentComponent: "Modal",
      children: [(0, r.jsx)("div", {
        className: T.closeModalBtnWrapper,
        children: (0, r.jsx)(d.hU, {
          variant: "icon-only",
          icon: e => (0, r.jsx)(d.Dio, N(R({}, e), {
            color: d.TVs.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT
          })),
          "aria-label": D.intl.string(D.t.cpT0Cq),
          onClick: a
        })
      }), (0, r.jsx)("div", {
        ref: e => {
          S.current = e
        },
        className: i()(T.modalBg, {
          [T.modalBgPortrait]: q
        }),
        style: q ? {
          "--custom-portrait-footer-height": "".concat(Z, "px")
        } : true,
        children: (0, r.jsx)("div", {
          className: T.modalBody,
          children: (0, r.jsxs)("div", {
            className: T.modalContent,
            children: [(0, r.jsx)(x.Z, {
              videoTask: B,
              parentTransitionState: l,
              onOptimisticProgressUpdate: V,
              autoplay: v,
              performanceClockStartTime: j,
              orientation: U
            }), q ? (0, r.jsxs)("div", {
              ref: H,
              className: T.contentFooterPortrait,
              children: [(0, r.jsxs)("div", {
                className: T.portraitContentRow,
                children: [L ? null : (0, r.jsx)(y.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(_.Z, {})]
              }), (0, r.jsxs)("div", {
                className: T.portraitButtonsContainer,
                children: [(0, r.jsx)("div", {
                  className: T.portraitButtonRow,
                  children: (0, r.jsx)("div", {
                    className: T.portraitCtaBtnWrapper,
                    children: (0, r.jsx)(O.Z, {})
                  })
                }), (0, r.jsx)(b.Z, {
                  handlePrimaryCtaClick: Q
                })]
              })]
            }) : (0, r.jsxs)("div", {
              className: T.contentFooter,
              children: [(0, r.jsxs)("div", {
                className: T.contentFooterAdInfo,
                children: [L ? null : (0, r.jsx)(y.Z, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(_.Z, {})]
              }), (0, r.jsxs)("div", {
                className: T.contentFooterButtonCont,
                children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(b.Z, {
                  handlePrimaryCtaClick: Q
                })]
              })]
            })]
          })
        })
      })]
    })
  })
}

function L(e) {
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
  let s = (0, u.e7)([v.Z], () => v.Z.getQuest(t)),
    c = (0, u.e7)([v.Z], () => v.Z.getQuestConfig(t)),
    d = null != n ? n : s,
    m = null != n ? n.config : c,
    f = o.useMemo(() => null != m ? {
      questConfig: m
    } : null, [m]);
  return null != d && null != m && null != f ? (0, r.jsx)(A.Provider, {
    value: f,
    children: (0, r.jsx)(S.A, {
      questOrQuests: d,
      questContent: E.jn.VIDEO_MODAL,
      minViewTimeSeconds: j.zw,
      trackGuildAndChannelMetadata: true,
      sourceQuestContent: a.sourceQuestContent,
      children: e => (0, r.jsx)(w, N(R({}, a), {
        parentModalOpenStartClockTime: i,
        impressionRef: e,
        quest: d,
        autoplay: l
      }))
    })
  }) : null
}