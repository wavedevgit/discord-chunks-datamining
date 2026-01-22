/** Chunk was on 19632 **/
/** chunk id: 335494, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js"), require("./927092.js"), require("./212978.js"), require("./648691.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk602674 = require("./602674.js"),
  Chunk696016 = require("./696016.js"),
  Chunk335416 = require("./335416.js"),
  Chunk48912 = require("./48912.js");
let p = new Map,
  v = Chunk64700.memo(function(e) {
    let {
      clipId: t,
      voiceAudioTracks: r,
      onMouseDown: v,
      className: f
    } = e, b = a.useRef(null), {
      ref: g,
      width: j,
      height: x
    } = (0, u.Ay)(), [y, C] = a.useState(null), k = (0, o.rdh)(s.A.colors.BACKGROUND_MOD_STRONG).hex();
    return (a.useEffect(() => (b.current = new Worker(new URL("/assets/" + l.u("33197"), l.b)), () => {
      var e;
      null == (e = b.current) || e.terminate()
    }), []), a.useEffect(() => {
      if (0 === j || 0 === r.length || null == b.current) return;
      let e = "".concat(t, "-").concat(r.map(e => e.trackName).join(","), "-").concat(j),
        l = p.get(e);
      if (null != l) return void C(l.waveform);
      let n = b.current,
        a = false,
        i = t => {
          if (a) return;
          let {
            waveform: l,
            error: n
          } = t.data;
          null != n ? d.nx.error("Failed to load waveform:", n) : (p.set(e, {
            waveform: l
          }), C(l))
        };
      return n.addEventListener("message", i), (async () => {
        try {
          let e = (0, c.v)();
          if (null == e) throw Error("Failed to create audio context");
          let t = await Promise.all(r.map(t => e.decodeAudioData(t.arrayBuffer.slice(0))));
          if (a) return;
          let l = [],
            i = [];
          for (let e of t) {
            let t = [];
            for (let l = 0; l < e.numberOfChannels; l++) {
              let n = new Float32Array(e.getChannelData(l));
              t.push(n), i.push(n.buffer)
            }
            l.push(t)
          }
          if (a) return;
          n.postMessage({
            trackChannels: l,
            width: j
          }, i)
        } catch (e) {
          a || d.nx.error("Failed to decode audio:", e)
        }
      })(), () => {
        a = true, n.removeEventListener("message", i)
      }
    }, [r, t, j]), a.useEffect(() => {
      if (null == g.current || null == y || (null != j ? j : 0) === 0 || (null != x ? x : 0) === 0) return;
      let e = g.current,
        t = e.getContext("2d");
      if (null == t) return;
      let {
        width: l,
        height: n
      } = e, a = l / y.length, r = -(a * (m.Jh.waveformBarWidth - 1));
      t.clearRect(0, 0, l, n), t.fillStyle = k;
      for (let e = 0; e < y.length; e++) {
        let l = y[e] * n,
          i = e * a + r;
        t.fillRect(i, n, a - r, -l)
      }
    }, [k, j, g, x, y]), 0 === r.length) ? null : (0, n.jsx)("div", {
      className: i()(h.k, f),
      children: (0, n.jsx)("canvas", {
        className: h.s,
        ref: g,
        width: (null != j ? j : 0) * 2,
        height: (null != x ? x : 0) * 2,
        onMouseDown: v
      })
    })
  })