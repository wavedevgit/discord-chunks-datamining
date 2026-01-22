/** Chunk was on 83898 **/
/** chunk id: 277342, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk523875 = require("./523875.jsx"),
  Chunk270737 = require("./270737.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk494783 = require("./494783.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let t = (0, l.Us)(),
    {
      activeVoice: r
    } = (0, a.f)(),
    s = null != r,
    b = e ? "unmute" : "mute",
    p = (0, u.V)(b),
    O = (0, o.L)(b),
    f = s ? p : O,
    y = t === c.BRT.POPOUT ? s ? e ? i.Ts3 : i.A4$ : e ? i.z0P : i.cNw : f.Component;
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
      Component: y
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
  }, [f, y])
}