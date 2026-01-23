/** Chunk was on 97492 **/
/** chunk id: 666328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964404 = require("./964404.js"),
  Chunk469707 = require("./469707.js"),
  Chunk513963 = require("./513963.jsx"),
  Chunk951829 = require("./951829.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t) {
  let [n, d, p] = (0, a.A)(e, t), h = (0, l.bG)([s.Ay], () => s.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, r.jsx)(i.sLh, {
    id: "self-stream-hide",
    label: u.intl.string(u.t.aol7iW),
    checked: !d,
    action: () => {
      if (h || d) return p(!d);
      (0, i.qfG)(e => {
        var t, n;
        return (0, r.jsx)(o.A, (t = function(e) {
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
          type: c.f.STREAM,
          onConfirm: () => p(!d)
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