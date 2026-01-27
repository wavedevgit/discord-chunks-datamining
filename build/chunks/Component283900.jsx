/** Chunk was on 60667 **/
/** chunk id: 283900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  H: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk837921 = require("./837921.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk241938 = require("./241938.js");
let d = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  u = e => {
    var t, n;
    let {
      user: s,
      avatarSize: c = i._3J.SIZE_48
    } = e, {
      avatarSrc: u,
      avatarDecorationSrc: _,
      eventHandlers: p
    } = (0, l.A)({
      userId: null == s ? true : s.id,
      size: c
    });
    return (0, r.jsx)("div", (t = function(e) {
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
    }({}, p), n = n = {
      children: (0, r.jsx)(d, {
        src: u,
        avatarDecoration: _,
        size: c,
        "aria-label": o.intl.formatToPlainString(a.default.kFj4h1, {
          name: s.username
        })
      })
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
  },
  _ = e => {
    let {
      currentUser: t,
      otherUser: n,
      children: i
    } = e;
    return (0, r.jsx)("div", {
      className: c.b,
      children: (0, r.jsxs)("div", {
        className: c.M,
        children: [(0, r.jsx)(u, {
          user: t
        }), i, (0, r.jsx)(u, {
          user: n
        })]
      })
    })
  }