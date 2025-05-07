/** Chunk was on 42758 **/
n.d(t, {
  a: () => a
}), n(388685);
var i = n(73800),
  s = n(363577);
let a = function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
    r = (0, s.M)(e, t, n),
    [o, l] = i.useState(void 0);
  return i.useEffect(() => {
    "" === e || e === a ? l(void 0) : null != r && l(r)
  }, [r, e, a]), o
}