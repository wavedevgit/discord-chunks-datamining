/** Chunk was on 7384 **/
/** chunk id: 3072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  eR: () => m,
  hW: () => b,
  is: () => g
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk304809 = require("./304809.js"),
  Chunk120421 = require("./120421.js"),
  Chunk284539 = require("./284539.js"),
  Chunk477839 = require("./477839.js");
let c = (0, Chunk304809.N)();
async function d(e) {
  let t = await fetch(e),
    n = await (null == c ? true : c.decodeAudioData(await t.arrayBuffer()));
  if (null == n) return null;
  let i = null == c ? true : c.createBufferSource();
  return null == i ? null : (i.buffer = n, i)
}
async function u(e, t) {
  let n = await d(e);
  return null == n || null == c ? null : (n.connect(t).connect(c.destination), n.start(), n)
}

function m(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.volume),
    n = (0, r.e7)([a.Z], () => a.Z.isMuted);
  return (0, i.useCallback)(() => {
    let i = null == c ? true : c.createGain();
    null != i && (i.gain.value = n ? 0 : t, u(e, i))
  }, [n, e, t])
}

function p(e) {
  null != e.current && (e.current.stop(), e.current = null)
}

function g(e, t) {
  let n = (0, i.useRef)(null),
    s = (0, i.useRef)(null == c ? true : c.createGain()),
    l = (0, r.e7)([a.Z], () => a.Z.volume),
    o = (0, r.e7)([a.Z], () => a.Z.isMuted),
    d = (0, i.useRef)(true);
  (0, i.useEffect)(() => {
    (async () => {
      null != n.current && p(n), !t && null != s.current && (n.current = await u(e, s.current), null != n.current && (n.current.loop = true), d.current || p(n))
    })()
  }, [t, e]), (0, i.useEffect)(() => {
    null != s.current && (s.current.gain.value = o ? 0 : l)
  }, [o, l]), (0, i.useEffect)(() => () => {
    d.current = false, p(n)
  }, [])
}
let Chunk956294 = require("./956294.js"),
  f = {
    [Chunk477839.Vx.DEFAULT]: require("./635154.js"),
    [Chunk477839.Vx.CAT]: require("./382399.js"),
    [Chunk477839.Vx.SWORD]: require("./730602.js"),
    [Chunk477839.Vx.PIZZA]: require("./84171.js")
  };

function b() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [n] = (0, Chunk284539.Z)(Chunk477839.yN.CURSORS),
    i = null != (e = require.selectedCursor) ? module : Chunk477839.Vx.DEFAULT;
  return m(exports ? Chunk956294 : f[Chunk73800])
}