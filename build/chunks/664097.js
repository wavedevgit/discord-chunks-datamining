/** Chunk was on 35755 **/
/** chunk id: 664097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => o
}), require("./642613.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk115130 = require("./115130.js"),
  Chunk701488 = require("./701488.js");
let o = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, Chunk442837.cj)([Chunk115130.Z], () => ({
    isEnabled: Chunk115130.Z.getIsEnabled(),
    lastUsedObject: Chunk115130.Z.getLastUsedObject()
  }), []), n = (0, Chunk442837.Wu)([Chunk115130.Z], () => Chunk115130.Z.getDeveloperShelfItems(), []);
  return Chunk647438.useMemo(() => module ? require.map(e => {
    var t, n;
    return {
      application: e,
      activity: (t = function(e) {
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
      }({}, a.wT, e.embeddedActivityConfig), n = n = {
        application_id: e.id
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)
    }
  }).sort((e, n) => {
    let i = t[e.application.id],
      l = t[n.application.id];
    return null == i ? 1 : null == l ? false : l - i
  }) : [], [require, module, exports])
}