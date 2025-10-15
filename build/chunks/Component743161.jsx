/** Chunk was on 84349 **/
/** chunk id: 743161, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604590 = require("./604590.js");
let C = Chunk647438.memo(function(e) {
  var n, t, {
      context: C
    } = e,
    f = function(e, n) {
      if (null == e) return {};
      var t, o, r = function(e, n) {
        if (null == e) return {};
        var t, o, r = {},
          a = Object.keys(e);
        for (o = 0; o < a.length; o++) t = a[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
        return r
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (o = 0; o < a.length; o++) t = a[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
      }
      return r
    }(e, ["context"]);
  let m = (0, a.e7)([c.Z], () => c.Z.shouldShowModal());
  r.useEffect(() => {
    m || (0, i.Fvk)(l.e9)
  });
  let u = (0, b.Z)();
  return (0, o.jsx)("span", {
    style: l.u$,
    children: (0, o.jsx)(i.Y0X, (n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), o.forEach(function(n) {
          var o;
          o = t[n], n in e ? Object.defineProperty(e, n, {
            value: o,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = o
        })
      }
      return e
    }({
      className: s.root,
      "aria-label": p.intl.string(p.t.shUONg),
      size: i.CgR.DYNAMIC
    }, f), t = t = {
      parentComponent: "AppLauncherModal",
      "data-migration-pending": true,
      children: (0, o.jsx)(d.Z, {
        context: C,
        entrypoint: _._b.VOICE,
        initHistory: u
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t.push.apply(t, o)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  })
})