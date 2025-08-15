/** Chunk was on 82081 **/
/** chunk id: 937860, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157448 = require("./157448.js");
let s = e => {
  var t, r;
  return (0, n.jsx)(a.zx, (t = function(e) {
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
  }({
    "data-migration-pending": true
  }, e), r = r = {
    "aria-label": i.intl.string(i.t.cpT0Cg),
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.NONE,
    wrapperClassName: c.closeButton,
    innerClassName: c.closeButtonInner,
    children: (0, n.jsx)(o.Uz9, {
      size: "refresh_sm",
      className: c.closeButtonIcon
    })
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
}