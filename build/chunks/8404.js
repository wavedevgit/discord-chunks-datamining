/** Chunk was on 6164 **/
/** chunk id: 8404, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  b: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk652844 = require("./652844.jsx"),
  Chunk747906 = require("./747906.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk378441 = require("./378441.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = (0, l.bp)(),
    {
      activeVoice: r
    } = (0, c.o)(),
    s = null != r,
    b = e ? "unmute" : "mute",
    p = (0, u.P)(b),
    O = (0, o.O)(b),
    f = s ? p : O,
    d = t === a.IlC.POPOUT ? s ? e ? i.TYr : i.x8H : e ? i.nRN : i.S6n : f.Component;
  return n.useMemo(() => {
    var e, t;
    return e = function(e) {
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
    }({}, f), t = t = {
      Component: d
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
  }, [f, d])
}