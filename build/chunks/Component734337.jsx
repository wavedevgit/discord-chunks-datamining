/** Chunk was on 92617 **/
/** chunk id: 734337, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964404 = require("./964404.js"),
  Chunk121046 = require("./121046.js"),
  Chunk513963 = require("./513963.jsx"),
  Chunk951829 = require("./951829.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.x.DEFAULT,
    [n, f, p] = (0, o.A)(e, t),
    b = (0, i.bG)([l.Ay], () => l.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, r.jsx)(a.sLh, {
    id: "self-video-hide",
    label: s.intl.string(s.t.MH8ESU),
    checked: !f,
    action: () => {
      if (b || f) return p(!f);
      (0, a.qfG)(e => {
        var t, n;
        return (0, r.jsx)(d.A, (t = function(e) {
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
        }({}, e), n = n = {
          type: c.f.VIDEO,
          onConfirm: () => p(!f)
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
      })
    }
  }) : null
}