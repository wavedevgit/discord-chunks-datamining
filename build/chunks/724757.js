/** Chunk was on 83166 **/
n.d(e, {
  Z: () => u
});
var r = n(192379),
  i = n(924826),
  l = n(442837),
  a = n(607070);

function u(t, e, n) {
  let u = (0, l.e7)([a.Z], () => a.Z.keyboardModeEnabled),
    s = r.useCallback(t => {
      let n = document.querySelector(t),
        r = e.current;
      null != n && null != r && (n.focus(), r.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [e]),
    o = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    _ = r.useCallback(() => new Promise(t => {
      let n = e.current;
      if (null == n) return t();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]);
  return (0, i.ZP)({
    id: t,
    isEnabled: u,
    setFocus: s,
    scrollToStart: o,
    scrollToEnd: _,
    orientation: null == n ? void 0 : n.orientation
  })
}