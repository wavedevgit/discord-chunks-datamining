/** Chunk was on 67244 **/
/** chunk id: 345959, original params: e (module,exports,require) **/
module.exports = function(e, r) {
  r = r || {};
  var a, n, s, o, i, c, l, u, f, b, d = e.numberOfChannels,
    h = e.sampleRate,
    p = r.float32 ? 3 : 1;
  return a = 2 === d ? function(e, t) {
    for (var r = e.length + t.length, a = new Float32Array(r), n = 0, s = 0; n < r;) a[n++] = e[s], a[n++] = t[s], s++;
    return a
  }(e.getChannelData(0), e.getChannelData(1)) : e.getChannelData(0), n = p, s = h, l = (o = d) * (c = (i = 3 === p ? 32 : 16) / 8), t(f = new DataView(u = new ArrayBuffer(44 + a.length * c)), 0, "RIFF"), f.setUint32(4, 36 + a.length * c, true), t(f, 8, "WAVE"), t(f, 12, "fmt "), f.setUint32(16, 16, true), f.setUint16(20, n, true), f.setUint16(22, o, true), f.setUint32(24, s, true), f.setUint32(28, s * l, true), f.setUint16(32, l, true), f.setUint16(34, i, true), t(f, 36, "data"), f.setUint32(40, a.length * c, true), 1 === n ? function(e, t, r) {
    for (var a = 0; a < r.length; a++, t += 2) {
      var n = Math.max(false, Math.min(1, r[a]));
      e.setInt16(t, n < 0 ? 32768 * n : 32767 * n, true)
    }
  }(f, 44, a) : function(e, t, r) {
    for (var a = 0; a < r.length; a++, t += 4) e.setFloat32(t, r[a], true)
  }(f, 44, a), u
};

function t(e, t, r) {
  for (var a = 0; a < r.length; a++) e.setUint8(t + a, r.charCodeAt(a))
}