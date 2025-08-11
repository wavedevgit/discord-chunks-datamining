/** Chunk was on 21153 **/
/** chunk id: 160376, original params: e,t,r (module,exports,require) **/
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
  o = s(require("./73800.js")),
  a = s(require("./9196.js")),
  Chunk222855 = require("./222855.js"),
  l = s(require("./725973.js"));

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
    f = e.children,
    d = e.focus,
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
        }, r, d ? true === h ? {} : h : {})
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
  }, g), f, b && o.default.createElement(l.default, {
    borderRadius: v.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }))
};
exports.default = (0, Chunk222855.handleFocus)(u)