/** Chunk was on 30202 **/
/** chunk id: 196033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => p
});
var Chunk73800 = require("./73800.js"),
  Chunk115434 = require("./115434.js"),
  Chunk264181 = require("./264181.js"),
  Chunk442837 = require("./442837.js"),
  Chunk874703 = require("./874703.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk513767 = require("./513767.js"),
  Chunk78230 = require("./78230.js");
let p = () => {
  let e = (0, Chunk619899.zL)(Chunk281598.jE.UPSELL_BANNER),
    t = (0, Chunk619899.zL)(Chunk281598.jE.UPSELL_BANNER_POPOUT),
    n = (0, Chunk442837.e7)([Chunk874703.Z], () => Chunk874703.Z.getMarketingBySurface(Chunk115434.K.EDIT_PROFILE_SETTINGS)),
    p = Chunk73800.useMemo(() => null != require ? require : {
      asset: Chunk78230,
      popoutAsset: Chunk513767,
      title: Chunk388032.intl.string(Chunk388032.t.QZVVBg),
      body: Chunk388032.intl.string(Chunk388032.t.sajmAg),
      version: 0,
      revertTextColor: false
    }, [require]);
  return Chunk73800.useMemo(() => {
    var n, i;
    return n = function(e) {
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
    }({}, p), i = i = {
      type: Chunk264181.Z.BANNER,
      asset: null != module ? module : p.asset,
      popoutAsset: null != exports ? exports : p.popoutAsset
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(require, Object.getOwnPropertyDescriptors(Chunk73800)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(Chunk73800)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), require
  }, [module, exports, p])
}