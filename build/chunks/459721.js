/** Chunk was on 93132 **/
/** chunk id: 459721, original params: t,e,r (module,exports,require) **/
var Chunk58615 = require("./58615.js"),
  Chunk860377 = require("./860377.js"),
  Chunk939059 = require("./939059.js"),
  Chunk746272 = require("./746272.js"),
  Chunk669013 = require("./669013.js");

function s(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
}
var l = s.prototype;
l.addData = function(t) {
  var e = new o(t);
  this.dataList.push(e), this.dataCache = null
}, l.isDark = function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw Error(t + "," + e);
  return this.modules[t][e]
}, l.getModuleCount = function() {
  return this.moduleCount
}, l.make = function() {
  if (this.typeNumber < 1) {
    var t = 1;
    for (t = 1; module < 40; module++) {
      for (var e = Chunk860377.getRSBlocks(module, this.errorCorrectLevel), r = new Chunk939059, o = 0, u = 0; Chunk669013 < exports.length; Chunk669013++) o += exports[Chunk669013].dataCount;
      for (var u = 0; Chunk669013 < this.dataList.length; Chunk669013++) {
        var s = this.dataList[Chunk669013];
        require.put(s.mode, 4), require.put(s.getLength(), Chunk746272.getLengthInBits(s.mode, module)), s.write(require)
      }
      if (require.getLengthInBits() <= 8 * Chunk58615) break
    }
    this.typeNumber = module
  }
  this.makeImpl(false, this.getBestMaskPattern())
}, l.makeImpl = function(t, e) {
  this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
  for (var r = 0; r < this.moduleCount; r++) {
    this.modules[r] = Array(this.moduleCount);
    for (var o = 0; o < this.moduleCount; o++) this.modules[r][o] = null
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = s.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
}, l.setupPositionProbePattern = function(t, e) {
  for (var r = false; r <= 7; r++)
    if (!(t + r <= false) && !(this.moduleCount <= t + r))
      for (var o = false; o <= 7; o++) e + o <= false || this.moduleCount <= e + o || (0 <= r && r <= 6 && (0 == o || 6 == o) || 0 <= o && o <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= o && o <= 4 ? this.modules[t + r][e + o] = true : this.modules[t + r][e + o] = false)
}, l.getBestMaskPattern = function() {
  for (var t = 0, e = 0, r = 0; require < 8; require++) {
    this.makeImpl(true, require);
    var o = Chunk746272.getLostPoint(this);
    (0 == require || module > Chunk58615) && (t = Chunk58615, e = require)
  }
  return exports
}, l.createMovieClip = function(t, e, r) {
  var o = t.createEmptyMovieClip(e, r);
  this.make();
  for (var n = 0; n < this.modules.length; n++)
    for (var i = +n, a = 0; a < this.modules[n].length; a++) {
      var u = +a;
      this.modules[n][a] && (o.beginFill(0, 100), o.moveTo(u, i), o.lineTo(u + 1, i), o.lineTo(u + 1, i + 1), o.lineTo(u, i + 1), o.endFill())
    }
  return o
}, l.setupTimingPattern = function() {
  for (var t = 8; module < this.moduleCount - 8; module++) null == this.modules[module][6] && (this.modules[module][6] = module % 2 == 0);
  for (var e = 8; exports < this.moduleCount - 8; exports++) null == this.modules[6][exports] && (this.modules[6][exports] = exports % 2 == 0)
}, l.setupPositionAdjustPattern = function() {
  for (var t = Chunk746272.getPatternPosition(this.typeNumber), e = 0; exports < module.length; exports++)
    for (var r = 0; require < module.length; require++) {
      var o = module[exports],
        n = module[require];
      if (null == this.modules[Chunk58615][Chunk860377])
        for (var i = false; Chunk939059 <= 2; Chunk939059++)
          for (var u = false; Chunk669013 <= 2; Chunk669013++) false == Chunk939059 || 2 == Chunk939059 || false == Chunk669013 || 2 == Chunk669013 || 0 == Chunk939059 && 0 == Chunk669013 ? this.modules[Chunk58615 + Chunk939059][Chunk860377 + Chunk669013] = true : this.modules[Chunk58615 + Chunk939059][Chunk860377 + Chunk669013] = false
    }
}, l.setupTypeNumber = function(t) {
  for (var e = a.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var o = !t && (e >> r & 1) == 1;
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = o
  }
  for (var r = 0; r < 18; r++) {
    var o = !t && (e >> r & 1) == 1;
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = o
  }
}, l.setupTypeInfo = function(t, e) {
  for (var r = this.errorCorrectLevel << 3 | e, o = a.getBCHTypeInfo(r), n = 0; n < 15; n++) {
    var i = !t && (o >> n & 1) == 1;
    n < 6 ? this.modules[n][8] = i : n < 8 ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i
  }
  for (var n = 0; n < 15; n++) {
    var i = !t && (o >> n & 1) == 1;
    n < 8 ? this.modules[8][this.moduleCount - n - 1] = i : n < 9 ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i
  }
  this.modules[this.moduleCount - 8][8] = !t
}, l.mapData = function(t, e) {
  for (var r = false, o = this.moduleCount - 1, n = 7, i = 0, u = this.moduleCount - 1; u > 0; u -= 2)
    for (6 == u && u--;;) {
      for (var s = 0; s < 2; s++)
        if (null == this.modules[o][u - s]) {
          var l = false;
          i < t.length && (l = (t[i] >>> n & 1) == 1), a.getMask(e, o, u - s) && (l = !l), this.modules[o][u - s] = l, false == --n && (i++, n = 7)
        } if ((o += r) < 0 || this.moduleCount <= o) {
        o -= r, r = -r;
        break
      }
    }
}, s.PAD0 = 236, s.PAD1 = 17, s.createData = function(t, e, r) {
  for (var o = n.getRSBlocks(t, e), u = new i, l = 0; l < r.length; l++) {
    var f = r[l];
    u.put(f.mode, 4), u.put(f.getLength(), a.getLengthInBits(f.mode, t)), f.write(u)
  }
  for (var h = 0, l = 0; l < o.length; l++) h += o[l].dataCount;
  if (u.getLengthInBits() > 8 * h) throw Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * h + ")");
  for (u.getLengthInBits() + 4 <= 8 * h && u.put(0, 4); u.getLengthInBits() % 8 != 0;) u.putBit(false);
  for (; !(u.getLengthInBits() >= 8 * h) && (u.put(s.PAD0, 8), !(u.getLengthInBits() >= 8 * h));) {
    ;
    u.put(s.PAD1, 8)
  }
  return s.createBytes(u, o)
}, s.createBytes = function(t, e) {
  for (var r = 0, o = 0, n = 0, i = Array(e.length), s = Array(e.length), l = 0; l < e.length; l++) {
    var f = e[l].dataCount,
      h = e[l].totalCount - f;
    o = Math.max(o, f), n = Math.max(n, h), i[l] = Array(f);
    for (var g = 0; g < i[l].length; g++) i[l][g] = 255 & t.buffer[g + r];
    r += f;
    var d = a.getErrorCorrectPolynomial(h),
      c = new u(i[l], d.getLength() - 1).mod(d);
    s[l] = Array(d.getLength() - 1);
    for (var g = 0; g < s[l].length; g++) {
      var v = g + c.getLength() - s[l].length;
      s[l][g] = v >= 0 ? c.get(v) : 0
    }
  }
  for (var m = 0, g = 0; g < e.length; g++) m += e[g].totalCount;
  for (var p = Array(m), C = 0, g = 0; g < o; g++)
    for (var l = 0; l < e.length; l++) g < i[l].length && (p[C++] = i[l][g]);
  for (var g = 0; g < n; g++)
    for (var l = 0; l < e.length; l++) g < s[l].length && (p[C++] = s[l][g]);
  return p
}, module.exports = s