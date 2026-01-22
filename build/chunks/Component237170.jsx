/** Chunk was on 18108 **/
/** chunk id: 237170, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => h,
  default: () => g
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544231 = require("./544231.js"),
  Chunk665909 = require("./665909.js"),
  Chunk464838 = require("./464838.jsx"),
  Chunk120340 = require("./120340.jsx"),
  Chunk196645 = require("./196645.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk705656 = require("./705656.js");

function A(t) {
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

function f(t, e) {
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
var h = ((r = {})[r.INTRO = 0] = "INTRO", r[r.SAFETY_TIPS = 1] = "SAFETY_TIPS", r[r.TAKE_ACTION = 2] = "TAKE_ACTION", r);
let g = t => {
  let {
    warningId: e,
    warningType: n,
    senderId: r,
    modalProps: h,
    channelId: g
  } = t, [O, j] = a.useState(0), _ = a.useMemo(() => ({
    channelId: g,
    senderId: r,
    warningId: e,
    warningType: n,
    isNudgeWarning: false
  }), [g, r, e, n]);
  a.useEffect(() => {
    (0, c.QF)(f(A({}, _), {
      viewName: c.gN.SAFETY_TAKEOVER_MODAL
    }))
  }, [_]);
  let p = a.useCallback(t => {
      (0, c._$)(f(A({}, _), {
        cta: t
      }))
    }, [_]),
    [v, b] = a.useState(false);

  function E(t) {
    j(t)
  }
  return (0, i.jsxs)(s.EOs, {
    "data-migration-pending": true,
    transitionState: h.transitionState,
    parentComponent: "InappropriateConversationModal",
    children: [(0, i.jsx)("div", {
      className: m.kL,
      children: (0, i.jsxs)(s.tN_, {
        width: 440,
        activeSlide: O,
        centered: false,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, i.jsx)(s.q7S, {
          id: 0,
          children: (0, i.jsx)(o.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: p,
            onNavigate: E
          })
        }), (0, i.jsx)(s.q7S, {
          id: 1,
          children: (0, i.jsx)(d.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: p
          })
        }), (0, i.jsx)(s.q7S, {
          id: 2,
          children: (0, i.jsx)(u.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: p,
            channelId: g,
            hasReported: v,
            onReport: function() {
              b(true)
            }
          })
        })]
      })
    }), (0, i.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: m.qr,
      children: [(0, i.jsx)(s.QWc, {
        variant: "secondary",
        size: "sm",
        text: x.intl.string(x.t.cpT0Cq),
        onClick: function() {
          h.onClose(), (0, l.xi)(g, [e]), p(c.Wm.USER_TAKEOVER_MODAL_DISMISS)
        },
        textVariant: "text-sm/normal"
      }), 0 !== O && (0, i.jsx)(s.QWc, {
        variant: "secondary",
        size: "sm",
        text: x.intl.string(x.t["13/7kX"]),
        textVariant: "text-sm/normal",
        onClick: () => E(0)
      })]
    })]
  })
}