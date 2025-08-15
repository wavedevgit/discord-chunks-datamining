/** Chunk was on 3115 **/
/** chunk id: 223260, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk348364 = require("./348364.js"),
  Chunk485400 = require("./485400.js"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  };
let s = (0, Chunk348364.I)(function(e) {
  var t = e.color,
    r = e.style,
    a = e.onClick,
    s = true === a ? function() {} : a,
    u = e.onHover,
    c = e.title,
    p = true === c ? t : c,
    f = e.children,
    d = e.focus,
    h = e.focusStyle,
    b = "transparent" === t,
    v = (0, o.default)({
      default: {
        swatch: l({
          background: t,
          height: "100%",
          width: "100%",
          cursor: "pointer",
          position: "relative",
          outline: "none"
        }, r, d ? true === h ? {} : h : {})
      }
    }),
    g = {};
  return u && (g.onMouseOver = function(e) {
    return u(t, e)
  }), n.createElement("div", l({
    style: v.swatch,
    onClick: function(e) {
      return s(t, e)
    },
    title: p,
    tabIndex: 0,
    onKeyDown: function(e) {
      return 13 === e.keyCode && s(t, e)
    }
  }, g), f, b && n.createElement(i.Z, {
    borderRadius: v.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})