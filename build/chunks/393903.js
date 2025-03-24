/** Chunk was on 32249 **/
n.d(t, {
  y: () => l
});
var r = n(192379),
  o = n(237617),
  i = n(889711);

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = (0, r.useRef)(null),
    l = (0, r.useRef)(null),
    s = (0, o.Z)(() => e(n.current));
  return (0, r.useLayoutEffect)(() => {
    if (!t) return;
    null == l.current && (l.current = (0, i.pP)(s.current));
    let e = n.current,
      r = l.current;
    null != e && null != r && (0, i.YP)(r, e)
  }, [t, e, s]), (0, r.useEffect)(() => {
    if (!t) return;
    let e = n.current,
      r = l.current;
    if (null != e && null != r) return () => {
      (0, i.UC)(r, e)
    }
  }, [t]), n
}