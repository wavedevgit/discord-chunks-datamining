/** Chunk was on 98920 **/
/** chunk id: 563275, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./415506.js"), require("./17294.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk304809 = require("./304809.js"),
  Chunk356659 = require("./356659.js"),
  Chunk943351 = require("./943351.js"),
  Chunk442242 = require("./442242.js");
let p = new Map,
  f = Chunk473749.memo(function(e) {
    let {
      clipId: t,
      voiceAudioTracks: i,
      onMouseDown: f,
      className: v
    } = e, g = a.useRef(null), {
      ref: b,
      width: j,
      height: x
    } = (0, u.ZP)(), [y, C] = a.useState(null), k = (0, o.dQu)(s.Z.colors.BACKGROUND_MOD_STRONG).hex();
    return (a.useEffect(() => (g.current = new Worker(new URL("/assets/" + n.u("1088"), n.b)), () => {
      var e;
      null == (e = g.current) || e.terminate()
    }), []), a.useEffect(() => {
      if (0 === j || 0 === i.length || null == g.current) return;
      let e = "".concat(t, "-").concat(i.map(e => e.trackName).join(","), "-").concat(j),
        n = p.get(e);
      if (null != n) return void C(n.waveform);
      let l = g.current,
        a = false,
        r = t => {
          if (a) return;
          let {
            waveform: n,
            error: l
          } = t.data;
          if (null != l) return void d.jF.error("Failed to load waveform:", l);
          p.set(e, {
            waveform: n
          }), C(n)
        };
      return l.addEventListener("message", r), (async () => {
        try {
          let e = (0, c.N)();
          if (null == e) throw Error("Failed to create audio context");
          let t = await Promise.all(i.map(t => e.decodeAudioData(t.arrayBuffer.slice(0))));
          if (a) return;
          let n = [],
            r = [];
          for (let e of t) {
            let t = [];
            for (let n = 0; n < e.numberOfChannels; n++) {
              let l = new Float32Array(e.getChannelData(n));
              t.push(l), r.push(l.buffer)
            }
            n.push(t)
          }
          if (a) return;
          l.postMessage({
            trackChannels: n,
            width: j
          }, r)
        } catch (e) {
          a || d.jF.error("Failed to decode audio:", e)
        }
      })(), () => {
        a = true, l.removeEventListener("message", r)
      }
    }, [i, t, j]), a.useEffect(() => {
      if (null == b.current || null == y || (null != j ? j : 0) === 0 || (null != x ? x : 0) === 0) return;
      let e = b.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: n,
        height: l
      } = e, a = n / y.length, i = -(a * (m.nl.waveformBarWidth - 1));
      t.clearRect(0, 0, n, l), t.fillStyle = k;
      for (let e = 0; e < y.length; e++) {
        let n = y[e] * l,
          r = e * a + i;
        t.fillRect(r, l, a - i, -n)
      }
    }, [k, j, b, x, y]), 0 === i.length) ? null : (0, l.jsx)("div", {
      className: r()(h.container, v),
      children: (0, l.jsx)("canvas", {
        className: h.waveformCanvas,
        ref: b,
        width: (null != j ? j : 0) * 2,
        height: (null != x ? x : 0) * 2,
        onMouseDown: f
      })
    })
  })