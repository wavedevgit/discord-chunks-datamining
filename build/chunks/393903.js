/** Chunk was on 32249 **/
n.d(t, {
  y: () => i
});
var r = n(192379),
  o = n(237617),
  l = n(889711);

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = (0, r.useRef)(null),
    i = (0, r.useRef)(null),
    s = (0, o.Z)(() => e(n.current));
  return (0, r.useLayoutEffect)(() => {
    if (!t) return;
    null == i.current && (i.current = (0, l.pP)(s.current));
    let e = n.current,
      r = i.current;
    null != e && null != r && (0, l.YP)(r, e)
  }, [t, e, s]), (0, r.useEffect)(() => {
    if (!t) return;
    let e = n.current,
      r = i.current;
    if (null != e && null != r) return () => {
      (0, l.UC)(r, e)
    }
  }, [t]), n
}