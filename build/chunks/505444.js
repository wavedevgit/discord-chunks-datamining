/** Chunk was on web.js **/
/** chunk id: 505444, original params: e (module,exports,re quire) **/
"use strict";
var t = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

function n(e, t) {
  return e + t.charAt(0).toUpperCase() + t.substring(1)
}
var r = ["Webkit", "ms", "Moz", "O"];
Object.keys(t).forEach(function(e) {
  r.forEach(function(r) {
    t[n(r, e)] = t[e]
  })
});
var i = {
    isUnitlessNumber: t,
    shorthandPropertyExpansions: {
      background: {
        backgroundAttachment: true,
        backgroundColor: true,
        backgroundImage: true,
        backgroundPositionX: true,
        backgroundPositionY: true,
        backgroundRepeat: true
      },
      backgroundPosition: {
        backgroundPositionX: true,
        backgroundPositionY: true
      },
      border: {
        borderWidth: true,
        borderStyle: true,
        borderColor: true
      },
      borderBottom: {
        borderBottomWidth: true,
        borderBottomStyle: true,
        borderBottomColor: true
      },
      borderLeft: {
        borderLeftWidth: true,
        borderLeftStyle: true,
        borderLeftColor: true
      },
      borderRight: {
        borderRightWidth: true,
        borderRightStyle: true,
        borderRightColor: true
      },
      borderTop: {
        borderTopWidth: true,
        borderTopStyle: true,
        borderTopColor: true
      },
      font: {
        fontStyle: true,
        fontVariant: true,
        fontWeight: true,
        fontSize: true,
        lineHeight: true,
        fontFamily: true
      },
      outline: {
        outlineWidth: true,
        outlineStyle: true,
        outlineColor: true
      }
    }
  },
  o = !!("undefined" != typeof window && window.document && window.document.createElement),
  a = {
    canUseDOM: o,
    canUseWorkers: "undefined" != typeof Worker,
    canUseEventListeners: o && !!(window.addEventListener || window.attachEvent),
    canUseViewport: o && !!window.screen,
    isInWorker: !o
  },
  s = i.isUnitlessNumber;

function l(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || s.hasOwnProperty(e) && s[e] ? ("" + t).trim() : t + "px"
}

function c(e) {
  return function() {
    return e
  }
}
var u = function() {};
u.thatReturns = c, u.thatReturnsFalse = c(false), u.thatReturnsTrue = c(true), u.thatReturnsNull = c(null), u.thatReturnsThis = function() {
  return this
}, u.thatReturnsArgument = function(e) {
  return e
};
var d = false;
if (a.canUseDOM) {
  var f = document.createElement("div").style;
  try {
    f.font = ""
  } catch (e) {
    d = true
  }
}
module.exports = {
  createDangerousStringForStyles: function(e) {},
  setValueForStyles: function(e, t, n) {
    var r = e.style;
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var a = 0 === o.indexOf("--"),
          s = l(o, t[o], a);
        if ("float" === o && (o = "cssFloat"), a) r.setProperty(o, s);
        else if (s) r[o] = s;
        else {
          var c = d && i.shorthandPropertyExpansions[o];
          if (c)
            for (var u in c) r[u] = "";
          else r[o] = ""
        }
      }
  }
}