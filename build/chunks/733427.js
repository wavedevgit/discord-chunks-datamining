/** Chunk was on 67127 **/
n.d(t, {
  Z: () => c
});
var r = n(73800);
let c = () => {
  let e = r.useRef(!0);
  return r.useEffect(() => () => {
    e.current = !1
  }, []), r.useCallback(() => e.current, [])
}