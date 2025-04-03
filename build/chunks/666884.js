/** Chunk was on 67544 **/
n.d(t, {
  Z: () => s
}), n(47120);
var r = n(192379);

function s(e, t) {
  let n = (0, r.useRef)(e),
    s = (0, r.useRef)(e),
    [o, a] = (0, r.useState)(0),
    i = (0, r.useRef)(0);
  (0, r.useEffect)(() => {
    n.current = e
  }, [e]);
  let c = (0, r.useCallback)(() => {
    i.current = (n.current - s.current) * .5 + .5 * i.current, s.current = n.current, a(i.current)
  }, []);
  return (0, r.useEffect)(() => {
    if (!t) {
      let e = setInterval(c, 1e3);
      return () => {
        c(), clearInterval(e)
      }
    }
  }, [c, t]), Math.round(o)
}