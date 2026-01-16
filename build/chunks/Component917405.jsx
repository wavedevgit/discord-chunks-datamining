/** Chunk was on 69813 **/
/** chunk id: 917405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk522651 = require("./522651.js"),
  Chunk476221 = require("./476221.js"),
  Chunk873596 = require("./873596.jsx"),
  Chunk423516 = require("./423516.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk156730 = require("./156730.js");

function m(e) {
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
let h = {
    [Chunk981631.QKv.CONNECTED]: Chunk156730.rtcConnectionStatusConnected,
    [Chunk981631.QKv.CONNECTING]: Chunk156730.rtcConnectionStatusConnecting,
    [Chunk981631.QKv.ERROR]: Chunk156730.rtcConnectionStatusError
  },
  E = {
    [Chunk981631.IE4.FINE]: Chunk156730.rtcConnectionQualityFine,
    [Chunk981631.IE4.AVERAGE]: Chunk156730.rtcConnectionQualityAverage,
    [Chunk981631.IE4.BAD]: Chunk156730.rtcConnectionQualityBad,
    [Chunk981631.IE4.UNKNOWN]: null
  },
  _ = {
    [Chunk981631.IE4.FINE]: Chunk481060.B_b,
    [Chunk981631.IE4.AVERAGE]: Chunk481060.hLg,
    [Chunk981631.IE4.BAD]: Chunk481060.mbS,
    [Chunk981631.IE4.UNKNOWN]: Chunk481060._3e
  };

function v(e) {
  var {
    quality: t,
    largePing: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["quality", "largePing"]);
  let i = _[t];
  return (0, r.jsx)(i, m({
    className: a()(b.ping, {
      [b.largePing]: n
    })
  }, l))
}

function y(e) {
  let {
    quality: t,
    lastPing: n,
    state: i,
    className: _,
    children: y,
    channelId: O,
    childrenAsSubtitle: S,
    connectionStatusTextVariant: C,
    hasVideo: I
  } = e, N = l.useRef(null), T = i === g.hes.RTC_CONNECTED, x = l.useCallback(e => {
    var t, n;
    return (0, r.jsx)(f.Z, (t = m({}, e), n = n = {
      channelId: O
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }, [O]), {
    connectionStatus: P,
    connectionStatusText: Z
  } = d.Z.getStatus(i, I);
  return (0, r.jsxs)("div", {
    className: b.rtcConnectionStatusWrapper,
    children: [(0, r.jsx)("div", {
      className: a()(b.rtcConnectionStatus, E[t], _),
      ref: N,
      children: (0, r.jsx)(c.yRy, {
        targetElementRef: N,
        renderPopout: x,
        position: "top",
        children: e => {
          let {
            onClick: l
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [T && (0, r.jsx)(o.u, {
              text: t !== g.IE4.UNKNOWN && null != n ? "".concat(n.toFixed(0), " ms") : null,
              children: (0, r.jsx)(c.P3F, {
                className: b.clickablePing,
                onClick: e => {
                  (0, u.v)(s.Z.RTC_PANEL, u.d.CONNECTION_STATUS), l(e)
                },
                children: (0, r.jsx)(v, {
                  quality: t,
                  largePing: S
                })
              })
            }), (0, r.jsxs)("div", {
              className: b.labelWrapper,
              children: [(0, r.jsx)(c.P3F, {
                onClick: e => {
                  (0, u.v)(s.Z.RTC_PANEL, u.d.CONNECTION_STATUS), l(e)
                },
                children: (0, r.jsx)(p.Z, {
                  text: Z,
                  textVariant: C,
                  hasVideo: I,
                  className: h[P],
                  hasConnectedChannel: null != O
                })
              }), S ? y : null]
            })]
          })
        }
      })
    }), S ? null : y]
  })
}