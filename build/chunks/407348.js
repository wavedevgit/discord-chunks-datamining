/** Chunk was on 47950 **/
/** chunk id: 407348, original params: e,t,r (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.Swatch = true;
var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  o = s(require("./64700.js")),
  a = s(require("./205662.js")),
  Chunk684463 = require("./684463.js"),
  l = s(require("./896132.js"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = exports.Swatch = function(e) {
  var t = e.color,
    r = e.style,
    i = e.onClick,
    s = true === i ? function() {} : i,
    u = e.onHover,
    c = e.title,
    p = true === c ? t : c,
    d = e.children,
    f = e.focus,
    h = e.focusStyle,
    b = "transparent" === t,
    v = (0, a.default)({
      default: {
        swatch: n({
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
  }), o.default.createElement("div", n({
    style: v.swatch,
    onClick: function(e) {
      return s(t, e)
    },
    title: p,
    tabIndex: 0,
    onKeyDown: function(e) {
      return 13 === e.keyCode && s(t, e)
    }
  }, g), d, b && o.default.createElement(l.default, {
    borderRadius: v.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
};
exports.default = (0, Chunk684463.handleFocus)(u)