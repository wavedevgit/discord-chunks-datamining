/** Chunk was on 78238 **/
/** chunk id: 734337, original params: e,t,r (module,exports,require) **/
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
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.x.DEFAULT,
    [r, f, p] = (0, a.A)(e, t),
    y = (0, o.bG)([l.Ay], () => l.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
  return r ? (0, n.jsx)(i.sLh, {
    id: "self-video-hide",
    label: b.intl.string(b.t.MH8ESU),
    checked: !f,
    action: () => {
      if (y || f) return p(!f);
      (0, i.qfG)(e => {
        var t, r;
        return (0, n.jsx)(c.A, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, e), r = r = {
          type: u.f.VIDEO,
          onConfirm: () => p(!f)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    }
  }) : null
}