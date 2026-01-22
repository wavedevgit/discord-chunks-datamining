/** Chunk was on 90617 **/
/** chunk id: 663072, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk523527 = require("./523527.js"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk677706 = require("./677706.js");

function f(e) {
  let {
    onClose: t
  } = e, f = function(e, t) {
    if (null == e) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["onClose"]), p = (0, n.jsx)("img", {
    src: r(947137),
    className: u.Qw,
    alt: ""
  });
  return (0, n.jsx)(s.A, function(e) {
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
    title: b.intl.string(b.t.YqknLn),
    glowUp: b.intl.string(b.t["3hj4kU"]),
    body: b.intl.string(b.t["3hj4kU"]),
    artElement: p,
    artContainerClassName: u.JS,
    type: c.e.VOICE_FILTERS_UPSELL,
    onClose: t,
    onSubscribeClick: o.A,
    secondaryCTA: b.intl.string(b.t.ZnqyZ2),
    onSecondaryClick: function() {
      (0, o.A)(), t(), l.default.track(i.HAw.PREMIUM_PROMOTION_OPENED, {
        location_section: i.JJy.VOICE_FILTERS_UPSELL_MODAL,
        location_object: i.ZSU.NAVIGATION_LINK
      }), (0, a.pX)(i.BVt.APPLICATION_STORE)
    },
    showEnhancedUpsell: true,
    enableArtBoxShadow: false,
    headerClassName: u.wx,
    modalClassName: u.yl,
    smallText: true,
    footerClassName: u.qr,
    subscribeButtonClassname: u.xF,
    showBetaBadge: true
  }, f))
}