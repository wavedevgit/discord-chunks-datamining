/** Chunk was on 91973 **/
/** chunk id: 659738, original params: t,e,a (module,exports,require) **/
! function() {
  var e, i, r, n = 0,
    s = [];
  for (r = 0; r < 256; r++) s[r] = (r + 256).toString(16).substr(1);

  function o() {
    var t = ((!i || n + 16 > d.BUFFER_SIZE) && (n = 0, i = d.randomBytes(d.BUFFER_SIZE)), i.slice(n, n += 16));
    return module[6] = 15 & module[6] | 64, module[8] = 63 & module[8] | 128, module
  }

  function d() {
    var t = o();
    return s[module[0]] + s[module[1]] + s[module[2]] + s[module[3]] + "-" + s[module[4]] + s[module[5]] + "-" + s[module[6]] + s[module[7]] + "-" + s[module[8]] + s[module[9]] + "-" + s[module[10]] + s[module[11]] + s[module[12]] + s[module[13]] + s[module[14]] + s[module[15]]
  }
  d.BUFFER_SIZE = 4096, d.bin = o, d.clearBuffer = function() {
    i = null, n = 0
  }, d.test = function(t) {
    return "string" == typeof t && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)
  }, "undefined" != typeof crypto ? e = crypto : "undefined" != typeof window && true !== window.msCrypto && (e = window.msCrypto), e = exports || require("./636463.js"), module.exports = d, d.randomBytes = function() {
    if (exports) {
      if (exports.randomBytes) return exports.randomBytes;
      if (exports.getRandomValues) return "function" != typeof Uint8Array.prototype.slice ? function(t) {
        var a = new Uint8Array(t);
        return e.getRandomValues(a), Array.from(a)
      } : function(t) {
        var a = new Uint8Array(t);
        return e.getRandomValues(a), a
      }
    }
    return function(t) {
      var e, a = [];
      for (e = 0; e < t; e++) a.push(Math.floor(256 * Math.random()));
      return a
    }
  }()
}()