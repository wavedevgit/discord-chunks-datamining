/** Chunk was on 42758 **/
n.d(t, {
  a: () => s
}), n(388685);
var i = n(73800),
  r = n(363577);
let s = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
    o = (0, r.M)(e, t, n),
    [a, l] = i.useState(void 0);
  return i.useEffect(() => {
    "" === e || e === s ? l(void 0) : null != o && l(o)
  }, [o, e, s]), a
}