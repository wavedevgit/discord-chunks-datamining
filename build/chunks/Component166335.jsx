/** Chunk was on 10165 **/
/** chunk id: 166335, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
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
  Chunk196349 = require("./196349.js");

function u(e) {
  var {
    onClose: t
  } = e, u = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["onClose"]);
  let f = (0, n.jsx)("img", {
    src: r(414190),
    className: b.art,
    alt: ""
  });
  return (0, n.jsx)(s.Z, function(e) {
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
    title: d.intl.string(d.t.YqknLn),
    glowUp: d.intl.string(d.t["3hj4kU"]),
    body: d.intl.string(d.t["3hj4kU"]),
    artElement: f,
    artContainerClassName: b.artContainer,
    type: l.cd.VOICE_FILTERS_UPSELL,
    onClose: t,
    onSubscribeClick: o.Z,
    secondaryCTA: d.intl.string(d.t.ZnqyZ2),
    onSecondaryClick: function() {
      (0, o.Z)(), t(), c.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
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
  }, u))
}