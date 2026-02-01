/** Chunk was on 9207 **/
/** chunk id: 390370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk837921 = require("./837921.js"),
  Chunk834981 = require("./834981.js"),
  Chunk475833 = require("./475833.jsx"),
  Chunk694164 = require("./694164.js");
let d = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function u(e) {
  var t, n;
  let {
    otherUser: s,
    status: u
  } = e, _ = (0, a.XC)(s.id, u), {
    avatarSrc: p,
    avatarDecorationSrc: m,
    eventHandlers: g
  } = (0, l.A)({
    userId: s.id,
    size: i._3J.SIZE_40,
    animateOnHover: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", (t = function(e) {
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
    }({}, g), n = n = {
      children: (0, r.jsx)(d, {
        className: c.my,
        src: p,
        avatarDecoration: m,
        size: i._3J.SIZE_40,
        "aria-label": s.username
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
    }), t)), (0, r.jsxs)("div", {
      className: c.yt,
      children: [(0, r.jsx)("div", {
        className: c.Vx,
        children: (0, r.jsx)(o.A, {
          user: s
        })
      }), (0, r.jsx)(i.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: _
      })]
    })]
  })
}