/** Chunk was on web.js **/
/** chunk id: 429783, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = r(require("./830184.js")),
  Chunk247901 = require("./247901.js"),
  Chunk24156 = require("./24156.js"),
  Chunk179237 = require("./179237.js"),
  l = r(require("./865481.js")),
  Chunk774505 = require("./774505.js"),
  Chunk698091 = require("./698091.js"),
  d = r(require("./64995.js")),
  f = /^--/;

function p(e, t) {
  return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || f.test(e) || h.hasOwnProperty(e) && h[e] ? ("" + t).trim() : t + "px"
}
var _ = {};

function m(e, t) {
  if (!e.nodeType || !e.setAttribute) returnfalse;
  var n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
    r = t,
    o = r.style,
    a = r.children,
    s = r.scrollTop,
    l = r.scrollLeft,
    c = i(r, ["style", "children", "scrollTop", "scrollLeft"]),
    d = Object.values(c),
    m = Object.keys(c).map(function(t) {
      return n || e.hasAttribute(t) ? t : _[t] || (_[t] = t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
      }))
    });
  u.Globals.frameLoop.onWrite(function() {
    for (var t in true !== a && (e.textContent = a), o)
      if (o.hasOwnProperty(t)) {
        var n = p(t, o[t]);
        "float" === t ? t = "cssFloat" : f.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
      } m.forEach(function(t, n) {
      e.setAttribute(t, d[n])
    }), true !== s && (e.scrollTop = s), true !== l && (e.scrollLeft = l)
  })
}
var h = {
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
h = Object.keys(h).reduce(function(e, t) {
  return E.forEach(function(n) {
    return e[g(n, t)] = e[t]
  }), e
}, h);
var b = /^(matrix|translate|scale|rotate|skew)/,
  y = /^(translate)/,
  O = /^(rotate|skew)/,
  v = function(e, t) {
    return u.is.num(e) && 0 !== e ? e + t : e
  },
  S = function e(t, n) {
    return u.is.arr(t) ? t.every(function(t) {
      return e(t, n)
    }) : u.is.num(t) ? t === n : parseFloat(t) === n
  },
  I = function(e) {
    function t(t) {
      var n = t.x,
        r = t.y,
        o = t.z,
        a = i(t, ["x", "y", "z"]),
        s = [],
        l = [];
      return (n || r || o) && (s.push([n || 0, r || 0, o || 0]), l.push(function(e) {
        return ["translate3d(" + e.map(function(e) {
          return v(e, "px")
        }).join(",") + ")", S(e, 0)]
      })), u.each(a, function(e, t) {
        if ("transform" === t) s.push([e || ""]), l.push(function(e) {
          return [e, "" === e]
        });
        else if (b.test(t)) {
          if (delete a[t], u.is.und(e)) return;
          var n = y.test(t) ? "px" : O.test(t) ? "deg" : "";
          s.push(u.toArray(e)), l.push("rotate3d" === t ? function(e) {
            var t = e[0],
              r = e[1],
              i = e[2],
              o = e[3];
            return ["rotate3d(" + t + "," + r + "," + i + "," + v(o, n) + ")", S(o, 0)]
          } : function(e) {
            return [t + "(" + e.map(function(e) {
              return v(e, n)
            }).join(",") + ")", S(e, +!!t.startsWith("scale"))]
          })
        }
      }), s.length && (a.transform = new T(s, l)), e.call(this, a) || this
    }
    return d(t, e), t
  }(Chunk774505.AnimatedObject),
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
        var o = u.getFluidValue(r[0]),
          a = e.transforms[i](u.is.arr(o) ? o : r.map(u.getFluidValue)),
          s = a[0],
          l = a[1];
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
  C = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
Chunk247901.Globals.assign({
  colorNames: l,
  createStringInterpolator: Chunk179237.createStringInterpolator,
  batchedUpdates: Chunk24156.unstable_batchedUpdates
});
var A = Chunk774505.createHost(C, {
  applyAnimatedValues: m,
  createAnimatedStyle: function(e) {
    return new I(e)
  },
  getComponentProps: function(e) {
    return e.scrollTop, e.scrollLeft, i(e, ["scrollTop", "scrollLeft"])
  }
}).animated;
Object.keys(Chunk247901).forEach(function(e) {
  "default" !== e && Object.defineProperty(t, e, {
    enumerable: true,
    get: function() {
      return o[e]
    }
  })
}), exports.a = A, exports.animated = A