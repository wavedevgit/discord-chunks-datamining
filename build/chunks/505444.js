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
var i = t,
  o = {
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
  },
  a = !!("undefined" != typeof window && window.document && window.document.createElement),
  s = {
    canUseDOM: a,
    canUseWorkers: "undefined" != typeof Worker,
    canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
    canUseViewport: a && !!window.screen,
    isInWorker: !a
  },
  l = i;

function c(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || l.hasOwnProperty(e) && l[e] ? ("" + t).trim() : t + "px"
}

function u(e) {
  return function() {
    return e
  }
}
var d = function() {};
d.thatReturns = u, d.thatReturnsFalse = u(false), d.thatReturnsTrue = u(true), d.thatReturnsNull = u(null), d.thatReturnsThis = function() {
  return this
}, d.thatReturnsArgument = function(e) {
  return e
};
var f = false;
if (s.canUseDOM) {
  var p = document.createElement("div").style;
  try {
    p.font = ""
  } catch (e) {
    f = true
  }
}
module.exports = {
  createDangerousStringForStyles: function(e) {},
  setValueForStyles: function(e, t, n) {
    var r = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var a = 0 === i.indexOf("--"),
          s = c(i, t[i], a);
        if ("float" === i && (i = "cssFloat"), a) r.setProperty(i, s);
        else if (s) r[i] = s;
        else {
          var l = f && o[i];
          if (l)
            for (var u in l) r[u] = "";
          else r[i] = ""
        }
      }
  }
}