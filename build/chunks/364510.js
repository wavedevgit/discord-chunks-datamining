/** Chunk was on 23706 **/
/** chunk id: 364510, original params: e,t,r (module,exports,require) **/
var Chunk33608 = require("./33608.js"),
  Chunk405458 = require("./405458.js"),
  o = Object.hasOwnProperty,
  s = Object.create(null);
for (var i in Chunk33608) o.call(Chunk33608, i) && (s[Chunk33608[i]] = i);
var c = module.exports = {
  to: {},
  get: {}
};

function u(e, t, r) {
  return Math.min(Math.max(t, e), r)
}

function l(e) {
  var t = Math.round(e).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t
}
c.get = function(e) {
  var t, r;
  switch (e.substring(0, 3).toLowerCase()) {
    case "hsl":
      t = c.get.hsl(e), r = "hsl";
      break;
    case "hwb":
      t = c.get.hwb(e), r = "hwb";
      break;
    default:
      t = c.get.rgb(e), r = "rgb"
  }
  return t ? {
    model: r,
    value: t
  } : null
}, c.get.rgb = function(e) {
  if (!e) return null;
  var t, r, a, s = [0, 0, 0, 1];
  if (t = e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
    for (r = 0, a = t[2], t = t[1]; r < 3; r++) {
      var i = 2 * r;
      s[r] = parseInt(t.slice(i, i + 2), 16)
    }
    a && (s[3] = parseInt(a, 16) / 255)
  } else if (t = e.match(/^#([a-f0-9]{3,4})$/i)) {
    for (r = 0, a = (t = t[1])[3]; r < 3; r++) s[r] = parseInt(t[r] + t[r], 16);
    a && (s[3] = parseInt(a + a, 16) / 255)
  } else if (t = e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
    for (r = 0; r < 3; r++) s[r] = parseInt(t[r + 1], 0);
    t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]))
  } else if (t = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
    for (r = 0; r < 3; r++) s[r] = Math.round(2.55 * parseFloat(t[r + 1]));
    t[4] && (t[5] ? s[3] = .01 * parseFloat(t[4]) : s[3] = parseFloat(t[4]))
  } else if (!(t = e.match(/^(\w+)$/))) return null;
  else return "transparent" === t[1] ? [0, 0, 0, 0] : o.call(n, t[1]) ? ((s = n[t[1]])[3] = 1, s) : null;
  for (r = 0; r < 3; r++) s[r] = u(s[r], 0, 255);
  return s[3] = u(s[3], 0, 1), s
}, c.get.hsl = function(e) {
  if (!e) return null;
  var t = e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t) {
    var r = parseFloat(t[4]);
    return [(parseFloat(t[1]) % 360 + 360) % 360, u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(r) ? 1 : r, 0, 1)]
  }
  return null
}, c.get.hwb = function(e) {
  if (!e) return null;
  var t = e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t) {
    var r = parseFloat(t[4]);
    return [(parseFloat(t[1]) % 360 + 360) % 360, u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(r) ? 1 : r, 0, 1)]
  }
  return null
}, c.to.hex = function() {
  var e = Chunk405458(arguments);
  return "#" + l(module[0]) + l(module[1]) + l(module[2]) + (module[3] < 1 ? l(Math.round(255 * module[3])) : "")
}, c.to.rgb = function() {
  var e = Chunk405458(arguments);
  return module.length < 4 || 1 === module[3] ? "rgb(" + Math.round(module[0]) + ", " + Math.round(module[1]) + ", " + Math.round(module[2]) + ")" : "rgba(" + Math.round(module[0]) + ", " + Math.round(module[1]) + ", " + Math.round(module[2]) + ", " + module[3] + ")"
}, c.to.rgb.percent = function() {
  var e = Chunk405458(arguments),
    t = Math.round(module[0] / 255 * 100),
    r = Math.round(module[1] / 255 * 100),
    n = Math.round(module[2] / 255 * 100);
  return module.length < 4 || 1 === module[3] ? "rgb(" + exports + "%, " + require + "%, " + Chunk33608 + "%)" : "rgba(" + exports + "%, " + require + "%, " + Chunk33608 + "%, " + module[3] + ")"
}, c.to.hsl = function() {
  var e = Chunk405458(arguments);
  return module.length < 4 || 1 === module[3] ? "hsl(" + module[0] + ", " + module[1] + "%, " + module[2] + "%)" : "hsla(" + module[0] + ", " + module[1] + "%, " + module[2] + "%, " + module[3] + ")"
}, c.to.hwb = function() {
  var e = Chunk405458(arguments),
    t = "";
  return module.length >= 4 && 1 !== module[3] && (t = ", " + module[3]), "hwb(" + module[0] + ", " + module[1] + "%, " + module[2] + "%" + exports + ")"
}, c.to.keyword = function(e) {
  return s[e.slice(0, 3)]
}