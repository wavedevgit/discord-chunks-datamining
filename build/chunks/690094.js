/** Chunk was on 31422 **/
/** chunk id: 690094, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk364510 = require("./364510.js"),
  Chunk114170 = require("./114170.js"),
  s = [].slice,
  o = ["keyword", "gray", "hex"],
  i = {};
Object.keys(Chunk114170).forEach(function(e) {
  i[s.call(n[e].labels).sort().join("")] = e
});
var c = {};

function l(e, t) {
  if (!(this instanceof l)) return new l(e, t);
  if (t && t in o && (t = null), t && !(t in n)) throw Error("Unknown model: " + t);
  if (null == e) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e instanceof l) this.model = e.model, this.color = e.color.slice(), this.valpha = e.valpha;
  else if ("string" == typeof e) {
    var r, u, f = a.get(e);
    if (null === f) throw Error("Unable to parse color from string: " + e);
    this.model = f.model, u = n[this.model].channels, this.color = f.value.slice(0, u), this.valpha = "number" == typeof f.value[u] ? f.value[u] : 1
  } else if (e.length) {
    this.model = t || "rgb", u = n[this.model].channels;
    var d = s.call(e, 0, u);
    this.color = b(d, u), this.valpha = "number" == typeof e[u] ? e[u] : 1
  } else if ("number" == typeof e) e &= 0xffffff, this.model = "rgb", this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e], this.valpha = 1;
  else {
    this.valpha = 1;
    var h = Object.keys(e);
    "alpha" in e && (h.splice(h.indexOf("alpha"), 1), this.valpha = "number" == typeof e.alpha ? e.alpha : 0);
    var p = h.sort().join("");
    if (!(p in i)) throw Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = i[p];
    var m = n[this.model].labels,
      g = [];
    for (r = 0; r < m.length; r++) g.push(e[m[r]]);
    this.color = b(g)
  }
  if (c[this.model])
    for (r = 0, u = n[this.model].channels; r < u; r++) {
      var y = c[this.model][r];
      y && (this.color[r] = y(this.color[r]))
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
}

function u(e, t, r) {
  return (e = Array.isArray(e) ? e : [e]).forEach(function(e) {
      (c[e] || (c[e] = []))[t] = r
    }), e = e[0],
    function(a) {
      var n;
      return arguments.length ? (r && (a = r(a)), (n = this[e]()).color[t] = a) : (n = this[e]().color[t], r && (n = r(n))), n
    }
}

function f(e) {
  return function(t) {
    return Math.max(0, Math.min(e, t))
  }
}

function b(e, t) {
  for (var r = 0; r < t; r++) "number" != typeof e[r] && (e[r] = 0);
  return e
}
l.prototype = {
  toString: function() {
    return this.string()
  },
  toJSON: function() {
    return this[this.model]()
  },
  string: function(e) {
    var t = this.model in a.to ? this : this.rgb(),
      r = 1 === (t = t.round("number" == typeof e ? e : 1)).valpha ? t.color : t.color.concat(this.valpha);
    return a.to[t.model](r)
  },
  percentString: function(e) {
    var t = this.rgb().round("number" == typeof e ? e : 1),
      r = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
    return a.to.rgb.percent(r)
  },
  array: function() {
    return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
  },
  object: function() {
    for (var e = {}, t = Chunk114170[this.model].channels, r = Chunk114170[this.model].labels, a = 0; Chunk364510 < exports; Chunk364510++) module[require[Chunk364510]] = this.color[Chunk364510];
    return 1 !== this.valpha && (module.alpha = this.valpha), module
  },
  unitArray: function() {
    var e = this.rgb().color;
    return module[0] /= 255, module[1] /= 255, module[2] /= 255, 1 !== this.valpha && module.push(this.valpha), module
  },
  unitObject: function() {
    var e = this.rgb().object();
    return module.r /= 255, module.g /= 255, module.b /= 255, 1 !== this.valpha && (module.alpha = this.valpha), module
  },
  round: function(e) {
    var t;
    return e = Math.max(e || 0, 0), new l(this.color.map((t = e, function(e) {
      return Number(e.toFixed(t))
    })).concat(this.valpha), this.model)
  },
  alpha: function(e) {
    return arguments.length ? new l(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha
  },
  red: u("rgb", 0, f(255)),
  green: u("rgb", 1, f(255)),
  blue: u("rgb", 2, f(255)),
  hue: u(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(e) {
    return (e % 360 + 360) % 360
  }),
  saturationl: u("hsl", 1, f(100)),
  lightness: u("hsl", 2, f(100)),
  saturationv: u("hsv", 1, f(100)),
  value: u("hsv", 2, f(100)),
  chroma: u("hcg", 1, f(100)),
  gray: u("hcg", 2, f(100)),
  white: u("hwb", 1, f(100)),
  wblack: u("hwb", 2, f(100)),
  cyan: u("cmyk", 0, f(100)),
  magenta: u("cmyk", 1, f(100)),
  yellow: u("cmyk", 2, f(100)),
  black: u("cmyk", 3, f(100)),
  x: u("xyz", 0, f(100)),
  y: u("xyz", 1, f(100)),
  z: u("xyz", 2, f(100)),
  l: u("lab", 0, f(100)),
  a: u("lab", 1),
  b: u("lab", 2),
  keyword: function(e) {
    return arguments.length ? new l(e) : n[this.model].keyword(this.color)
  },
  hex: function(e) {
    return arguments.length ? new l(e) : a.to.hex(this.rgb().round().color)
  },
  rgbNumber: function() {
    var e = this.rgb().color;
    return (255 & module[0]) << 16 | (255 & module[1]) << 8 | 255 & module[2]
  },
  luminosity: function() {
    for (var e = this.rgb().color, t = [], r = 0; require < module.length; require++) {
      var a = module[require] / 255;
      exports[require] = Chunk364510 <= .03928 ? Chunk364510 / 12.92 : Math.pow((Chunk364510 + .055) / 1.055, 2.4)
    }
    return .2126 * exports[0] + .7152 * exports[1] + .0722 * exports[2]
  },
  contrast: function(e) {
    var t = this.luminosity(),
      r = e.luminosity();
    return t > r ? (t + .05) / (r + .05) : (r + .05) / (t + .05)
  },
  level: function(e) {
    var t = this.contrast(e);
    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
  },
  isDark: function() {
    var e = this.rgb().color;
    return (299 * module[0] + 587 * module[1] + 114 * module[2]) / 1e3 < 128
  },
  isLight: function() {
    return !this.isDark()
  },
  negate: function() {
    for (var e = this.rgb(), t = 0; exports < 3; exports++) module.color[exports] = 255 - module.color[exports];
    return module
  },
  lighten: function(e) {
    var t = this.hsl();
    return t.color[2] += t.color[2] * e, t
  },
  darken: function(e) {
    var t = this.hsl();
    return t.color[2] -= t.color[2] * e, t
  },
  saturate: function(e) {
    var t = this.hsl();
    return t.color[1] += t.color[1] * e, t
  },
  desaturate: function(e) {
    var t = this.hsl();
    return t.color[1] -= t.color[1] * e, t
  },
  whiten: function(e) {
    var t = this.hwb();
    return t.color[1] += t.color[1] * e, t
  },
  blacken: function(e) {
    var t = this.hwb();
    return t.color[2] += t.color[2] * e, t
  },
  grayscale: function() {
    var e = this.rgb().color,
      t = .3 * module[0] + .59 * module[1] + .11 * module[2];
    return l.rgb(exports, exports, exports)
  },
  fade: function(e) {
    return this.alpha(this.valpha - this.valpha * e)
  },
  opaquer: function(e) {
    return this.alpha(this.valpha + this.valpha * e)
  },
  rotate: function(e) {
    var t = this.hsl(),
      r = t.color[0];
    return r = (r = (r + e) % 360) < 0 ? 360 + r : r, t.color[0] = r, t
  },
  mix: function(e, t) {
    if (!e || !e.rgb) throw Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e);
    var r = e.rgb(),
      a = this.rgb(),
      n = true === t ? .5 : t,
      s = 2 * n - 1,
      o = r.alpha() - a.alpha(),
      i = ((s * o == false ? s : (s + o) / (1 + s * o)) + 1) / 2,
      c = 1 - i;
    return l.rgb(i * r.red() + c * a.red(), i * r.green() + c * a.green(), i * r.blue() + c * a.blue(), r.alpha() * n + a.alpha() * (1 - n))
  }
}, Object.keys(Chunk114170).forEach(function(e) {
  if (false === o.indexOf(e)) {
    var t = n[e].channels;
    l.prototype[e] = function() {
      if (this.model === e) return new l(this);
      if (arguments.length) return new l(arguments, e);
      var r, a = "number" == typeof arguments[t] ? t : this.valpha;
      return new l((Array.isArray(r = n[this.model][e].raw(this.color)) ? r : [r]).concat(a), e)
    }, l[e] = function(r) {
      return "number" == typeof r && (r = b(s.call(arguments), t)), new l(r, e)
    }
  }
}), module.exports = l