/** Chunk was on 13478 **/
/** chunk id: 8404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk652844 = require("./652844.jsx"),
  Chunk747906 = require("./747906.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk378441 = require("./378441.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = (0, a.bp)(),
    {
      activeVoice: n
    } = (0, s.o)(),
    u = null != n,
    d = e ? "unmute" : "mute",
    p = (0, o.P)(d),
    m = (0, i.O)(d),
    f = u ? p : m,
    b = t === c.IlC.POPOUT ? u ? e ? l.TYr : l.x8H : e ? l.nRN : l.S6n : f.Component;
  return r.useMemo(() => {
    var e, t;
    return e = function(e) {
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
    }({}, f), t = t = {
      Component: b
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
  }, [f, b])
}