/** Chunk was on web.js **/
/** chunk id: 266261, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = r(require("./830184.js")),
  Chunk41958 = require("./41958.js"),
  Chunk603113 = require("./603113.js"),
  Chunk179237 = require("./179237.js"),
  l = r(require("./865481.js")),
  Chunk363920 = require("./363920.js"),
  Chunk698091 = require("./698091.js"),
  d = r(require("./64995.js")),
  f = /^--/;

function _(e, t) {
  return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || f.test(e) || m.hasOwnProperty(e) && m[e] ? ("" + t).trim() : t + "px"
}
var p = {};

function h(e, t) {
  if (!e.nodeType || !e.setAttribute) returnfalse;
  var n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
    r = t,
    a = r.style,
    o = r.children,
    s = r.scrollTop,
    l = r.scrollLeft,
    c = i(r, ["style", "children", "scrollTop", "scrollLeft"]),
    d = Object.values(c),
    h = Object.keys(c).map(function(t) {
      return n || e.hasAttribute(t) ? t : p[t] || (p[t] = t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
      }))
    });
  u.Globals.frameLoop.onWrite(function() {
    for (var t in true !== o && (e.textContent = o), a)
      if (a.hasOwnProperty(t)) {
        var n = _(t, a[t]);
        "float" === t ? t = "cssFloat" : f.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
      } h.forEach(function(t, n) {
      e.setAttribute(t, d[n])
    }), true !== s && (e.scrollTop = s), true !== l && (e.scrollLeft = l)
  })
}
var m = {
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
  },
  g = function(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1)
  },
  E = ["Webkit", "Ms", "Moz", "O"];
m = Object.keys(m).reduce(function(e, t) {
  return E.forEach(function(n) {
    return e[g(n, t)] = e[t]
  }), e
}, m);
var b = /^(matrix|translate|scale|rotate|skew)/,
  y = /^(translate)/,
  O = /^(rotate|skew)/,
  v = function(e, t) {
    return u.is.num(e) && 0 !== e ? e + t : e
  },
  I = function e(t, n) {
    return u.is.arr(t) ? t.every(function(t) {
      return e(t, n)
    }) : u.is.num(t) ? t === n : parseFloat(t) === n
  },
  S = function(e) {
    function t(t) {
      var n = t.x,
        r = t.y,
        a = t.z,
        o = i(t, ["x", "y", "z"]),
        s = [],
        l = [];
      return (n || r || a) && (s.push([n || 0, r || 0, a || 0]), l.push(function(e) {
        return ["translate3d(" + e.map(function(e) {
          return v(e, "px")
        }).join(",") + ")", I(e, 0)]
      })), u.each(o, function(e, t) {
        if ("transform" === t) s.push([e || ""]), l.push(function(e) {
          return [e, "" === e]
        });
        else if (b.test(t)) {
          if (delete o[t], u.is.und(e)) return;
          var n = y.test(t) ? "px" : O.test(t) ? "deg" : "";
          s.push(u.toArray(e)), l.push("rotate3d" === t ? function(e) {
            var t = e[0],
              r = e[1],
              i = e[2],
              a = e[3];
            return ["rotate3d(" + t + "," + r + "," + i + "," + v(a, n) + ")", I(a, 0)]
          } : function(e) {
            return [t + "(" + e.map(function(e) {
              return v(e, n)
            }).join(",") + ")", I(e, +!!t.startsWith("scale"))]
          })
        }
      }), s.length && (o.transform = new T(s, l)), e.call(this, o) || this
    }
    return d(t, e), t
  }(Chunk363920.AnimatedObject),
  T = function(e) {
    function t(t, n) {
      var r;
      return (r = e.call(this) || this).inputs = t, r.transforms = n, r._value = null, r._children = new Set, r
    }
    d(t, e);
    var n = t.prototype;
    return n.get = function() {
      return this._value || (this._value = this._get())
    }, n._get = function() {
      var e = this,
        t = "",
        n = true;
      return u.each(this.inputs, function(r, i) {
        var a = u.getFluidValue(r[0]),
          o = e.transforms[i](u.is.arr(a) ? a : r.map(u.getFluidValue)),
          s = o[0],
          l = o[1];
        t += " " + s, n = n && l
      }), n ? "none" : t
    }, n.addChild = function(e) {
      var t = this;
      this._children.size || u.each(this.inputs, function(e) {
        return u.each(e, function(e) {
          var n = u.getFluidConfig(e);
          n && n.addChild(t)
        })
      }), this._children.add(e)
    }, n.removeChild = function(e) {
      var t = this;
      this._children.delete(e), this._children.size || u.each(this.inputs, function(e) {
        return u.each(e, function(e) {
          var n = u.getFluidConfig(e);
          n && n.removeChild(t)
        })
      })
    }, n.onParentChange = function(e) {
      "change" == e.type && (this._value = null), u.each(this._children, function(t) {
        t.onParentChange(e)
      })
    }, t
  }(Chunk698091.FluidValue),
  A = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
Chunk41958.Globals.assign({
  colorNames: l,
  createStringInterpolator: Chunk179237.createStringInterpolator,
  batchedUpdates: Chunk603113.unstable_batchedUpdates
});
var C = Chunk363920.createHost(A, {
  applyAnimatedValues: h,
  createAnimatedStyle: function(e) {
    return new S(e)
  },
  getComponentProps: function(e) {
    return e.scrollTop, e.scrollLeft, i(e, ["scrollTop", "scrollLeft"])
  }
}).animated;
Object.keys(Chunk41958).forEach(function(e) {
  "default" !== e && Object.defineProperty(t, e, {
    enumerable: true,
    get: function() {
      return a[e]
    }
  })
}), exports.a = C, exports.animated = C