/** Chunk was on 50100 **/
n.d(t, {
  Z: () => o
});
var i = n(192379),
  r = n(924826),
  a = n(442837),
  l = n(607070);

function o(e, t, n) {
  let o = (0, a.e7)([l.Z], () => l.Z.keyboardModeEnabled),
    s = i.useCallback(e => {
      let n = document.querySelector(e),
        i = t.current;
      null != n && null != i && (n.focus(), i.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    c = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    u = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, r.ZP)({
    id: e,
    isEnabled: o,
    setFocus: s,
    scrollToStart: c,
    scrollToEnd: u,
    orientation: null == n ? void 0 : n.orientation
  })
}