/** Chunk was on 72323 **/
/** chunk id: 933006, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk2052 = require("./2052.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk174609 = require("./174609.js"),
  Chunk626135 = require("./626135.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk940165 = require("./940165.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk712595 = require("./712595.js");

function j(t) {
  var e, j, {
      onClose: _
    } = t,
    g = function(t, e) {
      if (null == t) return {};
      var n, r, o = function(t, e) {
        if (null == t) return {};
        var n, r, o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
      }
      return o
    }(t, ["onClose"]);
  let m = (0, c.O)(),
    {
      analyticsLocations: S
    } = (0, s.ZP)(),
    [v, x] = o.useState(false);
  o.useEffect(() => {
    v || (p.default.track(f.rMx.PREMIUM_UPSELL_VIEWED, {
      type: b.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: m.location,
      location_stack: S
    }), x(true))
  }, [m.location, S, v]);
  let P = (0, d.LB)(false);
  return (0, r.jsx)(u.Z, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    type: b.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: C.image,
    artURL: n(98165),
    title: y.intl.string(y.t.c0X1Cw),
    glowUp: y.intl.string(y.t.c0X1Cw),
    body: y.intl.string(y.t.SX63mJ),
    showEnhancedUpsell: true,
    analyticsLocation: {
      section: f.jXE.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: false,
    onSubscribeClick: l.Z,
    secondaryCTA: y.intl.string(y.t.PcTCBw),
    onSecondaryClick: () => {
      _(), a.Z.open(f.oAB.PREMIUM)
    },
    onClose: _
  }, g), j = j = {
    children: (0, r.jsx)(i.xJW, {
      title: y.intl.string(y.t["K/hjQU"]),
      className: C.optionsContainerWrapper,
      children: (0, r.jsx)("div", {
        className: C.optionsContainer,
        children: P.map((t, e) => {
          let n = t.value;
          return n === d.YC.CLASSIC ? null : (0, r.jsx)(O.Z, {
            label: t.label,
            soundpack: n,
            description: t.description,
            location: "upsellModal"
          }, e)
        })
      })
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(j)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(j)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(j, t))
  }), e))
}