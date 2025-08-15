/** Chunk was on 30202 **/
/** chunk id: 198952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  r: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk998502 = require("./998502.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574999 = require("./574999.js");
let d = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  u = e => {
    var t, n;
    let {
      user: a,
      avatarSize: c = r.EFr.SIZE_48
    } = e, {
      avatarSrc: u,
      avatarDecorationSrc: m,
      eventHandlers: p
    } = (0, s.Z)({
      userId: null == a ? true : a.id,
      size: c
    });
    return (0, i.jsx)("div", (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, p), n = n = {
      children: (0, i.jsx)(d, {
        src: u,
        avatarDecoration: m,
        size: c,
        "aria-label": o.intl.formatToPlainString(l.default.kFj4h4, {
          name: a.username
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  m = e => {
    let {
      currentUser: t,
      otherUser: n,
      children: r
    } = e;
    return (0, i.jsx)("div", {
      className: c.avatarPairContainer,
      children: (0, i.jsxs)("div", {
        className: c.avatarPair,
        children: [(0, i.jsx)(u, {
          user: t
        }), r, (0, i.jsx)(u, {
          user: n
        })]
      })
    })
  }