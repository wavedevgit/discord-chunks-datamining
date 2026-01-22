/** Chunk was on 92777 **/
/** chunk id: 207898, original params: e (module,exports,require) **/
module.exports = function(e, r) {
  r = r || {};
  var a, n, s, o, i, c, l, u, b, f = e.numberOfChannels,
    d = e.sampleRate,
    h = r.float32 ? 3 : 1;
  return a = 2 === f ? function(e, t) {
    for (var r = e.length + t.length, a = new Float32Array(r), n = 0, s = 0; n < r;) a[n++] = e[s], a[n++] = t[s], s++;
    return a
  }(e.getChannelData(0), e.getChannelData(1)) : e.getChannelData(0), n = h, s = d, l = (o = f) * (c = (i = 3 === h ? 32 : 16) / 8), t(b = new DataView(u = new ArrayBuffer(44 + a.length * c)), 0, "RIFF"), b.setUint32(4, 36 + a.length * c, true), t(b, 8, "WAVE"), t(b, 12, "fmt "), b.setUint32(16, 16, true), b.setUint16(20, n, true), b.setUint16(22, o, true), b.setUint32(24, s, true), b.setUint32(28, s * l, true), b.setUint16(32, l, true), b.setUint16(34, i, true), t(b, 36, "data"), b.setUint32(40, a.length * c, true), 1 === n ? function(e, t, r) {
    for (var a = 0; a < r.length; a++, t += 2) {
      var n = Math.max(false, Math.min(1, r[a]));
      e.setInt16(t, n < 0 ? 32768 * n : 32767 * n, true)
    }
  }(b, 44, a) : function(e, t, r) {
    for (var a = 0; a < r.length; a++, t += 4) e.setFloat32(t, r[a], true)
  }(b, 44, a), u
};

function t(e, t, r) {
  for (var a = 0; a < r.length; a++) e.setUint8(t + a, r.charCodeAt(a))
}