/** Chunk was on 23628 **/
/** chunk id: 717415, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VideoQuestConfigContext: () => I,
  VideoQuestModalContext: () => P,
  default: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk412703 = require("./412703.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk971649 = require("./971649.js"),
  Chunk792620 = require("./792620.js"),
  Chunk753386 = require("./753386.js"),
  Chunk73473 = require("./73473.js"),
  Chunk922623 = require("./922623.jsx"),
  Chunk60040 = require("./60040.jsx"),
  Chunk885947 = require("./885947.jsx"),
  Chunk440891 = require("./440891.jsx"),
  Chunk471535 = require("./471535.jsx"),
  Chunk154395 = require("./154395.js"),
  Chunk583235 = require("./583235.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438655 = require("./438655.js");

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
let P = Chunk64700.createContext({
    quest: null,
    sourceQuestContent: null,
    videoSessionId: "",
    isPortrait: false,
    onClose: () => {}
  }),
  I = Chunk64700.createContext({
    questConfig: null
  });

function L(e) {
  var t, n;
  let {
    transitionState: o,
    onClose: s,
    quest: u,
    autoplay: m,
    videoSessionId: v,
    impressionRef: y,
    parentModalOpenStartClockTime: A,
    sourceQuestContent: I
  } = e, L = (0, g.Yh)(u), R = (0, b.LS)(u), k = (0, E.go)(), [M, V] = l.useState(L.progressSeconds), [Q, U] = l.useState(142), F = null == (n = u.config.taskConfigV2) || null == (t = n.tasks) ? true : t[c.n.WATCH_VIDEO];
  a()(null != F, "VideoQuestModal: videoTask must not be null");
  let B = (0, h.eG)(F),
    K = "portrait" === B,
    G = (0, f.A)(e => {
      U(e.target.offsetHeight)
    }),
    H = (0, p.w)(G),
    Y = (0, j.H)({
      quest: u,
      onClose: s,
      sourceQuestContent: I,
      impressionId: k
    }),
    W = l.useMemo(() => ({
      quest: u,
      sourceQuestContent: I,
      videoSessionId: v,
      isPortrait: K,
      onClose: s
    }), [u, I, v, K, s]);
  return (0, r.jsx)(P.Provider, {
    value: W,
    children: (0, r.jsxs)(d.EOs, {
      "data-migration-pending": true,
      transitionState: o,
      size: d.rIJ.DYNAMIC,
      className: i()(D.CR, {
        [D.VX]: "landscape" === B,
        [D.Zy]: "portrait" === B
      }),
      parentComponent: "Modal",
      children: [(0, r.jsx)("div", {
        className: D.z6,
        children: (0, r.jsx)(d.K0, {
          variant: "icon-only",
          icon: e => (0, r.jsx)(d.PGe, N(w({}, e), {
            color: d.LU0.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT
          })),
          "aria-label": T.intl.string(T.t.cpT0Cq),
          onClick: s
        })
      }), (0, r.jsx)("div", {
        ref: e => {
          y.current = e
        },
        className: i()(D.NE, {
          [D.en]: K
        }),
        style: K ? {
          "--custom-portrait-footer-height": "".concat(Q, "px")
        } : true,
        children: (0, r.jsx)("div", {
          className: D.S3,
          children: (0, r.jsxs)("div", {
            className: D.jE,
            children: [(0, r.jsx)(x.A, {
              videoTask: F,
              parentTransitionState: o,
              onOptimisticProgressUpdate: V,
              autoplay: m,
              performanceClockStartTime: A,
              orientation: B
            }), K ? (0, r.jsxs)("div", {
              ref: H,
              className: D.uh,
              children: [(0, r.jsxs)("div", {
                className: D.Df,
                children: [R ? null : (0, r.jsx)(C.A, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(_.A, {})]
              }), (0, r.jsxs)("div", {
                className: D.eX,
                children: [(0, r.jsx)("div", {
                  className: D.uP,
                  children: (0, r.jsx)("div", {
                    className: D.ne,
                    children: (0, r.jsx)(S.A, {})
                  })
                }), (0, r.jsx)(O.A, {
                  handlePrimaryCtaClick: Y
                })]
              })]
            }) : (0, r.jsxs)("div", {
              className: D.nR,
              children: [(0, r.jsxs)("div", {
                className: D.uu,
                children: [R ? null : (0, r.jsx)(C.A, {
                  tooltipPosition: "top"
                }), (0, r.jsx)(_.A, {})]
              }), (0, r.jsxs)("div", {
                className: D.NY,
                children: [(0, r.jsx)(S.A, {}), (0, r.jsx)(O.A, {
                  handlePrimaryCtaClick: Y
                })]
              })]
            })]
          })
        })
      })]
    })
  })
}

function R(e) {
  let {
    questId: t,
    overrideQuest: n,
    autoplay: o,
    openStartClockTime: i
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, l, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          o = Object.getOwnPropertyNames(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]), a = (0, u.bG)([m.A], () => m.A.getQuest(t)), c = (0, u.bG)([m.A], () => m.A.getQuestConfig(t)), d = null != n ? n : a, p = null != n ? n.config : c, f = l.useMemo(() => null != p ? {
    questConfig: p
  } : null, [p]);
  return null != d && null != p && null != f ? (0, r.jsx)(I.Provider, {
    value: f,
    children: (0, r.jsx)(y.R, {
      questOrQuests: d,
      questContent: v.uF.VIDEO_MODAL,
      minViewTimeSeconds: A.bq,
      trackGuildAndChannelMetadata: true,
      sourceQuestContent: s.sourceQuestContent,
      children: e => (0, r.jsx)(L, N(w({}, s), {
        parentModalOpenStartClockTime: i,
        impressionRef: e,
        quest: d,
        autoplay: o
      }))
    })
  }) : null
}