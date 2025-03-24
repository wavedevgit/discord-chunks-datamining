/** Chunk was on 32249 **/
n.d(t, {
  G6: () => i,
  JC: () => o,
  yv: () => l
}), n(47120);
var r = n(192379);
let o = e => null != e.text;

function l(e) {
  let t = 0 | Math.round(e),
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}

function i(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3,
    [o, l] = (0, r.useState)(e),
    i = (0, r.useRef)(null);
  return (0, r.useEffect)(() => () => {
    null != i.current && clearTimeout(i.current)
  }, [e]), [o, () => {
    l(t), null != i.current && clearTimeout(i.current), i.current = setTimeout(() => {
      l(e)
    }, n)
  }]
}