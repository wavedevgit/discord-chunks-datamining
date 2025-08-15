/** Chunk was on 56035 **/
/** chunk id: 293501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NN: () => m,
  b1: () => d
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk304809 = require("./304809.js"),
  Chunk586826 = require("./586826.js"),
  Chunk943351 = require("./943351.js");
let o = new Worker(new URL("/assets/" + require.u("14315"), require.b)),
  u = (0, Chunk304809.N)();
async function c(e) {
  if (null == u) throw Error("Failed to create audio context");
  let t = await e.arrayBuffer();
  return (await u.decodeAudioData(t)).getChannelData(0)
}

function d(e) {
  let [t, n] = l.useState(null), [a, i] = l.useState(null);
  return l.useEffect(() => {
    if (null == e) return;
    let t = (0, s.hp)(e);
    t !== a && (i(t), n(null), c(e).then(n))
  }, [a, e]), t
}
let f = function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}({}, Chunk943351.nl);

function m(e, t, n) {
  let [i, u] = l.useState(null), [c, d] = l.useState(null), [m, h] = l.useState(1), {
    setMaxVolume: g
  } = (0, r.p)(), p = l.useCallback((e, t) => {
    var l;
    d(null), (l = t.offsetWidth, new Promise(t => {
      let i = (0, a.Z)(),
        r = e => {
          let {
            data: {
              waveform: n,
              id: l,
              normalizedVolumeMultipler: a
            }
          } = e;
          i === l && (t(n), h(a)), null == o || o.removeEventListener("message", r)
        };
      null == o || o.addEventListener("message", r), null == o || o.postMessage({
        id: i,
        options: n,
        config: f,
        width: l,
        rawBufferData: e
      })
    })).then(d)
  }, [n]);
  return l.useEffect(() => {
    if (null == e || null == t) return;
    let l = (0, s.V3)(e, n);
    i !== l && (u(l), p(e, t))
  }, [e, p, t, n, i]), l.useEffect(() => {
    g(m)
  }, [m, g]), c
}