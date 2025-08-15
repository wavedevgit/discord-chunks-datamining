/** Chunk was on 62981 **/
/** chunk id: 743161, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk421591 = require("./421591.jsx"),
  Chunk496977 = require("./496977.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604590 = require("./604590.js");
let _ = Chunk73800.memo(function(e) {
  var n, t, {
      context: _
    } = e,
    f = function(e, n) {
      if (null == e) return {};
      var t, r, o = function(e, n) {
        if (null == e) return {};
        var t, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, n);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["context"]);
  let m = (0, i.e7)([c.Z], () => c.Z.shouldShowModal());
  o.useEffect(() => {
    m || (0, a.Fvk)(u.e9)
  });
  let C = (0, s.Z)();
  return (0, r.jsx)("span", {
    style: u.u$,
    children: (0, r.jsx)(a.Y0X, (n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          var r;
          r = t[n], n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = r
        })
      }
      return e
    }({
      className: b.root,
      "aria-label": p.intl.string(p.t.shUONj),
      size: a.CgR.DYNAMIC
    }, f), t = t = {
      parentComponent: "AppLauncherModal",
      "data-migration-pending": true,
      children: (0, r.jsx)(d.Z, {
        context: _,
        entrypoint: l._b.VOICE,
        initHistory: C
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  })
})