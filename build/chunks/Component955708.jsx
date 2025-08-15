/** Chunk was on 59650 **/
/** chunk id: 955708, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x,
  x: () => g
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function p(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
var g = ((r = {})[r.INTRO = 0] = "INTRO", r[r.SAFETY_TIPS = 1] = "SAFETY_TIPS", r[r.TAKE_ACTION = 2] = "TAKE_ACTION", r);
let x = t => {
  let {
    warningId: e,
    warningType: n,
    senderId: r,
    modalProps: g,
    channelId: x
  } = t, [f, N] = s.useState(0), m = s.useMemo(() => ({
    channelId: x,
    senderId: r,
    warningId: e,
    warningType: n,
    isNudgeWarning: false
  }), [x, r, e, n]);
  s.useEffect(() => {
    (0, c.KQ)(p(h({}, m), {
      viewName: c.pb.SAFETY_TAKEOVER_MODAL
    }))
  }, [m]);
  let T = s.useCallback(t => {
      (0, c.qc)(p(h({}, m), {
        cta: t
      }))
    }, [m]),
    [b, A] = s.useState(false);

  function C(t) {
    N(t)
  }
  return (0, i.jsxs)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: g.transitionState,
    parentComponent: "InappropriateConversationModal",
    children: [(0, i.jsx)("div", {
      className: _.container,
      children: (0, i.jsxs)(a.MyZ, {
        width: 440,
        activeSlide: f,
        centered: false,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, i.jsx)(a.Mi4, {
          id: 0,
          children: (0, i.jsx)(l.Z, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: T,
            onNavigate: C
          })
        }), (0, i.jsx)(a.Mi4, {
          id: 1,
          children: (0, i.jsx)(d.Z, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: T
          })
        }), (0, i.jsx)(a.Mi4, {
          id: 2,
          children: (0, i.jsx)(u.Z, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: T,
            channelId: x,
            hasReported: b,
            onReport: function() {
              A(true)
            }
          })
        })]
      })
    }), (0, i.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: _.footer,
      children: [(0, i.jsx)(a.Avr, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(E.t.cpT0Cg),
        onClick: function() {
          g.onClose(), (0, o.T)(x, [e]), T(c.NM.USER_TAKEOVER_MODAL_DISMISS)
        },
        textVariant: "text-sm/normal"
      }), 0 !== f && (0, i.jsx)(a.Avr, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(E.t["13/7kZ"]),
        textVariant: "text-sm/normal",
        onClick: () => C(0)
      })]
    })]
  })
}