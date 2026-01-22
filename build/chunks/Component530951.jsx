/** Chunk was on 22540 **/
/** chunk id: 530951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk244975 = require("./244975.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk774911 = require("./774911.js"),
  Chunk936037 = require("./936037.js");

function O() {
  return (0, r.jsx)("div", {
    className: u.J,
    children: (0, r.jsx)("img", {
      src: p,
      className: u.s,
      alt: ""
    })
  })
}

function f(e) {
  let {
    onClose: t,
    source: n
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, o, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          c = Object.getOwnPropertyNames(e);
        for (r = 0; r < c.length; r++) n = c[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
    return c
  }(e, ["onClose", "source"]);
  return (0, r.jsx)(l.A, function(e) {
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
  }({
    artElement: (0, r.jsx)(O, {}),
    type: i.e.FOR_LATER_MODAL_UPSELL,
    title: s.intl.string(s.t.w4DRbZ),
    body: s.intl.string(s.t.F6u3E3),
    glowUp: s.intl.string(s.t.F6u3E3),
    secondaryCTA: s.intl.string(s.t.PcTCB7),
    onSecondaryClick: function() {
      c.default.track(a.HAw.PREMIUM_PROMOTION_OPENED, {
        location_section: a.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
        location_object: a.ZSU.NAVIGATION_LINK
      }), t(), (0, o.pX)(a.BVt.APPLICATION_STORE)
    },
    showEnhancedUpsell: true,
    analyticsSource: n,
    analyticsLocation: {
      section: a.JJy.PREMIUM_FOR_LATER_UPSELL_MODAL,
      object: a.ZSU.BUTTON_CTA
    },
    onClose: t
  }, u))
}