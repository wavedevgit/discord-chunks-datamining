/** Chunk was on 40556 **/
/** chunk id: 30875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $t: () => m,
  AX: () => d
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk602674 = require("./602674.js"),
  Chunk236972 = require("./236972.js"),
  Chunk335416 = require("./335416.js");
let u = new Worker(new URL("/assets/" + require.u("58777"), require.b)),
  o = (0, Chunk602674.v)();
async function c(e) {
  if (null == o) throw Error("Failed to create audio context");
  let t = await e.arrayBuffer();
  return (await o.decodeAudioData(t)).getChannelData(0)
}

function d(e) {
  let [t, n] = l.useState(null), [i, a] = l.useState(null);
  return l.useEffect(() => {
    if (null == e) return;
    let t = (0, s.Ux)(e);
    t !== i && (a(t), n(null), c(e).then(n))
  }, [i, e]), t
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
}({}, Chunk335416.Jh);

function m(e, t, n) {
  let [a, o] = l.useState(null), [c, d] = l.useState(null), [m, g] = l.useState(1), {
    setMaxVolume: h
  } = (0, r.L)(), v = l.useCallback((e, t) => {
    var l;
    d(null), (l = t.offsetWidth, new Promise(t => {
      let a = (0, i.A)(),
        r = e => {
          let {
            data: {
              waveform: n,
              id: l,
              normalizedVolumeMultipler: i
            }
          } = e;
          a === l && (t(n), g(i)), null == u || u.removeEventListener("message", r)
        };
      null == u || u.addEventListener("message", r), null == u || u.postMessage({
        id: a,
        options: n,
        config: f,
        width: l,
        rawBufferData: e
      })
    })).then(d)
  }, [n]);
  return l.useEffect(() => {
    if (null == e || null == t) return;
    let l = (0, s.HL)(e, n);
    a !== l && (o(l), v(e, t))
  }, [e, v, t, n, a]), l.useEffect(() => {
    h(m)
  }, [m, h]), c
}