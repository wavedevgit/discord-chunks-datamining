/** Chunk was on 56035 **/
/** chunk id: 293501, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  NN: () => m,
  b1: () => d
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk304809 = require("./304809.js"),
  Chunk586826 = require("./586826.js"),
  Chunk943351 = require("./943351.js");
let s = new Worker(new URL("/assets/" + require.u("14315"), require.b)),
  u = (0, Chunk304809.N)();
async function c(e) {
  if (null == u) throw Error("Failed to create audio context");
  let n = await e.arrayBuffer();
  return (await u.decodeAudioData(n)).getChannelData(0)
}

function d(e) {
  let [n, t] = a.useState(null), [l, i] = a.useState(null);
  return a.useEffect(() => {
    if (null == e) return;
    let n = (0, o.hp)(e);
    n !== l && (i(n), t(null), c(e).then(t))
  }, [l, e]), n
}
let f = function(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}({}, Chunk943351.nl);

function m(e, n, t) {
  let [i, u] = a.useState(null), [c, d] = a.useState(null), [m, g] = a.useState(1), {
    setMaxVolume: h
  } = (0, r.p)(), p = a.useCallback((e, n) => {
    var a;
    d(null), (a = n.offsetWidth, new Promise(n => {
      let i = (0, l.Z)(),
        r = e => {
          let {
            data: {
              waveform: t,
              id: a,
              normalizedVolumeMultipler: l
            }
          } = e;
          i === a && (n(t), g(l)), null == s || s.removeEventListener("message", r)
        };
      null == s || s.addEventListener("message", r), null == s || s.postMessage({
        id: i,
        options: t,
        config: f,
        width: a,
        rawBufferData: e
      })
    })).then(d)
  }, [t]);
  return a.useEffect(() => {
    if (null == e || null == n) return;
    let a = (0, o.V3)(e, t);
    i !== a && (u(a), p(e, n))
  }, [e, p, n, t, i]), a.useEffect(() => {
    h(m)
  }, [m, h]), c
}