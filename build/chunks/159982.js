/** Chunk was on web.js **/
/** chunk id: 159982, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk619881 = require("./619881.js"),
  Chunk444746 = require("./444746.js");
let a = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: function(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(e) {
      var n = t.styles[e] || {},
        a = t.attributes[e] || {},
        s = t.elements[e];
      (0, i.sb)(s) && (0, r.A)(s) && (Object.assign(s.style, n), Object.keys(a).forEach(function(e) {
        var t = a[e];
        false === t ? s.removeAttribute(e) : s.setAttribute(e, true === t ? "" : t)
      }))
    })
  },
  effect: function(e) {
    var t = e.state,
      n = {
        popper: {
          position: t.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
      function() {
        Object.keys(t.elements).forEach(function(e) {
          var a = t.elements[e],
            s = t.attributes[e] || {},
            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
              return e[t] = "", e
            }, {});
          (0, i.sb)(a) && (0, r.A)(a) && (Object.assign(a.style, o), Object.keys(s).forEach(function(e) {
            a.removeAttribute(e)
          }))
        })
      }
  },
  requires: ["computeStyles"]
}