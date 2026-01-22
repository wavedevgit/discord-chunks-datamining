/** Chunk was on 21738 **/
/** chunk id: 979080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => g,
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk65412 = require("./65412.js"),
  Chunk554146 = require("./554146.js"),
  Chunk287683 = require("./287683.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk728458 = require("./728458.js"),
  Chunk716600 = require("./716600.jsx"),
  Chunk848295 = require("./848295.jsx");

function g(e) {
  let {
    promotionId: t,
    content: n,
    isPreview: r
  } = e, s = a.m.fromBinary((0, i.A)(n));
  if ("announcementModalVariant1" !== s.properties.oneofKind) return null;
  {
    let {
      isDismissed: e
    } = (0, p.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
    return !r && e ? null : (r && (s.properties.announcementModalVariant1.dismissKey = ""), s)
  }
}

function m(e) {
  let {
    componentId: t,
    promotionId: n,
    renderModalProps: i,
    properties: l
  } = e, {
    location: a
  } = (0, o.p)(), {
    analyticsLocations: p
  } = (0, d.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), g = (0, c.Ay)(), m = (0, s.qB1)(g);
  if ("announcementModalVariant1" === l.properties.oneofKind) {
    let e = (0, h.t)({
      componentId: t,
      promotionId: n,
      content: l.properties.announcementModalVariant1,
      renderModalProps: i,
      analyticsLocations: p,
      analyticsLocation: a,
      isLightTheme: m
    });
    return (0, r.jsx)(A.A, function(e) {
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
    }({}, e))
  }
  return f.A.captureMessage("Property type ".concat(l.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}