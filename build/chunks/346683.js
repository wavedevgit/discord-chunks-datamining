/** Chunk was on 23919 (0a3f5146aab554d2.js) **/
n.d(t, {
  Q: () => r
}), n(47120);
var i = n(192379),
  l = n(542094);

function r(e) {
  let [t, n] = i.useState(e);
  return i.useLayoutEffect(() => {
    if (e === l.JS.LEAVE) {
      let t = setTimeout(() => n(e), 100);
      return () => clearTimeout(t)
    }
    n(e)
  }, [e]), t
}