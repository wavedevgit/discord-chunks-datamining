/** Chunk was on 60667 **/
/** chunk id: 492499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk379197 = require("./379197.js"),
  Chunk488430 = require("./488430.js"),
  Chunk311907 = require("./311907.js"),
  Chunk457421 = require("./457421.js"),
  Chunk940622 = require("./940622.js"),
  Chunk559474 = require("./559474.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk795056 = require("./795056.js"),
  Chunk996613 = require("./996613.js");
let p = () => {
  let e = (0, o.mb)(c.RN.UPSELL_BANNER),
    t = (0, o.mb)(c.RN.UPSELL_BANNER_POPOUT),
    n = (0, s.bG)([a.A], () => a.A.getMarketingBySurface(i.R.EDIT_PROFILE_SETTINGS)),
    p = r.useMemo(() => null != n ? n : {
      asset: _,
      popoutAsset: u,
      title: d.intl.string(d.t.QZVVBh),
      body: d.intl.string(d.t.sajmAq),
      version: 0,
      revertTextColor: false
    }, [n]);
  return r.useMemo(() => {
    var n, r;
    return n = function(e) {
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
    }({}, p), r = r = {
      type: l.G.BANNER,
      asset: null != e ? e : p.asset,
      popoutAsset: null != t ? t : p.popoutAsset
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n
  }, [e, t, p])
}