/** Chunk was on 10165 **/
/** chunk id: 166335, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk174609 = require("./174609.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk790527 = require("./790527.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk468424 = require("./468424.js");

function d(t) {
  var {
    onClose: e
  } = t, d = function(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
      if (null == t) return {};
      var r, n, o = {},
        a = Object.keys(t);
      for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
  }(t, ["onClose"]);
  let f = (0, n.jsx)("img", {
    src: r(414190),
    className: b.art,
    alt: ""
  });
  return (0, n.jsx)(c.Z, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({
    title: u.intl.string(u.t.YqknLn),
    glowUp: u.intl.string(u.t["3hj4kU"]),
    body: u.intl.string(u.t["3hj4kU"]),
    artElement: f,
    artContainerClassName: b.artContainer,
    type: l.cd.VOICE_FILTERS_UPSELL,
    onClose: e,
    onSubscribeClick: o.Z,
    secondaryCTA: u.intl.string(u.t.ZnqyZ2),
    onSecondaryClick: function() {
      (0, o.Z)(), e(), s.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: i.jXE.VOICE_FILTERS_UPSELL_MODAL,
        location_object: i.qAy.NAVIGATION_LINK
      }), (0, a.uL)(i.Z5c.APPLICATION_STORE)
    },
    showEnhancedUpsell: true,
    enableArtBoxShadow: false,
    headerClassName: b.header,
    modalClassName: b.modal,
    smallText: true,
    footerClassName: b.footer,
    subscribeButtonClassname: b.subscribeButton,
    showBetaBadge: true
  }, d))
}