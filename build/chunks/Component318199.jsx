/** Chunk was on 1272 **/
/** chunk id: 318199, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m,
  r: () => g
}), require("./781311.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk581282 = require("./581282.js"),
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

function g(e) {
  let {
    content: t,
    isPreview: n
  } = e, r = l.t.fromBinary((0, i.c)(t));
  return "announcementModalVariant1" !== r.properties.oneofKind || !n && (0 === r.properties.announcementModalVariant1.dismissKey.trim().length || (0, d.zu)(Number(r.properties.announcementModalVariant1.dismissKey))) ? null : (n && (r.properties.announcementModalVariant1.dismissKey = ""), r)
}

function m(e) {
  let {
    componentId: t,
    renderModalProps: n,
    properties: i
  } = e, {
    location: l
  } = (0, s.O)(), {
    analyticsLocations: d
  } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), g = (0, o.ZP)(), m = (0, a.apv)(g);
  if ("announcementModalVariant1" === i.properties.oneofKind) {
    let e = (0, f.N)({
      componentId: t,
      content: i.properties.announcementModalVariant1,
      renderModalProps: n,
      analyticsLocations: d,
      analyticsLocation: l,
      isLightTheme: m
    });
    return (0, r.jsx)(h.Z, function(e) {
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
  return p.Z.captureMessage("Property type ".concat(i.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}