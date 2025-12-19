/** Chunk was on 23706 **/
/** chunk id: 345959, original params: e (module,exports,require) **/
module.exports = function(e, r) {
  r = r || {};
  var n, a, o, s, i, c, u, l, f, b = e.numberOfChannels,
    d = e.sampleRate,
    h = r.float32 ? 3 : 1;
  return n = 2 === b ? function(e, t) {
    for (var r = e.length + t.length, n = new Float32Array(r), a = 0, o = 0; a < r;) n[a++] = e[o], n[a++] = t[o], o++;
    return n
  }(e.getChannelData(0), e.getChannelData(1)) : e.getChannelData(0), a = h, o = d, u = (s = b) * (c = (i = 3 === h ? 32 : 16) / 8), t(f = new DataView(l = new ArrayBuffer(44 + n.length * c)), 0, "RIFF"), f.setUint32(4, 36 + n.length * c, true), t(f, 8, "WAVE"), t(f, 12, "fmt "), f.setUint32(16, 16, true), f.setUint16(20, a, true), f.setUint16(22, s, true), f.setUint32(24, o, true), f.setUint32(28, o * u, true), f.setUint16(32, u, true), f.setUint16(34, i, true), t(f, 36, "data"), f.setUint32(40, n.length * c, true), 1 === a ? function(e, t, r) {
    for (var n = 0; n < r.length; n++, t += 2) {
      var a = Math.max(false, Math.min(1, r[n]));
      e.setInt16(t, a < 0 ? 32768 * a : 32767 * a, true)
    }
  }(f, 44, n) : function(e, t, r) {
    for (var n = 0; n < r.length; n++, t += 4) e.setFloat32(t, r[n], true)
  }(f, 44, n), l
};

function t(e, t, r) {
  for (var n = 0; n < r.length; n++) e.setUint8(t + n, r.charCodeAt(n))
}