/** Chunk was on 5749 **/
/** chunk id: 955708, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m,
  x: () => g
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk378298 = require("./378298.js"),
  Chunk473092 = require("./473092.js"),
  Chunk684471 = require("./684471.jsx"),
  Chunk745982 = require("./745982.jsx"),
  Chunk463439 = require("./463439.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk35853 = require("./35853.js");

function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      var i;
      i = n[e], e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = i
    })
  }
  return t
}

function _(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      n.push.apply(n, i)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
var g = ((i = {})[i.INTRO = 0] = "INTRO", i[i.SAFETY_TIPS = 1] = "SAFETY_TIPS", i[i.TAKE_ACTION = 2] = "TAKE_ACTION", i);
let m = t => {
  let {
    warningId: e,
    warningType: n,
    senderId: i,
    modalProps: g,
    channelId: m
  } = t, [f, b] = s.useState(0), O = s.useMemo(() => ({
    channelId: m,
    senderId: i,
    warningId: e,
    warningType: n,
    isNudgeWarning: false
  }), [m, i, e, n]);
  s.useEffect(() => {
    (0, c.KQ)(_(h({}, O), {
      viewName: c.pb.SAFETY_TAKEOVER_MODAL
    }))
  }, [O]);
  let j = s.useCallback(t => {
      (0, c.qc)(_(h({}, O), {
        cta: t
      }))
    }, [O]),
    [v, T] = s.useState(false);

  function E(t) {
    b(t)
  }
  return (0, r.jsxs)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: g.transitionState,
    parentComponent: "InappropriateConversationModal",
    children: [(0, r.jsx)("div", {
      className: x.container,
      children: (0, r.jsxs)(a.MyZ, {
        width: 440,
        activeSlide: f,
        centered: false,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, r.jsx)(a.Mi4, {
          id: 0,
          children: (0, r.jsx)(l.Z, {
            warningId: e,
            senderId: i,
            trackAnalyticsEvent: j,
            onNavigate: E
          })
        }), (0, r.jsx)(a.Mi4, {
          id: 1,
          children: (0, r.jsx)(d.Z, {
            warningId: e,
            senderId: i,
            trackAnalyticsEvent: j
          })
        }), (0, r.jsx)(a.Mi4, {
          id: 2,
          children: (0, r.jsx)(u.Z, {
            warningId: e,
            senderId: i,
            trackAnalyticsEvent: j,
            channelId: m,
            hasReported: v,
            onReport: function() {
              T(true)
            }
          })
        })]
      })
    }), (0, r.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: x.footer,
      children: [(0, r.jsx)(a.Avr, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t.cpT0Cq),
        onClick: function() {
          g.onClose(), (0, o.T)(m, [e]), j(c.NM.USER_TAKEOVER_MODAL_DISMISS)
        },
        textVariant: "text-sm/normal"
      }), 0 !== f && (0, r.jsx)(a.Avr, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t["13/7kX"]),
        textVariant: "text-sm/normal",
        onClick: () => E(0)
      })]
    })]
  })
}