/** Chunk was on 1272 **/
/** chunk id: 318199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _,
  r: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk581282 = require("./581282.js"),
  Chunk704215 = require("./704215.js"),
  Chunk8853 = require("./8853.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk960048 = require("./960048.js"),
  Chunk276792 = require("./276792.jsx"),
  Chunk290347 = require("./290347.jsx");

function m(e) {
  let {
    promotionId: t,
    content: n,
    isPreview: r
  } = e, s = a.t.fromBinary((0, i.c)(n));
  if ("announcementModalVariant1" !== s.properties.oneofKind) return null;
  {
    let {
      isDismissed: e
    } = (0, p.Ob)(l.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
    return !r && e ? null : (r && (s.properties.announcementModalVariant1.dismissKey = ""), s)
  }
}

function _(e) {
  let {
    componentId: t,
    promotionId: n,
    renderModalProps: i,
    properties: l
  } = e, {
    location: a
  } = (0, o.O)(), {
    analyticsLocations: p
  } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), m = (0, c.ZP)(), _ = (0, s.apv)(m);
  if ("announcementModalVariant1" === l.properties.oneofKind) {
    let e = (0, h.N)({
      componentId: t,
      promotionId: n,
      content: l.properties.announcementModalVariant1,
      renderModalProps: i,
      analyticsLocations: p,
      analyticsLocation: a,
      isLightTheme: _
    });
    return (0, r.jsx)(g.Z, function(e) {
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
  return f.Z.captureMessage("Property type ".concat(l.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}