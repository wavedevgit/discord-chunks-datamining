/** Chunk was on 18108 **/
/** chunk id: 237170, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  G: () => A,
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

function m(t) {
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

function h(t, e) {
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
var A = ((r = {})[r.INTRO = 0] = "INTRO", r[r.SAFETY_TIPS = 1] = "SAFETY_TIPS", r[r.TAKE_ACTION = 2] = "TAKE_ACTION", r);
let g = t => {
  let {
    warningId: e,
    warningType: n,
    senderId: r,
    modalProps: A,
    channelId: g
  } = t, [O, p] = s.useState(0), j = s.useMemo(() => ({
    channelId: g,
    senderId: r,
    warningId: e,
    warningType: n,
    isNudgeWarning: false
  }), [g, r, e, n]);
  s.useEffect(() => {
    (0, c.QF)(h(m({}, j), {
      viewName: c.gN.SAFETY_TAKEOVER_MODAL
    }))
  }, [j]);
  let b = s.useCallback(t => {
      (0, c._$)(h(m({}, j), {
        cta: t
      }))
    }, [j]),
    [v, E] = s.useState(false);

  function T(t) {
    p(t)
  }
  return (0, i.jsxs)(a.EOs, {
    "data-migration-pending": true,
    transitionState: A.transitionState,
    parentComponent: "InappropriateConversationModal",
    children: [(0, i.jsx)("div", {
      className: x.kL,
      children: (0, i.jsxs)(a.tN_, {
        width: 440,
        activeSlide: O,
        centered: false,
        overflow: "visible",
        contentDisplay: "flex",
        children: [(0, i.jsx)(a.q7S, {
          id: 0,
          children: (0, i.jsx)(o.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: b,
            onNavigate: T
          })
        }), (0, i.jsx)(a.q7S, {
          id: 1,
          children: (0, i.jsx)(d.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: b
          })
        }), (0, i.jsx)(a.q7S, {
          id: 2,
          children: (0, i.jsx)(u.A, {
            warningId: e,
            senderId: r,
            trackAnalyticsEvent: b,
            channelId: g,
            hasReported: v,
            onReport: function() {
              E(true)
            }
          })
        })]
      })
    }), (0, i.jsxs)(a.jlY, {
      "data-migration-pending": true,
      className: x.qr,
      children: [(0, i.jsx)(a.QWc, {
        variant: "secondary",
        size: "sm",
        text: _.intl.string(_.t.cpT0Cq),
        onClick: function() {
          A.onClose(), (0, l.xi)(g, [e]), b(c.Wm.USER_TAKEOVER_MODAL_DISMISS)
        },
        textVariant: "text-sm/normal"
      }), 0 !== O && (0, i.jsx)(a.QWc, {
        variant: "secondary",
        size: "sm",
        text: _.intl.string(_.t["13/7kX"]),
        textVariant: "text-sm/normal",
        onClick: () => T(0)
      })]
    })]
  })
}