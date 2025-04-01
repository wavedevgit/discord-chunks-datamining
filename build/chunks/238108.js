/** Chunk was on 13323 **/
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);
let i = function() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
    [t, n] = r.useState(!1),
    [i, s] = r.useState(0),
    [a, o] = r.useState(!1),
    [l, c] = r.useState(0);
  return r.useEffect(() => {
    i >= e && (o(!0), c(Math.floor(i / e)));
    let t = setTimeout(() => {
      s(0)
    }, 1e3);
    return () => clearTimeout(t)
  }, [i, e]), r.useEffect(() => {
    if (!t) {
      let e = setTimeout(() => {
        o(!1), c(0)
      }, 1e3);
      return () => clearTimeout(e)
    }
    s(e => e + 1)
  }, [t]), {
    onHover: () => {
      n(!0)
    },
    onUnhover: () => {
      n(!1)
    },
    isEasterEggTriggered: a,
    easterEggLevel: l
  }
}