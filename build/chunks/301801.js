/** Chunk was on 93886 **/
n.d(t, {
  H: () => i
}), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(392711),
  a = n(823379);
let l = new Worker(new URL("/assets/" + n.u("96491"), n.b));

function i(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    o = (0, r.uniqueId)();
  return new Promise(r => {
    let s = t => {
      let {
        data: {
          id: n,
          foundItemIndexes: i
        }
      } = t;
      o === n && r(i.map(t => e[t]).filter(a.lm)), null == l || l.removeEventListener("message", s)
    };
    null == l || l.addEventListener("message", s);
    let c = {
      id: o,
      searchTerm: n,
      searchStrings: e.map(t),
      useRegex: i
    };
    null == l || l.postMessage(c)
  })
}