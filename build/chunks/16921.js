/** Chunk was on 47950 **/
/** chunk id: 16921, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk152080 = require("./152080.js"),
  Chunk587033 = require("./587033.js"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  };
let s = (0, Chunk152080.l)(function(e) {
  var t = e.color,
    r = e.style,
    a = e.onClick,
    s = true === a ? function() {} : a,
    u = e.onHover,
    c = e.title,
    p = true === c ? t : c,
    d = e.children,
    f = e.focus,
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
        }, r, f ? true === h ? {} : h : {})
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
  }, g), d, b && n.createElement(i.A, {
    borderRadius: v.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
})