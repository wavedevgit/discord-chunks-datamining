/** Chunk was on 56035 **/
/** chunk id: 293501, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  NN: () => m,
  b1: () => d
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk839514 = require("./839514.js"),
  Chunk586826 = require("./586826.js"),
  Chunk943351 = require("./943351.js");
let o = new Worker(new URL("/assets/" + require.u("14315"), require.b)),
  u = (0, Chunk839514.N)();
async function c(e) {
  if (null == u) throw Error("Failed to create audio context");
  let n = await e.arrayBuffer();
  return (await u.decodeAudioData(n)).getChannelData(0)
}

function d(e) {
  let [n, t] = l.useState(null), [a, i] = l.useState(null);
  return l.useEffect(() => {
    if (null == e) return;
    let n = (0, s.hp)(e);
    n !== a && (i(n), t(null), c(e).then(t))
  }, [a, e]), n
}
let f = function(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}({}, Chunk943351.nl);

function m(e, n, t) {
  let [i, u] = l.useState(null), [c, d] = l.useState(null), [m, g] = l.useState(1), {
    setMaxVolume: h
  } = (0, r.p)(), v = l.useCallback((e, n) => {
    var l;
    d(null), (l = n.offsetWidth, new Promise(n => {
      let i = (0, a.Z)(),
        r = e => {
          let {
            data: {
              waveform: t,
              id: l,
              normalizedVolumeMultipler: a
            }
          } = e;
          i === l && (n(t), g(a)), null == o || o.removeEventListener("message", r)
        };
      null == o || o.addEventListener("message", r), null == o || o.postMessage({
        id: i,
        options: t,
        config: f,
        width: l,
        rawBufferData: e
      })
    })).then(d)
  }, [t]);
  return l.useEffect(() => {
    if (null == e || null == n) return;
    let l = (0, s.V3)(e, t);
    i !== l && (u(l), v(e, n))
  }, [e, v, n, t, i]), l.useEffect(() => {
    h(m)
  }, [m, h]), c
}