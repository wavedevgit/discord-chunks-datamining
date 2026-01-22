/** Chunk was on 31748 **/
/** chunk id: 178442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk384059 = require("./384059.js"),
  Chunk917592 = require("./917592.js"),
  Chunk241847 = require("./241847.jsx"),
  Chunk167155 = require("./167155.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk56668 = require("./56668.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let h = {
    [Chunk652215.vkP.CONNECTED]: Chunk56668.nf,
    [Chunk652215.vkP.CONNECTING]: Chunk56668._6,
    [Chunk652215.vkP.ERROR]: Chunk56668.Il
  },
  A = {
    [Chunk652215.bFR.FINE]: Chunk56668.LP,
    [Chunk652215.bFR.AVERAGE]: Chunk56668.mq,
    [Chunk652215.bFR.BAD]: Chunk56668.yA,
    [Chunk652215.bFR.UNKNOWN]: null
  },
  y = {
    [Chunk652215.bFR.FINE]: Chunk397927.QtE,
    [Chunk652215.bFR.AVERAGE]: Chunk397927.jHk,
    [Chunk652215.bFR.BAD]: Chunk397927.RIK,
    [Chunk652215.bFR.UNKNOWN]: Chunk397927.esW
  };

function _(e) {
  let {
    quality: t,
    largePing: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["quality", "largePing"]), i = y[t];
  return (0, l.jsx)(i, m({
    className: a()(g.hU, {
      [g.kV]: n
    })
  }, r))
}

function E(e) {
  let {
    quality: t,
    lastPing: n,
    state: i,
    className: y,
    children: E,
    channelId: v,
    childrenAsSubtitle: O,
    connectionStatusTextVariant: x,
    hasVideo: S
  } = e, N = r.useRef(null), C = i === b.S7L.RTC_CONNECTED, j = r.useCallback(e => {
    var t, n;
    return (0, l.jsx)(f.A, (t = m({}, e), n = n = {
      channelId: v
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [v]), {
    connectionStatus: T,
    connectionStatusText: I
  } = d.A.getStatus(i, S);
  return (0, l.jsxs)("div", {
    className: g.pe,
    children: [(0, l.jsx)("div", {
      className: a()(g.yH, A[t], y),
      ref: N,
      children: (0, l.jsx)(o.YNO, {
        targetElementRef: N,
        renderPopout: j,
        position: "top",
        children: e => {
          let {
            onClick: r
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [C && (0, l.jsx)(s.m, {
              text: t !== b.bFR.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
              children: (0, l.jsx)(o.DUT, {
                className: g.xr,
                onClick: e => {
                  (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e)
                },
                children: (0, l.jsx)(_, {
                  quality: t,
                  largePing: O
                })
              })
            }), (0, l.jsxs)("div", {
              className: g.ei,
              children: [(0, l.jsx)(o.DUT, {
                onClick: e => {
                  (0, u.X)(c.A.RTC_PANEL, u.O.CONNECTION_STATUS), r(e)
                },
                children: (0, l.jsx)(p.A, {
                  text: I,
                  textVariant: x,
                  hasVideo: S,
                  className: h[T],
                  hasConnectedChannel: null != v
                })
              }), O ? E : null]
            })]
          })
        }
      })
    }), O ? null : E]
  })
}