/** Chunk was on 56535 **/
n.d(t, {
  T: () => i,
  h: () => s
}), n(388685);
var r = n(73800),
  l = n(392711);
let a = e => e,
  i = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      l = arguments.length > 3 ? arguments[3] : void 0,
      i = s(a, t, n, l),
      o = r.useRef(e);
    return r.useEffect(() => {
      o.current = i(e)
    }, [e, i]), 0 === t ? e : o.current
  },
  s = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      a = arguments.length > 3 ? arguments[3] : void 0,
      i = r.useRef((0, l.throttle)(e, t, a));
    return r.useEffect(() => (i.current = (0, l.throttle)(e, t, a), () => {
      var e;
      null == (e = i.current) || e.cancel()
    }), [e, t, a, ...n]), i.current
  }